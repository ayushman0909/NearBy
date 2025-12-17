import Filters from "../filter/Filters";
import ItemContainer from "../itemContainer/ItemContainer";
const Books = () => {
   const AllFilters = [
  {
    filterheading: "Categories",
    filterSubheadings: [
      {
        subheading: "Academic & Study Material",
        options: [
          "School Books",
          "College Books",
          "Competitive Exam Material",
          "Notes & Guides"
        ]
      },
      {
        subheading: "Self-Improvement",
        options: [
          "Motivational Books",
          "Habit Building",
          "Productivity",
          "Mental Health"
        ]
      },
      {
        subheading: "Religious & Spiritual",
        options: [
          "Hindu",
          "Islamic",
          "Christian",
          "Buddhist",
          "Meditation Books"
        ]
      },
      {
        subheading: "Fiction & Literature",
        options: [
          "Indian Fiction",
          "International Fiction",
          "Romance",
          "Thriller",
          "Short Stories"
        ]
      },
      {
        subheading: "Language Learning",
        options: [
          "English",
          "Hindi",
          "Regional Languages",
          "Foreign Languages"
        ]
      }
    ]
  },

  {
    filterheading: "Condition",
    filterSubheadings: [
      {
        subheading: "Book Condition",
        options: ["Brand New", "Like New", "Good", "Acceptable"]
      },
      {
        subheading: "Edition Type",
        options: ["Latest Edition", "Old Edition", "Any"]
      }
    ]
  },

  {
    filterheading: "Price Range",
    filterSubheadings: [
      {
        subheading: "Fixed Ranges",
        options: ["Under ₹100", "₹100 – ₹300", "₹300 – ₹600", "Above ₹600"]
      }
      
    ]
  },

  {
    filterheading: "Location",
    filterSubheadings: [
     
      {
        subheading: "Distance Filter",
        options: ["Within 2 km", "Within 5 km", "Within 10 km", "10 km+"]
      }
    ]
  }
];

  
  return (
    <>
   <ItemContainer AllFilters={AllFilters} page={"books"}/>
   </>
  );
};

export default Books;
