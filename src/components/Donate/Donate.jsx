import Herosection from "../HomePage/Herosection"
import styles from "../../Css/Homepage/homepage.module.css"
import btnstyle from "../../Css/Homepage/herosection.module.css"
import Herosection1 from "../../assets/donate1.png"
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import AllitemsContainer from "../item-Container/AllitemsContainer";


const Donate = () => {
  const HeroSectionDetails={
      heading:"Donate ❤️ Your Books. Change Someone’s Future",
      subheading:"Help students who can’t afford study materials. Your donation can change their academic journey",
      images:[Herosection1],
      buttons:[ {
        buttonDetail:"Donate Now",
        buttonClassname:"sell-button",
        button_icon:<RiMoneyDollarCircleFill className={btnstyle['sell-icon']}/>,
        navigate:"/sell-your-study-material"
      }]
    }
  return (
    <div className={styles['main-container']}>
    <Herosection HeroSectionDetails={HeroSectionDetails} />
    <AllitemsContainer category={"donate"}/>
    </div>
  );
};


export default Donate
