import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import '../../style/orderConfirmationPage/OrderTracking.css';

const OrderTracking = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [currentStatus, setCurrentStatus] = useState(0);
  const [orderData, setOrderData] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);

  useEffect(() => {
    const loadOrderData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const dataParam = urlParams.get('data');
      
      if (dataParam) {
        try {
          const decodedData = JSON.parse(decodeURIComponent(dataParam));
          setOrderData(decodedData);
          return;
        } catch (e) {
          console.error("Error parsing URL data:", e);
        }
      }
      
      if (location.state?.orderDetails) {
        setOrderData(location.state.orderDetails);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/api/orders/${orderId}`);
        if (response.ok) {
          const data = await response.json();
          setOrderData(data.order || data);
        }
      } catch (error) {
        console.error("OrderTracking - Error fetching:", error);
      }
    };

    loadOrderData();
  }, [location.state, orderId]);

  useEffect(() => {
    if (!orderData || isCompleted) return;

    const statusUpdates = [
      { delay: 3000, index: 1, backendStatus: 'Preparing' },
      { delay: 8000, index: 2, backendStatus: 'Cooking' },
      { delay: 15000, index: 3, backendStatus: 'Completed' }
    ];

    const timers = statusUpdates.map(({ delay, index, backendStatus }) =>
      setTimeout(async () => {
        setCurrentStatus(index);
        
        try {
          const response = await fetch(
            `http://localhost:3000/api/orders/${orderData.orderId}/status`,
            {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ status: backendStatus })
            }
          );
          
          if (response.ok && backendStatus === 'Completed') {
            setTimeout(() => {
              setIsCompleted(true);
              setShowCompletionMessage(true);
            }, 500);
          }
        } catch (error) {
          console.error('Error updating order status:', error);
        }
      }, delay)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [orderData, isCompleted]);

  const orderStatuses = [
    { id: 0, title: 'Confirmed', icon: '✓' },
    { id: 1, title: 'Preparing', icon: '👨‍🍳' },
    { id: 2, title: 'Cooking', icon: '🔥' },
    { id: 3, title: 'Ready', icon: '✓' }
  ];

  if (!orderData) {
    return (
      <div className="order-tracking-page">
        <div className="tracking-container">
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Loading order details...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (isCompleted && showCompletionMessage) {
    return (
      <div className="order-tracking-page completion-page">
        <div className="confetti-container">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="confetti" style={{
              left: Math.random() * 100 + '%',
              delay: Math.random() * 0.5 + 's',
              '--duration': (Math.random() * 1 + 2) + 's'
            }}></div>
          ))}
        </div>
        <div className="tracking-container completion-container">
          <div className="completion-content">
            <div className="completion-icon-wrapper">
              <div className="completion-checkmark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>

            <h1 className="completion-title">Order Confirmed!</h1>
            <p className="completion-subtitle">Your order has been received and is being prepared</p>
            
            <div className="table-notification">
              <p className="table-info">Order will be delivered to</p>
              <p className="table-number">{orderData.tableNumber || 'Your Table'}</p>
            </div>

            <div className="completion-actions">
              <button 
                className="btn-primary" 
                onClick={() => navigate('/menu')}
              >
                Continue Ordering
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => navigate('/order')}
              >
                View All Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-tracking-page progress-page">
      <div className="tracking-container">
        <div className="tracking-header">
          <button className="back-button" onClick={() => navigate('/menu')}>
            ← Back to Menu
          </button>
          <h1 className="tracking-title">Order Status</h1>
          <p className="tracking-subtitle">Order #{orderData.orderId}</p>
        </div>

        <div className="tracking-content">
          <div className="status-section">
            <div className="status-timeline">
              {orderStatuses.map((status, index) => {
                const isActive = index <= currentStatus;
                const isCurrent = index === currentStatus;

                return (
                  <div key={status.id} className="status-item">
                    <div className={`status-step ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                      <span className="step-icon">{status.icon}</span>
                    </div>
                    
                    {index !== orderStatuses.length - 1 && (
                      <div className={`status-line ${isActive ? 'active' : ''}`}></div>
                    )}

                    <div className="status-label">
                      <p className={`step-title ${isActive ? 'active' : ''}`}>{status.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="estimated-card">
              <div className="estimated-icon">🕐</div>
              <div>
                <p className="estimated-title">Estimated time</p>
                <p className="estimated-time">15-20 mins</p>
              </div>
            </div>
          </div>

          <div className="order-details-section">
            <div className="details-card">
              <h2 className="details-title">Order Summary</h2>
              
              <div className="table-info">🏠 {orderData.tableNumber || 'N/A'}</div>

              {orderData.instructions && (
                <div className="instructions-box">
                  <h3 className="instructions-title">Special Instructions</h3>
                  <p className="instructions-text">{orderData.instructions}</p>
                </div>
              )}

              <div className="items-list">
                <p className="items-title">Items ({orderData.itemCount || 0})</p>
                {orderData.items && orderData.items.map((item, index) => (
                  <div key={index} className="item-row">
                    <div className="item-info">
                      <span className="item-quantity">{item.quantity}x</span>
                      <span className="item-name">{item.name}</span>
                    </div>
                    <span className="item-price">
                      ₹{((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="order-summary">
                <div className="summary-row">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">₹{(orderData.subtotal || 0).toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Tax (10%)</span>
                  <span className="summary-value">₹{(orderData.tax || 0).toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span className="summary-label">Total</span>
                  <span className="summary-value">₹{(orderData.total || 0).toFixed(2)}</span>
                </div>
              </div>

              {orderData.paymentId && (
                <div className="payment-info">
                  <p className="payment-label">Payment ID</p>
                  <p className="payment-id">{orderData.paymentId}</p>
                </div>
              )}

              <button className="btn-new-order" onClick={() => navigate('/menu')}>
                Back to Menu
              </button>
            </div>

            <div className="help-card">
              <h3 className="help-title">Need Help?</h3>
              <p className="help-text">If you have any questions, please contact our staff.</p>
              <button className="btn-contact">Contact Staff</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;