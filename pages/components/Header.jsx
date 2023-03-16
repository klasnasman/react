import React from 'react'
import MobileMenu from './MobileMenu';
import { useEffect } from 'react';

const Header = () => {

    const toggleClass = () => {
        const menuMobile = document.getElementById('mobile__menu');
        const menuBtn = document.getElementById('header__button');
        menuMobile.classList.toggle("open");
        menuBtn.textContent = menuBtn.textContent == 'Menu' ? 'Close' : 'Menu';
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            const menuMobile = document.getElementById('mobile__menu');
            const menuBtn = document.getElementById('header__button');
            if (window.innerWidth > 950) {
                menuMobile.classList.remove('open');
                menuBtn.textContent = 'Menu';
            }
        });
    });

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo">
                    <a href="/">Klas Näsman</a>
                </div>
                <ul className="header__ul">
                    <li><a href="/portrait">Portrait</a></li>
                    <li><a href="/personal">Personal</a></li>
                    <li><a href="/wedding">Wedding</a></li>
                    <li><a href="/info">Info</a></li>
                </ul>
                <button id="header__button" onClick={toggleClass}>Menu</button>
            </nav>
            <MobileMenu />
        </header>


    )
}

export default Header
