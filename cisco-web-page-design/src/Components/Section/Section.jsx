import React from "react";
import styles from "./Section.module.css";
import CiscoData from "../../data/LetestProduct.json";
import SectionCards from "./SectionCards";

const Section = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Container}>
          <div className={styles.SectionPadding}>
            <div className={styles.Section}>
              <div className={styles.Title}>
                <h1>Latest products and innovations from the RSA Conference</h1>
              </div>
              <div className={styles.Products}>
                {CiscoData.map((item, i) => (
                  <SectionCards key={i} items={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
