import { useState } from "react";
import styles from "../../Css/Homepage/HowItWorks.module.css";
import CircularHowItWorksCard from "./CircularHowItWorksCard";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaCloudUploadAlt,
  FaSearch,
  FaComments,
  FaExchangeAlt,
} from "react-icons/fa";

const HowItWorks = () => {
  const stepsData = [
    {
      id: 1,
      title: "Upload",
      classname: "step-top",
      description: "List study materials",
      icon: <FaCloudUploadAlt />,
    },
    {
      id: 2,
      title: "Browse",
      classname: "step-right",
      description: "Find notes & books",
      icon: <FaSearch />,
    },
    {
      id: 3,
      title: "Contact",
      classname: "step-bottom",
      description: "Chat with seller",
      icon: <FaComments />,
    },
    {
      id: 4,
      title: "Buy/Sell",
      classname: "step-left",
      description: "Exchange materials",
      icon: <FaExchangeAlt />,
    },
  ];

  const [toggleCircularAnimation, setToggleCircularAnimation] = useState(true);

  return (
    <section className={styles.HowItWorks}>
      <h1 className={styles["HowItWorks-mainheading"]}>
        How NearByNoteBook Works
      </h1>

      <div className={styles.CircularHowItWorksContainer}>
        <div
          className={`${toggleCircularAnimation ? styles.activeanimation + " " : ""}${
            styles["CircularHowItWorks-line"]
          }`}
          onMouseEnter={() => setToggleCircularAnimation(false)}
          onMouseLeave={() => setToggleCircularAnimation(true)}
        >
          <CircularHowItWorksCard stepsData={stepsData} />

          <div className={`${styles.arrow} ${styles["arrow-top-right"]}`}>
            <FaArrowRightLong />
          </div>

          <div className={`${styles.arrow} ${styles["arrow-right-bottom"]}`}>
            <FaArrowRightLong />
          </div>

          <div className={`${styles.arrow} ${styles["arrow-bottom-left"]}`}>
            <FaArrowRightLong />
          </div>

          <div className={`${styles.arrow} ${styles["arrow-left-top"]}`}>
            <FaArrowRightLong />
          </div>
        </div>

        <div className={styles["HowItWorks-heading"]}>
          <h2>
            How <br />
            NearByNoteBook <br />
            Works
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
