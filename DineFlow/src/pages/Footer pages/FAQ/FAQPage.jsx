import React from "react";
import "./faq.css";

const FAQPage = () => {
    return (
        <div className="faq-wrapper">

            {/* Page Header */}
            <div className="faq-hero">
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about the Graphura Restaurant Automation System</p>
                <span className="faq-update">Updated on 4 November 2025</span>
            </div>

            {/* FAQ Section */}
            <div className="faq-list">

                <div className="faq-item">
                    <h2>What is the Restaurant Automation System?</h2>
                    <p>
                        Graphura's automation suite helps restaurants manage orders, billing, 
                        inventory, kitchen operations, table tracking, and customer service — all in one place.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>How does online ordering work?</h2>
                    <p>
                        Customers can order through a website, QR menu, or mobile app. Orders instantly reach
                        the kitchen display system (KDS) for faster preparation.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>Does it support multiple branches?</h2>
                    <p>
                        Absolutely! You can manage menus, staff, reports, and analytics across multiple branches
                        from a single dashboard.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>How does inventory automation help?</h2>
                    <p>
                        The system tracks real-time stock levels, auto-deductions, low-stock alerts, wastage 
                        reports, and purchase projections.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>Can staff track table orders easily?</h2>
                    <p>
                        Yes. Live order status, ongoing bills, and waiter assignments are displayed clearly 
                        on a centralized screen.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>Is GST billing supported?</h2>
                    <p>
                        Yes. Graphura includes GST billing, discounts, split billing, and digital receipts.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>How secure is my restaurant data?</h2>
                    <p>
                        All your data is encrypted, stored securely on cloud servers, and backed up daily.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>Can I integrate Swiggy, Zomato, etc.?</h2>
                    <p>
                        Yes, Graphura supports Swiggy, Zomato, Dunzo, and other delivery platform integrations.
                    </p>
                </div>

                <div className="faq-item">
                    <h2>Do you provide customer support?</h2>
                    <p>
                        Our experts are available 24/7 via chat, call, and email for any assistance.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FAQPage;