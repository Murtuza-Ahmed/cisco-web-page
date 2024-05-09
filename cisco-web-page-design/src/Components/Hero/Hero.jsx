import React from "react";
import styles from "./Hero.module.css";
import Banner from "../../assets/image/banner.avif";

const Hero = () => {
  return (
    <div>
      <div className={styles.Hero}>
        <div className={styles.BannerImage}>
          <img src={Banner} style={{ width: "100%" }} />
          <div className={styles.Content}>
            <h1>Be there as the future takes shape</h1>
            <p>
              Join us in Las Vegas June 2-6, where AI and our Splunk acquisition
              take center stage. Participate and learn from the experts and be a
              part of shaping the future.
            </p>
          </div>
          <div className={styles.Button}>
            <button>Register now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
