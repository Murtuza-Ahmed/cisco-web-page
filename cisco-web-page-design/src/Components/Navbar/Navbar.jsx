import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/image/logo.png";
import Search_icon from "../../assets/image/searchicon.png";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Container}>
        <div className={styles.Image}>
          <img src={Logo} alt="Cisco Company Logo" style={{ width: "100px" }} />
        </div>
        <div className={styles.Menu}>
          <ul>
            <li>Products and Services</li>
            <li>Solutions</li>
            <li>Support</li>
            <li>Learn</li>
          </ul>
        </div>
        <div className={styles.RightMenu}>
          <ul>
            <li>Explore Cisco</li>
            <li>Search</li>
            <img
              src={Search_icon}
              alt="Search-Icon"
              style={{ width: "20px" }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
