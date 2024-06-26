import styles from "./InsideCisco.module.css";
import { getImageUrl } from "../../utils/utils.js";
// import Inside_Cisco from "../../data/InsideCisco.json";
// import InsideCiscoCards from "./InsideCiscoCards";

const InsideCisco = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Container}>
          <div className={styles.InsideCisco_Padding}>
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
            </div>
            {/* <div className={styles.InsideCiscoCardsContainer}>
              {Inside_Cisco.map((item, i) => (
                <InsideCiscoCards key={i} items={item} />
              ))}
            </div> */}
            <hr />
            <div className={styles.IconContainerResponsive}>
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
        </div>
      </div>
    </div>
  );
};

export default InsideCisco;
