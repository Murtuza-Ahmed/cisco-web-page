import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../pages/utils";

const Footer = () => {
  return (
    <div>
      <div className={styles.Footer}>
        <div className={styles.FooterContainer}>
          <div className={styles.FooterPadding}>
            <div className={styles.MenuContainer}>
              <div className={styles.Menu}>
                <ul>
                  <li>About Cisco</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                  <li>Connect with a partner</li>
                </ul>
              </div>
              <div className={styles.MenuIcon}>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src={getImageUrl("facebook.png")}
                        style={{ width: "50px" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={getImageUrl("twitter.png")} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={getImageUrl("linkedin.png")} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={getImageUrl("youtube.png")} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={getImageUrl("instagram.png")} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className={styles.FooterMenuEnd}>
              <div className={styles.FooterEnd}>
                <ul>
                  <li>
                    <a href="#">Feedback</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Statment</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Treadmarkd</a>
                  </li>
                  <li>
                    <a href="#">Supply Chain Transparency</a>
                  </li>
                  <li>
                    <a href="#">Newsroom</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
              <div className={styles.FooterCisco}>
                <p>©2024 Cisco Systems, Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
