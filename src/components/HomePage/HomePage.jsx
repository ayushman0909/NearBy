import styles from "../../Css/Homepage/homepage.module.css"
import btnstyle from "../../Css/Homepage/herosection.module.css"
import Footer from "../partials/Footer"
import ExploreStudyMaterials from "./ExploreStudyMaterials"
import Herosection from "./Herosection"
import HowItWorks from "./HowItWorks"
import RecentlyAdded from "./RecentlyAdded"
import Testimonial from "./Testimonial"
import WhyNearByNoteBook from "./WhyNearByNoteBook"

import Herosection1 from "../../assets/herosection1.png"
import Herosection2 from "../../assets/herosection2.png"
import Herosection3 from "../../assets/herosection3.png"
import Herosection4 from "../../assets/herosection4.png"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const HomePage = () => {

  const HeroSectionDetails={
    heading:"Buy, Rent, Sell, or Donate ❤️ Study Materials Near You — Save Money, Help Others!",
    subheading:"A student-to-student marketplace where you can find second-hand books, handwritten notes, and discounted subscriptions",
    images:[Herosection1,Herosection2,Herosection3,Herosection4],
    buttons:[
        {
        buttonDetail:"Sell or Donate Books",
        buttonClassname:"sell-button",
        button_icon:<RiMoneyDollarCircleFill className={btnstyle['sell-icon']}/>,
        navigate:"/sell-your-study-material"
      },
      {
        buttonDetail:"Find Books & Notes",
        buttonClassname:"find-button",
        button_icon:< FaMagnifyingGlass className={btnstyle['find-icon']}/>,
        navigate:"/books"
      }]
  }
  
  return (
    <div className={styles['main-container']}>
     <Herosection HeroSectionDetails={HeroSectionDetails}/>
     <ExploreStudyMaterials/>
     <RecentlyAdded Heading="Recently Added" Link={"/explore-more"}/>
     <HowItWorks/>
     <WhyNearByNoteBook/>
     <Testimonial/>
    {/* <Footer/> */}
    </div>
  )
}

export default HomePage
