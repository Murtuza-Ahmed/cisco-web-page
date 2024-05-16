import React from "react";
import styles from "./Navbar.module.css";
import commonStyles from "../../assets/Style/common.module.css";
import Logo from "../../assets/image/cisco-logo.svg";
import Search_icon from "../../assets/image/searchicon.png";

const Navbar = ({isMenuOpen}) => {
  console.log('ismenu' ,isMenuOpen )
  return (
    <div>
      <div className={styles.Main}>
        <div className={commonStyles.container}>
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
                <div style={{display: isMenuOpen ? "block" : "none"}}>
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
