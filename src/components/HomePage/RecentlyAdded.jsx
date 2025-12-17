import styles from "../../Css/Homepage/RecentlyAdded.module.css";
import RecentlyAddedCard from "./RecentlyAddedCard";
import CardImg from "../../assets/logo.png"
import { NavLink } from "react-router";
const RecentlyAdded = ({Heading,Link}) => {
 const cards = [
  { id: 1, title: "Book 1", category: "books" },
  { id: 2, title: "Note 1", category: "notes" },
  { id: 3, title: "Subscription 1", category: "subscription" },
  { id: 4, title: "Book 2", category: "books" },
  { id: 5, title: "Note 2", category: "notes" },
  { id: 6, title: "Kit 1", category: "kits" }
];

  const images=CardImg;
  return (
    <section className={styles["RecentlyAdded"]} id="RecentlyAdded">
      <div className={styles.Heading}>
      <h1>{Heading}</h1>
      <NavLink to={Link}>See More</NavLink></div>
      <div className={styles["RecentlyAddedContainer"]}>
        <div className={styles["scroll-track"]}>
          {cards.map((card) => {
            return <RecentlyAddedCard key={"a" + card.id} CardImg={images} title={card.title} id={card.id} category={card.category}/>;
          })}
          {/* Duplicate for infinite loop */}
          {cards.map((card) => (
            <RecentlyAddedCard key={"b" + card.id} CardImg={images}  title={card.title} id={card.id} category={card.category}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
