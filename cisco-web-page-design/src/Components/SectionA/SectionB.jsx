import React from "react";
import styles from "./SectionB.module.css";
import { getImageUrl } from "../../pages/utils";
import SectionC from "./SectionC";

const SectionB = () => {
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.SectionB_Padding}>
          <div className={styles.SectionB}>
            <div className={styles.Image}>
              <img
                src={getImageUrl("sctionB.webp")}
                alt="Cisco Full-Stack_Imsage"
                style={{ width: "100%" }}
              />
            </div>
            <div className={styles.Content}>
              <div className={styles.ContentTitle}>
                <div className={styles.ContainerContent}>
                  <h2>Get the 2024 Cisco Cybersecurity Readiness Index</h2>
                  <p>
                    How ready are companies to tackle security risks in the
                    modern world? You can find out by checking out our latest
                    research on security readiness across five key pillars.
                  </p>
                  <button>Read the report</button>
                  <div className={styles.Icon}>
                    <a href="#">View trials and demos </a>
                    <img src={getImageUrl("breadcrum_arrow.png")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionC />
        </div>
      </div>
    </div>
  );
};

export default SectionB;
