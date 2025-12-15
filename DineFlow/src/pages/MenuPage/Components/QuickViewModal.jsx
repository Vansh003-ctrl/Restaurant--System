import { useEffect } from "react";
import { createPortal } from "react-dom";
import "../../../style/MenuPage/QuickViewModal.css";
import CategoryBadge from "./CategoryBadge";
import { FaClock } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

export default function QuickViewModal({ item, onClose, onAddToCart }) {
  if (!item) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div className="qv-overlay" onClick={onClose}>
      <div className="qv-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qv-image">
          <img src={item.image} alt={item.name} />
          <button className="qv-close" onClick={onClose}>
            ✕
          </button>
          <div className="qv-badge">
            <CategoryBadge category={item.category} />
          </div>
        </div>

        <div className="qv-content">
          <div className="qv-header">
            <h2>{item.name}</h2>
            <span className="qv-price">₹{item.price}</span>
          </div>

          <p className="qv-desc">{item.description}</p>

          <div className="qv-stats">
            <span>
              <div className="flexy">
                <FaStar size={12} /> {item.rating}
              </div>
            </span>
            <span>
              <div className="flexy">
                <FaClock size={12} /> {item.prepTime}
              </div>
            </span>
            <span>
              <div className="flexy">
                <GoGraph size={12} style={{ strokeWidth: 1 }} />
                {item.popularity}%
              </div>
            </span>
          </div>

          <div className="qv-section">
            <h4>Ingredients</h4>
            <div className="qv-tags">
              {item.ingredients.map((ing, i) => (
                <span key={i}>{ing}</span>
              ))}
            </div>
          </div>

          <button
            className="qv-add"
            onClick={() => {
              onAddToCart(item);
              onClose();
            }}
          >
            Add to Cart – ₹{item.price}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
