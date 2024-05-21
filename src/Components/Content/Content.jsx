import React from "react";
import styles from "./content.module.css";
import Data from "../../data/Content.json";
import { getImageUrl } from "../../pages/utils";
import commounStyle from "../../assets/Style/common.module.css";

const Content = () => {
  return (
    <>
      <section id={styles.cisco_content}>
        <div className={styles.main}>
          <div
            className={`${commounStyle.container_laptop} ${commounStyle.container_mobile} ${commounStyle.container_small_mobile} ${commounStyle.container_extra_small_mobile}`}
          >
            <div className={styles.content_padding}>
              <div className={styles.row}>
                <div className={styles.column}>
                  
                    {Data.map((item, i) => (
                      <div key={i} className={styles.recive_data}>
                        <img
                          src={getImageUrl(item.imageSrc)}
                          alt={item.title}
                        />
                        <p>{item.title}</p>
                      </div>
                    ))}
                </div>
                {/* <div className={styles.column}></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className={styles.Main}>
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
      </div> */}
    </>
  );
};

export default Content;
