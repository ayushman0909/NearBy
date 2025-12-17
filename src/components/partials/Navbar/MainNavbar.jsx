import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import styles from "../../../Css/partials/Navbar.module.css"
import { useState } from 'react'

const MainNavbar = () => {
   const [sidebar,setSidebar]=useState(false);
   console.log(sidebar);
   
  return (
   <nav className={styles['navbar']}>
   <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
   <Navbar2 sidebar={sidebar} setSidebar={setSidebar}/>
   </nav>
  )
}

export default MainNavbar
