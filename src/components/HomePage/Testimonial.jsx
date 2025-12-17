import React from "react";
import styles from "../../Css/Homepage/Testimonial.module.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  // Testimonial Data Array
  const testimonials = [
    {
      id: 1,
      name: "Aditi Gupta",
      course: "B.Tech CSE, 3rd Year",
      rating: 5,
      review:
        "I bought Data Structures and DBMS books at almost 60% lower price. The books were in excellent condition. Amazing platform for students!",
      photo: "aditi.jpg", // Placeholder for actual image
    },
    {
      id: 2,
      name: "Harsh Sharma",
      course: "NEET Aspirant",
      rating: 5,
      review:
        "NearbyNotebook helped me find all NEET modules at budget prices. Delivery was fast and seller rating system is very helpful.",
      photo: "harsh.jpg",
    },
    {
      id: 3,
      name: "Riya Patel",
      course: "MBA 1st Year",
      rating: 5,
      review:
        "Loved the platform. Ordered 3 books and all were original with no missing pages. Safe payment and verified sellers give confidence.",
      photo: "riya.jpg",
    },
    {
      id: 4,
      name: "Vikram Singh",
      course: "Class 12 CBSE",
      rating: 5,
      review:
        "I exchanged my old books and bought new ones. Saved almost ₹2000 in one go. Best choice for school students.",
      photo: "vikram.jpg",
    },
  ];

  return (
    <section className={styles.Testimonial}>
      <h1 className={styles["testimonial-main-heading"]}>Our Feedback</h1>
      <div className={styles["testimonial-main-container"]}>
        <TestimonialCard TestimonialDetails={testimonials} />
      </div>
    </section>
  );
};

export default Testimonial;
