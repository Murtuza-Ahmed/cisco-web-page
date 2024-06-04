import styles from "./navbar.module.css";
import commonStyle from "../../assets/Style/common.module.css";

const Navbar = () => {
  return (
    <>
      <nav id={styles.navbar}>
        <div className={styles.main}>
          <div
            className={`${commonStyle.container_xl} ${commonStyle.container_xxl} ${commonStyle.container_lg} ${commonStyle.container_sm} ${commonStyle.container_xsm} ${commonStyle.container_md}`}
          >
            <div className={styles.nav_padding}>
              <div className={styles.row}>
                <div className={styles.column}></div>
                <div className={styles.column}></div>
                <div className={styles.column}></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
