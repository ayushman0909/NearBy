
import styles from "../../Css/Homepage/WhyNearByNoteBook.module.css";

const WhyNearByNoteBookCard = ({cardDetails}) => {
  
  return (
   <>
   {cardDetails.map((card,index)=>{
    return(
       <div key={index} className={styles["WhyNearByNoteBookCard"]}>
            <h1 className={styles['WhyNearByNoteBookCard-icon']}>{card.logo}</h1>
            <h2>{card.title}</h2>
            <h3>{card.description}</h3>
        
       </div>
 
    )
   })}
   </>
  )
}

export default WhyNearByNoteBookCard
