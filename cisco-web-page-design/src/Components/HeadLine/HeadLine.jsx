import React from "react";
import styles from "./HeadLine.module.css";
import Login_icon from "../../assets/image/loginicon.png";
import World_icon from "../../assets/image/worldicon.png";

const Headline = () => {
  return (
    <div className={styles.Headline}>
      <div className={styles.Container}>
        <ul>
          <li>Contact</li>
          <li>Partners</li>
          <div className={styles.LoginIcon}>
            <ul>
              <img src={Login_icon} alt="UserIcon" style={{ width: "20px" }} />
              <li>Log In</li>
            </ul>
          </div>
          <div className={styles.Languge}>
            <img src={World_icon} alt="WorldIcon" style={{ width: "15px" }} />
            <li>En US</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Headline;
