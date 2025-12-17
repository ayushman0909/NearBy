import styles from "../../Css/Homepage/ExploreStudyMaterials.module.css";

const ExploreStudyMeterialCard = ({ CardDetail }) => {
  const { Title, Logo, Description, Color } = CardDetail;

  return (
    <div className={styles["ExploreStudyMaterials-card"]}>
      <div
        className={styles["ExploreStudyMaterials-card-icon"]}
        style={{ color: Color }}
      >
        <Logo />
      </div>

      <h1 style={{ color: Color }}>{Title}</h1>
      <h4>{Description}</h4>
    </div>
  );
};

export default ExploreStudyMeterialCard;
