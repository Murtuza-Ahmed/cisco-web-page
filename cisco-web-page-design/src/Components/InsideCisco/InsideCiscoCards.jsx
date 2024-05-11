import React from "react";
import styles from "./InsideCiscoCards.module.css";
import { getImageUrl } from "../../pages/utils";

const InsideCiscoCards = ({
  items: { description, title, imageSrc, source, heading },
}) => {
  return (
    <div>
      <div className={styles.InsideCiscoCards}></div>
    </div>
  );
};

export default InsideCiscoCards;
