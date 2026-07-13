import React from 'react';

const OurStory: React.FC = () => {
    return (
        <div className="story-page">
            <div className="story-hero">
                <div className="story-copy">
                    <h1>Meet Andrew - Your Local Upholstery Expert</h1>
                    <p>Hi, I'm Andrew, the founder and lead technician at RTP Upholstery. When I started this business, my goal was simple: to bring premium, hands-on expertise and a truly personal touch to furniture care across the Research Triangle Park region.</p>
                    <p>Based right here in Morrisville, NC, I proudly serve our local homeowners, renters, and property managers. I believe that exceptional service starts with respect - both for your time and your home. That's why I'm committed to completely transparent pricing, meticulous attention to detail, and stunning results.</p>
                </div>
                <img src="/images/OurStory.png" alt="Andrew, the upholstery expert" className="profile-image" />
            </div>

            <div className="story-card">
                <p>When you book with RTP Upholstery, you aren't dealing with a faceless franchise or a distant call center. You are partnering directly with me. Whether I'm refreshing a favorite family armchair or handling a comprehensive move-out deep clean, I treat your furniture as if it were my own - leaving it looking better than you ever thought possible.</p>
            </div>
        </div>
    );
};

export default OurStory;