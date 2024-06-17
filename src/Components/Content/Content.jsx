import styles from "./content.module.css";
import Data from "../../data/Content.json";
import { getImageUrl } from "../../utils/utils.js";
import commounStyle from "../../assets/Style/common.module.css";

const Content = () => {
  const firstData = Data.slice(0, 3);
  const secondData = Data.slice(3, 6);
  // console.log("FIRST DATA", firstData);
  // console.log("SECOND DATA", secondData);
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
                  {firstData.map((item, index) => (
                    <ul key={index} className={styles.content_ul}>
                      <li>
                        <img
                          src={getImageUrl(item.imageSrc)}
                          alt={item.title}
                        />
                      </li>
                      <li>{item.title}</li>
                    </ul>
                  ))}
                </div>
                <div className={styles.column}>
                  {secondData.map((item, index) => (
                    <ul key={index} className={styles.content_ul}>
                      <li>
                        <img
                          src={getImageUrl(item.imageSrc)}
                          alt={item.title}
                        />
                      </li>
                      <li>{item.title}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
