import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/image/cisco-logo.svg";
import Search_icon from "../../assets/image/searchicon.png";
import World_icon from "../../assets/image/worldicon.png";

const Navbar = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Container}>
          <div className={styles.NavbarPadding}>
            <div className={styles.Navbar}>
              <div className={styles.ContainerSection}>
                <div className={styles.Image}>
                  <img
                    src={Logo}
                    alt="Cisco Company Logo"
                    style={{ width: "100px" }}
                  />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
