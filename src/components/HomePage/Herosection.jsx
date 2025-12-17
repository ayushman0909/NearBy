import React from 'react'
import styles from "../../Css/Homepage/herosection.module.css"

import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'


const Herosection = ({HeroSectionDetails}) => {
 
  const {heading,subheading,images,buttons}=HeroSectionDetails;
  
   const [activeIndex, setActiveIndex] = useState(0);
   const navigate=useNavigate();
    useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);


  return (
   <section className={styles['HeroSection']}>
    
    <div className={styles["herosection-text"]}>
      <div className={styles["herosection-heading"]}>
       <h1>{heading}</h1>
       <h4>{subheading}</h4>
      </div>

      {buttons ? 
      <div className={styles["herosection-CTA"]}>
        { 
        buttons.map((button,index)=>(
           <button key={index} className={styles[button.buttonClassname]} onClick={()=>{navigate(button.navigate)}}>{button.button_icon}{button.buttonDetail}</button>
        ))
        }
         
      </div>:""
      }
    </div>
    <div className={styles["herosection-image"]}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className= {styles[index === activeIndex ? "show" : "fade"]}
        />
      ))}
    </div>
   </section>
  )
}

export default Herosection
