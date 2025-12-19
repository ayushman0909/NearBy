import { Link } from "react-router";
import styles from "../../Css/Homepage/RecentlyAdded.module.css";

const RecentlyAddedCard = ({ title, CardImg,id,category }) => {
  return (
    <Link to={`/${category}/item/${id}`}>
      <div className={styles.RecentlyAddedCard}>
        <div className={styles["RecentlyAddedCard-img"]}>
          <img src={CardImg} alt="" />
        </div>

        <div className={styles["RecentlyAddedCard-details"]}>
          <h4>card{title}</h4>
          <p>price:</p>
          <p>Category:</p>
        </div>
      </div>
    </Link>
  );
};

export default RecentlyAddedCard;
