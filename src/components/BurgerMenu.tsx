import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="burger-menu">
            <button onClick={toggleMenu} className="burger-button" aria-label="Toggle navigation menu">
                ☰
            </button>
            {isOpen && (
                <nav className="burger-nav">
                    <ul>
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/our-services" onClick={closeMenu}>Our Services</Link></li>
                        <li><Link to="/price-list" onClick={closeMenu}>Price List</Link></li>
                        <li><Link to="/our-story" onClick={closeMenu}>Our Story</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default BurgerMenu;