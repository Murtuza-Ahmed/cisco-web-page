import styles from "./header.module.css"; //header.module.css
import Login_icon from "../../assets/image/loginicon.png"; // LoginIcon
import World_icon from "../../assets/image/worldicon.png";
import commonStyle from "../../assets/Style/common.module.css";

const Header = () => {
  return (
    <>
      <header id={styles.header}>
        <div className={styles.main}>
          <div
            className={`${commonStyle.container_xl} ${commonStyle.container_xxl} ${commonStyle.container_lg} ${commonStyle.container_sm} ${commonStyle.container_xsm} ${commonStyle.container_md}`}
          >
            <div className={styles.header_padding}>
              <div className={styles.row}>
                <div className={`${styles.column}`}>
                  <div className={styles.menu}>
                    <ul>
                      <li>Contact</li>
                      <li>Partners</li>
                      <li className={styles.icon}>
                        <img
                          src={Login_icon}
                          alt="UserIcon"
                          style={{ width: "20px" }}
                        />{" "}
                        Log In
                      </li>
                      <div></div>
                      <li className={`${styles.icon}`}>
                        <img
                          src={World_icon}
                          alt="WorldIcon"
                          style={{ width: "15px" }}
                        />
                        EN US
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
