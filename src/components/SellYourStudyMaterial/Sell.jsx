import { Outlet } from "react-router"
import styles from "../../Css/sellPage/SellPage.module.css"
import SellNavbar from "./SellNavbar"
import SellForm from "./SellBookForm"

const Sell = () => {
  return (
    <div className={styles['sellPage']}>
      <SellNavbar/>
       <Outlet/>
    </div>
  )
}

export default Sell
