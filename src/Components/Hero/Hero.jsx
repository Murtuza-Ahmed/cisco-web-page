import React from "react";
import styles from "./Hero.module.css";
import Banner from "../../assets/image/banner.avif";
import Responive_Banner from "../../assets/image/responsive-banner.webp";

const Hero = () => {
  return (
    <>
    <div>
      <div className={styles.Main}>
        <div className={styles.TaserImage}>
          <picture>
            <source srcSet={Banner} media="(min-width:1024px)" />
            <source srcSet={Responive_Banner} media="(min-width:768px)" />
            <source srcSet={Responive_Banner} />
            <img src={Banner} alt="Cisco_Image" />
          </picture>

          <div className={styles.Container}>
            <div className={styles.HeroPadding}>
              <div className={styles.Hero}>
                <div className={styles.Content}>
                  <h1>Be there as the future takes shape</h1>
                  <p>
                    Join us in Las Vegas June 2-6, where AI and our Splunk
                    acquisition take center stage. Participate and learn from
                    the experts and be a part of shaping the future.
                  </p>
                  <div className={styles.Button}>
                    <button className="contain">Register now</button>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
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
