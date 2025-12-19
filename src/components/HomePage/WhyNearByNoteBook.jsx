import React from "react";
import styles from "../../Css/Homepage/WhyNearByNoteBook.module.css";
import WhyNearByNoteBookCard from "./WhyNearByNoteBookCard";
import { IoLibrary } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaDonate } from "react-icons/fa";

const WhyNearByNoteBook = () => {
  const cardDetails = [
    {
      logo: <IoLibrary />,
      title: "Affordable Prices",
      description: "Buy or sell study items 50–70% cheaper",
    },
    {
      logo: <BiSolidDonateHeart />,
      title: "Verified Sellers",
      description: "Every seller is checked before listing",
    },
    {
      logo: <MdOutlineTravelExplore />,
      title: "Verified Listings",
      description: "Every listing is checked before listing",
    },
    {
      logo: <FaDonate />,
      title: "Local & Fast",
      description: "Find the nearest deals around your area",
    },
    {
      logo: <FaDonate />,
      title: "Safe Contact",
      description: "Chat securely without sharing your number",
    },
    {
      logo: <FaDonate />,
      title: "Secure Payment Protection",
      description: "Your money is safe until you get your material",
    },
  ];

  return (
    <section className={styles.WhyNearByNoteBook}>
      <h2 className={styles["WhyNearByNoteBook-heading"]}>
         Why NearByNoteBook? 
      </h2>
      <div className={styles["WhyNearByNoteBook-card-container"]}>
        <WhyNearByNoteBookCard cardDetails={cardDetails} />
      </div>
    </section>
  );
};

export default WhyNearByNoteBook;
