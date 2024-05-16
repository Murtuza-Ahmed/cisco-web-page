import React from "react";
import styles from "./Content.module.css";
import Data from "../../data/Content.json";
import { getImageUrl } from "../../pages/utils";

const Content = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Conatiner}>
          <div className={styles.ContentPadding}>
            <div className={styles.Content}>
              {Data.map((item, i) => (
                <div key={i} className={styles.ContentData}>
                  <div className={styles.ImageData}>
                    <img src={getImageUrl(item.imageSrc)} />
                  </div>
                  <div className={styles.IconName}>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
