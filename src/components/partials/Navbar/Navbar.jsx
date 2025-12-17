
import styles from "../../../Css/partials/Navbar.module.css";
import Navlogo from "../../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ sidebar, setSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={styles["nav-part-1"]}>
      <div className={styles.navlogo}>
        <NavLink to="/">
          <img src={Navlogo} alt="Logo Image" title="Home" />
        </NavLink>
      </div>

      <div className={styles["searchbox-login"]}>
        <div className={styles.searchbox}>
          <div className={styles.searchbar}>
            <input
              type="text"
              placeholder="Search Books,Notes,Subscription,and More"
            />
            <FaMagnifyingGlass
              className={`${styles["nav-search"]} ${styles.icon}`}
              aria-label="Search"
              title="search"
            />
          </div>
        </div>

        <NavLink to="/cart">
          <IoCartOutline className={`${styles["nav-cart"]} ${styles.icon}`} title="cart" />
        </NavLink>

        <div className={styles.login}>
          <button
            className={styles["login-button"]}
            onClick={() => navigate("/login")}
          >
            <CgProfile className={`${styles["nav-profile"]} ${styles.icon}`} />
            <span>Login/Register</span>
          </button>

          <button
            onClick={() => setSidebar(!sidebar)}
            className={styles["nav-mobile-hamburg"]}
          >
            {sidebar ? (
              <RxCross2 className={`${styles["nav-cross"]} ${styles.icon}`} />
            ) : (
              <GiHamburgerMenu className={`${styles["nav-hamburg"]} ${styles.icon}`} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
