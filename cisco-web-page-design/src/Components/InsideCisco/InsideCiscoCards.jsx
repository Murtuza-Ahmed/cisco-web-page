import React from "react";
import styles from "./InsideCiscoCards.module.css";
import { getImageUrl } from "../../pages/utils";

const InsideCiscoCards = ({
  items: { description, title, imageSrc, source, heading },
}) => {
  return (
    <div>
      <div className={styles.InsideCiscoCards}>
        <div className={styles.Conatiner}>
          <div className={styles.Cards}>
            <div className={styles.Heading}>
              <h4>{heading}</h4>
            </div>
            <div className={styles.Title}>
              <h5>{title}</h5>
            </div>
            <div className={styles.Content}>
              <p>{description}</p>
            </div>
            <div className={styles.Link}>
              <a href="#">{source}</a>
              <img src={getImageUrl(imageSrc)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideCiscoCards;
