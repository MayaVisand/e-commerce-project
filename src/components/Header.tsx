import React from 'react';
import styles from "./styles/Header.module.css";

const Header = () =>
{
    return ( <div className={styles.navBar}>
        <ul>
            <li><a href="#logo">LOGO</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul></div>);
};

export default Header;