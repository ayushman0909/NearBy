import "../../Css/itemContainer.css"
import { Link } from "react-router"
import sampleimage from "../../assets/herosection1.png"
const Card = ({category,id}) => {
    
  return (
    <Link to={`/${category}/item/${id}`}>
    <div className='item-card'>
      <img src={sampleimage} alt="image" />
      <h3>name</h3>
      <h4>Categories</h4>
      <p>price</p>
    </div></Link>
  )
}

export default Card
