import React from "react";
import styles from "./SectionA.module.css";
import { getImageUrl } from "../../pages/utils";
import SectionB from "./SectionB";

const SectionA = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Container}>
          <div className={styles.SectionA_Padding}>
            <div className={styles.SectionA}>
              <div className={styles.Image}>
                <img
                  src={getImageUrl("sectionA.avif")}
                  alt="Cisco Full-Stack_Imsage"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={styles.Content}>
                <div className={styles.ContentTitle}>
                  <div className={styles.ContainerContent}>
                    <h2>Better insights. Better experiences.</h2>
                    <p>
                      Cisco Full-Stack Observability (Cisco FSO) brings together
                      data from across your tech stack and your business. Use it
                      to gain insights and deliver optimal application
                      experiences.
                    </p>
                    <button>Explore Cisco FSO</button>
                    <div className={styles.Icon}>
                      <a href="#">Read customer story </a>
                      <img src={getImageUrl("breadcrum_arrow.png")} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SectionB />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
