import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
    return (
        <div className="policy-page">
            <div className="policy-card">
                <Link to="/" className="back-link">← Back to Home</Link>
                <h1>Terms of Service</h1>
                <p className="policy-date"><strong>Effective Date: July 13, 2026</strong></p>

                <p>Welcome to RTP Upholstery. By accessing our website or booking our professional upholstery, rug, and stain treatment cleaning services, you agree to comply with and be bound by the following Terms of Service.</p>

                <h2>1. Scope of Service</h2>
                <p>RTP Upholstery provides professional cleaning services within the Research Triangle Park area, centered in Morrisville, NC. While our specialists use commercial-grade equipment and industry-leading stain treatments, we cannot guarantee the complete removal of permanent stains, pre-existing chemical discolored markings, or extensive fabric wear and tear.</p>

                <h2>2. Customer Responsibilities</h2>
                <p>To ensure a safe and successful service, customers agree to:</p>
                <ul>
                    <li>Provide our cleaning specialist with safe access to the residential or commercial property at the scheduled time.</li>
                    <li>Point out any pre-existing structural damage, structural fragile points, or hidden tears in fabrics before cleaning begins.</li>
                    <li>Secure any valuable items or fragile belongings away from the immediate workspace area.</li>
                </ul>

                <h2>3. Payment Terms</h2>
                <p>Payment is due in full immediately upon the completion of the cleaning service. We accept standard payment forms as discussed during your booking window. All pricing provided via phone or text quote is honest and free of hidden fees based on the item dimensions provided.</p>

                <h2>4. Cancellations and Rescheduling</h2>
                <p>We appreciate reasonable notice if you need to cancel or reschedule your upholstery or rug care appointment. Please contact us as early as possible so we can adjust our service routing routes.</p>

                <h2>5. Limitation of Liability</h2>
                <p>RTP Upholstery is fully insured. However, RTP Upholstery is not liable for pre-existing manufacturer defects, structural dry rotting of fabrics due to age, or damage resulting from previous improper third-party DIY cleaning attempts.</p>

                <h2>6. Governing Law</h2>
                <p>These terms are governed by and construed in accordance with the laws of the State of North Carolina.</p>
            </div>
        </div>
    );
};

export default TermsOfService;
