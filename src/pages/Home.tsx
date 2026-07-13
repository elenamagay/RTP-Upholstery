import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Fabric Sectional Clean",
    description: "Complete removal of embedded pet hair and tough water stains.",
    beforeImg: "images/sofa-before.jpg",
    afterImg: "images/sofa-after.jpg"
  },
  {
    id: 2,
    title: "Area Rug Revitalization",
    description: "Restored bright, original colors by removing high-traffic dirt.",
    beforeImg: "images/rug-before.jpg",
    afterImg: "images/rug-after.jpg"
  },
  {
    id: 3,
    title: "Stain Treatment",
    description: "Deep steam extraction targeting tough spills and dark discolorations.",
    beforeImg: "images/chair-before.jpg",
    afterImg: "images/chair-after.jpg"
  }
];

const reviews = [
    {
        quote: 'Andrew did an incredible job on our sectional — we have two dogs and the pet hair was out of control. He got it looking brand new. Highly recommend!',
        name: 'Sarah M.',
        location: 'Cary, NC'
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
    }
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
                            <img src={project.beforeImg} alt={`${project.title} before cleaning`} />
                            <span className="badge before-badge">Before</span>
                            </div>
                            <div className="img-wrapper">
                            <img src={project.afterImg} alt={`${project.title} after deep clean`} />
                            <span className="badge after-badge">After</span>
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
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
                                <p className="review-quote">“{review.quote}”</p>
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