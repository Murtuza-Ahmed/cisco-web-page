import React from "react";
import styles from "./Content.module.css";
import Data from "../../Data/Content.json";

const Content = () => {
  return (
    <div>
      <div className={styles.Content}>
        {Data.map((item, i) => (
            console.log("Item",item, "Key",i),
          <div key={i} className={styles.ContentData}>
            <div className={styles.ImageData}>
              <img src={item.imageSrc} />
            </div>
            <div className={styles.IconName}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
