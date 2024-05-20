import { useState } from "react";
import styles from "./header.module.css"; //header.module.css
import Login_icon from "../../assets/image/loginicon.png"; // LoginIcon
import World_icon from "../../assets/image/worldicon.png";
import Serach_icon from "../../assets/image/searchicon.png";
import Logo from "../../assets/image/logo.png";
import commonStyle from "../../assets/Style/common.module.css";
import { FaBars } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header id={styles.header}>
        <div
          className={`${commonStyle.container_laptop} ${commonStyle.container_mobile} ${commonStyle.container_small_mobile}`}
        >
          <div className={styles.header_padding}>
            <div className={styles.main}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <div className={styles.logo_image}>
                    <img src={Logo} alt="Logo_CiscoCompany" />
                  </div>
                </div>
                <div className={`${styles.column} ${styles.column_responsive}`}>
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
                      <li className={styles.responsive_image}>
                        <img
                          src={Serach_icon}
                          alt="Search-Icon"
                          style={{ width: "20px" }}
                        />
                      </li>
                      <div>
                        {menu ? (
                          <ImCross onClick={() => setMenu(!menu)} />
                        ) : (
                          <FaBars onClick={() => setMenu(!menu)} />
                        )}
                      </div>
                      <li
                        className={`${styles.icon} ${styles.responsive_icon}`}
                      >
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
      <Navbar isMenuOpen={menu} />
    </>
  );
};

export default Header;
