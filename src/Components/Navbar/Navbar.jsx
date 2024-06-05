import styles from "./navbar.module.css";
import commonStyle from "../../assets/Style/common.module.css";
import logo from "../../assets/image/cutting-logo.png";
import searchIcon from "../../assets/image/searchicon.png";

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
                <div className={styles.column_10}>
                  <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                  </div>
                  <div className={styles.column_responive}>
                    <ul>
                      <li>Login</li>
                      <li>
                        <img src={searchIcon} alt="Search_Icon" />
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column_50}>
                  <div className={styles.left_ul}>
                    <ul>
                      <li>Products & Services</li>
                      <li>Solution</li>
                      <li>Support</li>
                      <li>Learn</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column_30}>
                  <div className={styles.right_ul}>
                    <ul>
                      <li>Explore Cisco</li>
                      <li>
                        Search <img src={searchIcon} alt="Search_Icon" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
