import React from 'react';
import './Header.css';
import headerImage from './../img/header.png'; // Update with the correct path

const Header = () => {
    return (
        <div className="header">
            <img src={headerImage} alt="Dalat Thang 12" className="header-image" />
        </div>
    );
};
export default Header;