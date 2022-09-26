import React from 'react';
import "./Header.css";
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="" />
                <div className="menu">
                    <a href="/home">Home</a>
                    <a href="/service">Service</a>
                    <a href="/contact">Contact</a>
                    <a href="s">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;