import styles from "./Introducing.module.css";
import { getImageUrl } from "../../utils/utils.js";
// import Video from "./Video.jsx";

const Introducing = () => {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Container}>
          <div className={styles.Introducing_Padding}>
            <div className={styles.Introducing}>
              <div className={styles.Content}>
                <h3>Introducing Cisco Hypershield</h3>
                <p>Unveiling a new era of AI-native security.</p>
                <div className={styles.Icon}>
                  <a href="#">Explore Cisco Hypershield</a>
                  <img src={getImageUrl("breadcrum_arrow.png")} />
                </div>
              </div>
            </div>
            {/* <Video /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introducing;
