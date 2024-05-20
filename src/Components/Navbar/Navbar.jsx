import React from "react";
import styles from "./Navbar.module.css";
import commonStyles from "../../assets/Style/common.module.css";
import Logo from "../../assets/image/cisco-logo.svg";
import Search_icon from "../../assets/image/searchicon.png";

const Navbar = ({ isMenuOpen }) => {
  return (
    <>
      <section id={styles.navbar}>
        <div
          className={`${commonStyles.container_laptop} ${commonStyles.container_mobile} ${commonStyles.container_small_mobile}`}
        >
          <div className={styles.navbar_padding}>
            <div className={styles.main}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <div className={styles.left_side}>
                    <img src={Logo} alt="Cisco Company Logo" />
                    <div style={{ display: isMenuOpen ? "block" : "none" }}>
                      <ul>
                        <li>Products and Services</li>
                        <li>Solutions</li>
                        <li>Support</li>
                        <li>Learn</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.column}>
                  <div className={styles.right_side}>
                    <div style={{ display: isMenuOpen ? "flex" : "none" }}>
                      <ul>
                        <li>Explore Cisco</li>
                      </ul>
                    </div>

                    <ul>
                      <li>Search</li>

                      <img src={Search_icon} alt="Search-Icon" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
