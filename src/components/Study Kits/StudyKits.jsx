import ItemContainer from "../item-Container/ItemContainer";

const StudyKits = () => {
const AllFilters = [
  {
    filterheading: "Category",
    filterSubheadings: [
      {
        subheading: "Kit Type",
        options: [
          "School Study Kit",
          "Competitive Exam Kit",
          "College Starter Kit",
          "Engineering Kit",
          "Medical Entrance Kit",
          "Arts & Commerce Kit",
          "Language Learning Kit",
        ],
      },
    ],
  },

  
  {
    filterheading: "Condition",
    filterSubheadings: [
      {
        subheading: "Choose Condition",
        options: ["Brand New", "Like New", "Good", "Used"],
      },
    ],
  },

  {
    filterheading: "Price Range",
    filterSubheadings: [
      {
        subheading: "Amount",
        options: [
          "Under ₹299",
          "₹300 – ₹699",
          "₹700 – ₹1499",
          "₹1500 – ₹2499",
          "Above ₹2500",
        ],
      },
    ],
  },

  {
    filterheading: "Exam/Board",
    filterSubheadings: [
      {
        subheading: "Relevant For",
        options: [
          "CBSE",
          "ICSE",
          "State Board",
          "JEE",
          "NEET",
          "UPSC",
          "Banking Exams",
          "SSC",
        ],
      },
    ],
  },
];

  
  return (
    <>
   <ItemContainer AllFilters={AllFilters} page={"study-kits"}/>
   </>
  );
};

export default StudyKits
