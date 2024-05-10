import React from "react";
import styles from "./SectionCards.module.css";
import { getImageUrl } from "../../pages/utils";

const SectionCards = ({
  items: { imageSrc, title, description, source, breadcrum },
}) => {
  return (
    <div>
      <div className={styles.SectionCards}>
        <div className={styles.Cards}>
          {<img src={getImageUrl(imageSrc)} style={{ width: "130%" }} />}
          <h3 className={styles.Title}>{title}</h3>
          <p className={styles.Description}>{description}</p>
          <div className={styles.Link}>
            <a href="#">{source}</a>
            <img src={getImageUrl(breadcrum)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
