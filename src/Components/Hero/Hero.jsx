import React from "react";
import styles from "./Hero.module.css";
import Banner from "../../assets/image/banner.avif";
import Responive_Banner from "../../assets/image/responsive-banner.webp";
import commounStyles from "../../assets/Style/common.module.css";

const Hero = () => {
  return (
    <>
      <section id={styles.hero_banner}>
        <div className={styles.main}>
          <div className={styles.reponsive_image}>
            <picture>
              <source srcSet={Banner} media="(min-width:1024px)" />
              <source srcSet={Responive_Banner} media="(min-width:768px)" />
              <source srcSet={Responive_Banner} />
              <img src={Banner} alt="Cisco Background Image" />
            </picture>
          </div>
          <div
            className={`${commounStyles.container_laptop} ${commounStyles.container_mobile} ${commounStyles.container_small_mobile} ${commounStyles.container_extra_small_mobile}`}
          >
            <div className={styles.hero_banner_padding}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <div className={styles.cisco_content}>
                    <h1>Be there as the future takes shape</h1>
                    <p>
                      Join us in Las Vegas June 2-6, where AI and our Splunk
                      acquisition take center stage. Participate and learn from
                      the experts and be a part of shaping the future.
                    </p>
                    <button className="contain">Register now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="hero_banner">
      <div className="container">
        <div className="sec_padding">
          <div className="main">
            <div className="row">
              <div className="col-6">
                 <div className="content">
                 <h1>Be there as the future takes shape</h1>
                  <p>
                    Join us in Las Vegas June 2-6, where AI and our Splunk
                    acquisition take center stage. Participate and learn from
                    the experts and be a part of shaping the future.
                  </p>
                  <div className={styles.Button}>
                    <button className="contain">Register now</button>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section> */}
    </>
  );
};

export default Hero;
