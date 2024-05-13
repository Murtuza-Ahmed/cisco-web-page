import React from "react";
import styles from "./HeadLine.module.css";
import Login_icon from "../../assets/image/loginicon.png";
import World_icon from "../../assets/image/worldicon.png";
import Serach_icon from "../../assets/image/searchicon.png";
import Logo from "../../assets/image/logo.png";

const Headline = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Container}>
          <div className={styles.HeadlinePadding}>
            <div className={styles.Headline}>
              <div className={styles.Logo}>
                <img
                  src={Logo}
                  alt="Logo_CiscoCompany"
                  style={{ width: "80px" }}
                />
              </div>
              <div className={styles.ContainerSection}>
                <div className={styles.Contact}>
                  <ul>
                    <li>Contact</li>
                    <li>Partners</li>
                  </ul>
                </div>
                <div className={styles.LoginIcon}>
                  <ul>
                    <img
                      src={Login_icon}
                      alt="UserIcon"
                      style={{ width: "20px" }}
                    />
                    <li>Log In</li>
                    <div className={styles.SearchIcon}>
                      <img
                        src={Serach_icon}
                        alt="Search-Icon"
                        style={{ width: "20px" }}
                      />
                    </div>
                  </ul>
                </div>
                <div className={styles.Languge}>
                  <ul>
                    <img
                      src={World_icon}
                      alt="WorldIcon"
                      style={{ width: "15px" }}
                    />
                    <li>EN US</li>
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

export default Headline;
