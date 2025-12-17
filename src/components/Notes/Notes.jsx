import ItemContainer from "../itemContainer/ItemContainer";

const Notes = () => {
  const AllFilters = [
  {
    filterheading: "Categories",
    filterSubheadings: [
      {
        subheading: "Class Notes",
        options: [
          "Class 6–8 Notes",
          "Class 9 Notes",
          "Class 10 Notes",
          "Class 11 Notes",
          "Class 12 Notes",
          "School Handwritten Notes"
        ]
      },
      {
        subheading: "College Notes",
        options: [
          "Engineering Notes",
          "Medical Notes",
          "B.Com / BBA Notes",
          "BA / MA Notes",
          "Diploma Notes"
        ]
      },
      {
        subheading: "Competitive Exams",
        options: [
          "UPSC Notes",
          "SSC Notes",
          "Railway Notes",
          "Banking Notes",
          "CAT Notes",
          "Defence Exams"
        ]
      },
      {
        subheading: "Subjects",
        options: [
          "Maths",
          "Physics",
          "Chemistry",
          "Biology",
          "Computer Science",
          "Commerce",
          "Humanities"
        ]
      },
      {
        subheading: "Others",
        options: ["Project Notes", "Handwritten Assignments", "Custom Notes"]
      }
    ]
  },

  {
    filterheading: "Condition",
    filterSubheadings: [
      {
        subheading: "Notes Condition",
        options: ["New", "Like New", "Used", "Readable"]
      },
      {
        subheading: "Type",
        options: ["Handwritten", "Printed", "Photocopy"]
      }
    ]
  },

  {
    filterheading: "Price Range",
    filterSubheadings: [
      {
        subheading: "Fixed Ranges",
        options: ["Under ₹50", "₹50 – ₹100", "₹100 – ₹200", "Above ₹200"]
      }
      
    ]
  },

  {
    filterheading: "Location",
    filterSubheadings: [
      {
        subheading: "Nearby Areas",
        options: ["Near Me", "Within 5 km", "Within 10 km", "Within 20 km"]
      },
      {
        subheading: "City",
        options: ["Indore", "Bhopal", "Ujjain", "Delhi", "Mumbai", "Other"]
      }
    ]
  }
];

  
  return (
    <>
   <ItemContainer AllFilters={AllFilters} page={"notes"} />
   </>
  );
};


export default Notes
