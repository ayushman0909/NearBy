import { Outlet } from "react-router"
import styles from "../../Css/SellPage/SellPage.module.css"
import SellNavbar from "./SellNavbar"


const Sell = () => {
  return (
    <div className={styles['sellPage']}>
      <SellNavbar/>
       <Outlet/>
    </div>
  )
}

export default Sell
