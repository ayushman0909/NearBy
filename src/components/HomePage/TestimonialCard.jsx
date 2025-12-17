import styles from "../../Css/Homepage/Testimonial.module.css";
import image from "../../assets/logo.png";
const TestimonialCard = ({ TestimonialDetails }) => {
  return (
    <>
      {TestimonialDetails.map((card) => {
        return (
          <div key={card.id} className={styles["TestimonialCard"]}>
            <div className={styles["testimonial-profile"]}>
              <img src={image} alt="image" />
              <div>
                <h2>{card.name}</h2>
                <h2>{card.rating}</h2>
                   
              </div>
            </div>
            <h4>{card.review}</h4>
          </div>
        );
      })}
    </>
  );
};

export default TestimonialCard;
