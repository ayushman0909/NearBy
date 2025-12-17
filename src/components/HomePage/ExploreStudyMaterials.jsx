import styles from "../../Css/Homepage/ExploreStudyMaterials.module.css";

import ExploreStudyMeterialCard from "./ExploreStudyMeterialCard";
import { IoBookSharp } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import { MdSubscriptions } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { useNavigate } from "react-router";

const ExploreStudyMaterials = () => {
  const navigate = useNavigate();

  const cardsDetails = [
    {
      Title: "Books",
      Logo: IoBookSharp,
      Description:
        "School, college & competitive exam books—second-hand, affordable, verified.",
      Color: "#10B981",
    },
    {
      Title: "Notes",
      Logo: FaFilePen,
      Description:
        "Handwritten notes & toppers’ summaries to boost your preparation",
      Color: " #6366F1 ",
    },
    {
      Title: "Study Kits",
      Logo: IoLibrary,
      Description:
        "Lab kits, science models, calculators & study tools at low cost.",
      Color: "#8B5CF6",
    },
    {
      Title: "Subscriptions",
      Logo: MdSubscriptions,
      Description:
        "Share remaining validity of learning apps & digital study plans with students who are in need.",
      Color: "red",
    },
  ];

  return (
    <section className={styles.ExploreStudyMaterials}>
      <h1>Explore Study Materials</h1>
      <h3>Find exactly what you need — quickly and easily</h3>

      <div className={styles["ExploreStudyMaterials-cardmain-container"]}>
        <div className={styles["ExploreStudyMaterials-CardContainer"]}>
          {cardsDetails.map((card, index) => (
            <ExploreStudyMeterialCard key={index} CardDetail={card} />
          ))}
        </div>

        <button onClick={() => navigate("/explore-more")}>
          <h2>See All Categories</h2>
        </button>
      </div>
    </section>
  );
};

export default ExploreStudyMaterials;
