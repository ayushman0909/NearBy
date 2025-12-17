
import { NavLink } from "react-router"
import styles from "../../Css/sellPage/SellPage.module.css"
const SellNavbar = () => {
  return (
    <section className={styles["sellNavbar"]}>
      <ul>
        <li><NavLink to={"sell-books"}  className={({ isActive }) => isActive ? styles.active : ""}>Books</NavLink></li>
        <li><NavLink to={"sell-notes"}  className={({ isActive }) => isActive ? styles.active : ""}>Notes</NavLink></li>
        <li><NavLink to={"sell-subscriptions"}  className={({ isActive }) => isActive ? styles.active : ""}>Subscriptions</NavLink></li>
        <li><NavLink to={"sell-study-kits"}  className={({ isActive }) => isActive ? styles.active : ""}>Study Kits</NavLink></li>
      </ul>
    </section>
  )
}

export default SellNavbar
