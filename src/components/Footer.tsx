import React from "react";
import styles from  "./styles/Footer.module.css";
const Footer = () =>
{

    return (
        <div className={styles.footer}>
            <div className={styles.base}></div>
            <h6 className={styles.telRan}>TelRan &copy; 2022</h6>

        </div>
    );
};

export default Footer;