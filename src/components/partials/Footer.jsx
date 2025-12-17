import React from "react";
import styles from "../../Css/partials/Footer.module.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>

        {/* Column 1 */}
        <div className={styles["footer-col"]}>
          <h2 className={styles["footer-logo"]}>
            NearBy<span>NoteBook</span>
          </h2>
          <p>
            Your trusted marketplace for affordable books, notes & student essentials.
          </p>

          <div className={styles["social-links"]}>
            <Link to="#">🐦</Link>
            <Link to="#">📘</Link>
            <Link to="#">📸</Link>
            <Link to="#">▶️</Link>
          </div>
        </div>

        {/* Column 2 */}
        <div className={styles["footer-col"]}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/explore-more">Study Materials</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/sell-your-study-material">Sell</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className={styles["footer-col"]}>
          <h3>Support</h3>
          <ul>
            <li><Link to="#">How it Works</Link></li>
            <li><Link to="#">Pricing Policy</Link></li>
            <li><Link to="#">Return & Refund</Link></li>
            <li><Link to="#">Safety & Verification</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className={styles["footer-col"]}>
          <h3>Contact Us</h3>
          <p>Email: support@nearbynotebook.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: Delhi, India</p>
        </div>

      </div>

      <div className={styles["footer-bottom"]}>
        <p>© 2025 NearByNoteBook — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
