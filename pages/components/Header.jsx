import React from 'react'
import MobileMenu from './MobileMenu';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const buttonText = isOpen ? 'Close' : 'Menu';

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo">
                    <a href="/">Klas Näsman</a>
                </div>
                <ul className="header__ul">
                    <li><a href="/people">People</a></li>
                    <li><a href="/places">Places</a></li>
                    <li><a href="/wedding">Wedding</a></li>
                    <li><a href="/info">Info</a></li>
                </ul>
                <button className="header__button" onClick={toggleMenu}>{buttonText}</button>
            </nav>
            <MobileMenu isOpen={isOpen} />
        </header>
    )
}

export default Header
