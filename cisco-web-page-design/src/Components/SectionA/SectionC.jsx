import React from "react";
import styles from "./SectionC.module.css";
import { getImageUrl } from "../../pages/utils";

const SectionC = () => {
  return (
    <div>
      <div className={styles.SectionC_Padding}>
        <div className={styles.SectionC}>
          <div className={styles.Image}>
            <img
              src={getImageUrl("sectionC.avif")}
              alt="Cisco Full-Stack_Imsage"
              style={{ width: "100%" }}
            />
          </div>
          <div className={styles.Content}>
            <div className={styles.ContentTitle}>
              <div className={styles.ContainerContent}>
                <h2>Digitize your industrial operations </h2>
                <p>
                  Run more flexible, secure, and efficient operations with
                  market-leading industrial networking, purpose-built for
                  operational technology.
                </p>
                <button>See industrial lot</button>
                <div className={styles.Icon}>
                  <a href="#">Explore offers </a>
                  <img src={getImageUrl("breadcrum_arrow.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionC;
