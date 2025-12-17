import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import { MdSubscriptions, MdOutlineTravelExplore } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import styles from "../../../Css/partials/Navbar.module.css";

const Navbar2 = ({ sidebar, setSidebar }) => {
  return (
    <>
      <div
        className={`${styles["nav-part-2"]} ${sidebar ? styles.mobile : styles.pc}`}
      >
        <ul>
          <li className={styles["smallScreenLogin"]}>
            <NavLink to={"/login"}  className={({ isActive }) => isActive ? styles.active : ""}>
               Login/Register
            </NavLink>
          </li>
          <li>
            <NavLink to={"/home"}  className={({ isActive }) => isActive ? styles.active : ""}>
              <FaHome className={`${styles["nav-home"]} ${styles.icon}`} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/books"}  className={({ isActive }) => isActive ? styles.active : ""}>
              <IoBookSharp className={`${styles["nav-books"]} ${styles.icon}`} />
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to={"/notes"}  className={({ isActive }) => isActive ? styles.active : ""}>
              <FaFilePen className={`${styles["nav-notes"]} ${styles.icon}`} />
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink to={"/subscriptions"}  className={({ isActive }) => isActive ? styles.active : ""}>
              <MdSubscriptions
                className={`${styles["nav-subscriptions"]} ${styles.icon}`}
              />
              Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink to={"/study-kits"}  className={({ isActive }) => isActive ? styles.active : ""}>
              <IoLibrary className={`${styles["nav-studykits"]} ${styles.icon}`} />
              Study Kits
            </NavLink>
          </li>
          <li>
            <NavLink to={"/donate"}  className={({ isActive }) => isActive ? styles.active : ""}>
              <BiSolidDonateHeart
                className={`${styles["nav-donate"]} ${styles.icon}`}
              />
              Donate
            </NavLink>
          </li>
          <li>
            <NavLink to={"/explore-more"}  className={({ isActive }) => isActive ? styles.active : ""}>
              <MdOutlineTravelExplore
                className={`${styles["nav-exploremore"]} ${styles.icon}`}
              />
              Explore More
            </NavLink>
          </li>
          <li>
            <NavLink to={"/sell-your-study-material"}  className={({ isActive }) => isActive ? styles.active : ""}>
              <FaDonate className={`${styles["nav-sell"]} ${styles.icon}`} />
              Sell Your Study Material
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar2;
