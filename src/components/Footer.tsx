import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                {/* Column 1: Brand & Service Radius */}
                <div className="footer-column">
                <h3 className="footer-title">RTP Upholstery</h3>
                <p className="footer-text">
                    📍 Based in Morrisville, NC
                </p>
                <p className="footer-subtext">
                    Serving the entire Research Triangle Park area, including Cary, Raleigh, Durham, Chapel Hill, Apex, Holly Springs, and surrounding communities.
                </p>
                </div>

                {/* Column 2: Specialty Services */}
                <div className="footer-column middle-column">
                    <h3 className="footer-title">Our Services</h3>
                    <ul className="footer-services-list">
                        <li>Upholstery Cleaning</li>
                        <li>Rug Cleaning</li>
                        <li>Pet Hair Removal</li>
                        <li>Move-Out Cleaning</li>
                        <li>Stain Treatment</li>
                    </ul>
                </div>

                {/* Column 3: Contact & Text Connect Links */}
                <div className="footer-column">
                    <h3 className="footer-title">Get in Touch</h3>
                
                    {/* Primary Phone Action */}
                    <a href="tel:+19198041383" className="footer-phone">
                        <span className="emoji">📞</span> +1 (919) 804-1383
                    </a>
                    
                    {/* Clean Editorial Navigation */}
                    <div className="footer-social-links">
                        <a href="https://www.facebook.com/share/1Br23Fkma5/" target="_blank" rel="noopener noreferrer" className="social-link link-facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg> Find us on Facebook
                        </a>
                        <a href="https://www.instagram.com/rtpupholstery?igsh=OWVxam42eTB2MW9t" target="_blank" rel="noopener noreferrer" className="social-link link-instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg> See our work on Instagram
                        </a>
                        <a href="https://maps.app.goo.gl/UgdMBASkx2Q8um489" target="_blank" rel="noopener noreferrer" className="social-link link-google">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/></svg> Find us on Google Maps
                        </a>
                    </div>
                </div>

                </div>

                {/* Bottom Legal & Copyright Bar */}
                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                    <p className="copyright">© 2026 RTP Upholstery — All rights reserved.</p>
                    <div className="legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span className="legal-divider">|</span>
                        <Link to="/terms-of-service">Terms of Service</Link>
                    </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;