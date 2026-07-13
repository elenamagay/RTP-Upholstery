import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="policy-page">
            <div className="policy-card">
                <Link to="/" className="back-link">← Back to Home</Link>
                <h1>Privacy Policy</h1>
                <p className="policy-date"><strong>Effective Date: July 13, 2026</strong></p>

                <p>At RTP Upholstery, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our professional upholstery and rug cleaning services.</p>

                <h2>1. Information We Collect</h2>
                <p>We only collect basic personal information that you voluntarily provide to us when you request a quote, book an appointment, or contact us directly via phone or text message. This information may include your name, phone number, email address, and service address.</p>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect strictly to fulfill your requests and run our business operations, including:</p>
                <ul>
                    <li>Scheduling and managing your cleaning appointments.</li>
                    <li>Providing accurate price estimates and service quotes.</li>
                    <li>Communicating with you regarding your scheduled services.</li>
                </ul>

                <h2>3. Information Sharing and Disclosure</h2>
                <p><strong>We do not sell, rent, trade, or share your personal information or phone numbers with third parties for marketing or promotional purposes.</strong> Your data is accessed exclusively by our local specialists to complete your requested services.</p>

                <h2>4. Data Security</h2>
                <p>We implement standard, reasonable security measures to protect the confidentiality of your personal information. However, please note that no transmission over the internet or mobile network can be guaranteed 100% secure.</p>

                <h2>5. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted directly on this page with an updated effective date.</p>

                <h2>6. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us directly via the phone number listed on our homepage.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
