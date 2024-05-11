import React from "react";
import styles from "./InsideCisco.module.css";
import { getImageUrl } from "../../pages/utils";
import Inside_Cisco from "../../data/InsideCisco.json";
import InsideCiscoCards from "./InsideCiscoCards";

const InsideCisco = () => {
  return (
    <div>
      <div className={styles.InsideCisco}>
        <div className={styles.Content}>
          <h1>Inside Cisco</h1>
          <div className={styles.IconContainer}>
            <div className={styles.Icon}>
              <a href="#">More news</a>
              <img src={getImageUrl("breadcrum_arrow.png")} />
            </div>
            <div className={styles.Icon}>
              <a href="#">More events</a>
              <img src={getImageUrl("breadcrum_arrow.png")} />
            </div>
          </div>
        </div>
        {Inside_Cisco.map((item, i) => (
          <InsideCiscoCards key={i} items={item} />
        ))}
      </div>
    </div>
  );
};

export default InsideCisco;
