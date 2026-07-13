import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        beforeAfterImg: "images/Photo1.jpg"
    },
        {
        id: 2,
        beforeAfterImg: "images/Photo2.jpg"
    },
        {
        id: 3,
        beforeAfterImg: "images/Photo3.jpg"
    }
];

const reviews = [
    {
        quote: 'RTP Upholstery did a great job cleaning my couch! He was quick to respond, reliable, thorough, and required no extra materials. Highly recommend!',
        name: 'Nina W.',
        location: 'Raleigh, NC'
    },
    {
        quote: 'RTP Upholstery did an awesome job for us. Super professional, on time, and really easy to work with. Our couch and rug look brand new. I honestly didn’t expect the results to be this good. Fair pricing, and you can tell they take pride in their work. Definitely recommending them to friends and family.',
        name: 'Naser O.',
        location: 'Garner, NC'
    },
    {
        quote: 'Andrew did an incredible job on our sectional - we have two dogs and the pet hair was out of control. He got it looking brand new. Highly recommend!',
        name: 'Sarah M.',
        location: 'Cary, NC'
    },
    {
        quote: 'RTP Upholstery did an excellent job on my sofas and chairs. Now they look like new. The work was completed quickly, to a high standard, and at a fair price. I highly recommend them and will definitely use their services again.',
        name: 'Maksim K.',
        location: 'Holly Springs, NC'
    },
    {
        quote: 'Super professional, on time, and our rug looks amazing. Fair pricing and great communication. Will definitely use again.',
        name: 'James T.',
        location: 'Morrisville, NC'
    },
    {
        quote: 'Used RTP Upholstery for a move-out clean on a rental property. Andrew was thorough, efficient, and the landlord was impressed. Saved my deposit!',
        name: 'Priya K.',
        location: 'Durham, NC'
    },
];

const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const visibleReviews = reviews.slice(activeIndex, activeIndex + 3);
    if (visibleReviews.length < 3) {
        visibleReviews.push(...reviews.slice(0, 3 - visibleReviews.length));
    }

    const showPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const showNext = () => {
        setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-copy">
                    <p className="eyebrow">Local Upholstery & Rug Care</p>
                    <h1>Professional Upholstery & Rug Cleaning in Research Triangle Park Area</h1>
                    <p className="hero-subtitle">Trusted local cleaning by RTP Upholstery - serving the Research Triangle area.</p>
                    <p className="hero-description">Fresh, clean furniture and rugs without the hassle. Expert stain removal, pet hair treatment, and deep cleaning for your home or rental. Locally owned and operated with a satisfaction guarantee.</p>
                </div>
                <div className="hero-badges">
                    <span>✓ Free Quotes</span>
                    <span>✓ Fast Response</span>
                    <span>✓ Satisfaction Guaranteed</span>
                </div>
            </section>

            <div className="cta-block">
                <p className="cta-text">Call or Text Today for a Free Quote.</p>
                <div className="cta-actions">
                    <a className="cta-button cta-button-primary" href="tel:+19198041383">📞 Call Now</a>
                    <a className="cta-button cta-button-secondary" href="sms:+19198041383">💬 Text Us</a>
                </div>
                <p className="supporting-info">No obligation • Fast response • Straightforward pricing</p>
            </div>

            <div className="supporting-block">
                <div className="guarantee-line">✓ Satisfaction Guaranteed • ✓ Locally Owned & Operated • ✓ No Hidden Fees</div>
            </div>

            <section className="transformations-section">
                <div className="gallery-inner">
                    <h3 className="gallery-title">Our Transformations</h3>
                    <p className="gallery-subtitle">Real results from local homes in the Research Triangle area.</p>
                    
                    <div className="gallery-grid-3col">
                    {projects.map((project) => (
                        <div key={project.id} className="gallery-card">
                            <div className="image-pair">
                                <div className="img-wrapper">
                                    <img src={project.beforeAfterImg} alt={`Professional upholstery cleaning transformation project ${project.id} - Before and After`} />
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            <div className="reviews-section">
                <div className="reviews-header">
                    <h3>What Your Neighbors Are Saying</h3>
                </div>
                <div className="reviews-carousel-wrapper">
                    <button className="carousel-button carousel-button-left" onClick={showPrev} aria-label="Show previous review">←</button>
                    <div className="reviews-carousel">
                        {visibleReviews.map((review) => (
                            <article className="review-card active" key={review.name}>
                                <div className="review-stars">★★★★★</div>
                                <details className="review-quote-details">
                                    <summary className="review-quote-summary" spellCheck="false">
                                        “{review.quote}”
                                    </summary>
                                </details>
                                <div className="review-author">
                                    <strong>{review.name}</strong>
                                    <span>{review.location}</span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <button className="carousel-button carousel-button-right" onClick={showNext} aria-label="Show next review">→</button>
                </div>
            </div>

            <div className="service-area-card">
                <h3>Serving the Research Triangle Area</h3>
                <p>RTP Upholstery proudly serves Morrisville, Cary, Raleigh, Durham, Chapel Hill, Apex, Holly Springs, and surrounding communities in the Triangle region of North Carolina. If you're nearby and not sure if we cover your area, just reach out - we're happy to help.</p>
                <div className="service-areas">🗺️ Morrisville • Cary • Raleigh • Durham • Chapel Hill • Apex • Holly Springs • & Surrounding Areas</div>
            </div>
        </div>
    );
};

export default Home;