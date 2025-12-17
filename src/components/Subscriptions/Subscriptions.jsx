import ItemContainer from "../itemContainer/ItemContainer";

const Subscriptions = () => {
  const AllFilters = [
  {
    filterheading: "Subscription Type",
    filterSubheadings: [
      {
        subheading: "Type",
        options: [
          "Monthly",
          "Quarterly",
          "Half-Yearly",
          "Yearly",
          "One-Time Access",
        ],
      },
    ],
  },

  {
    filterheading: "Category",
    filterSubheadings: [
      {
        subheading: "Content Type",
        options: [
          "Educational",
          "Fitness & Health",
          "Entertainment",
          "Productivity Tools",
          "News & Magazines",
          "Tech & Software",
        ],
      },
    ],
  },

  {
    filterheading: "Price Range",
    filterSubheadings: [
      {
        subheading: "Amount",
        options: [
          "Under ₹199",
          "₹200 – ₹499",
          "₹500 – ₹999",
          "₹1000 – ₹1999",
          "Above ₹2000",
        ],
      },
    ],
  },

  {
    filterheading: "Duration",
    filterSubheadings: [
      {
        subheading: "Validity",
        options: [
          "Less than 1 Month",
          "1 – 3 Months",
          "3 – 6 Months",
          "6 – 12 Months",
          "More than 1 Year",
        ],
      },
    ],
  },

  {
    filterheading: "Platform",
    filterSubheadings: [
      {
        subheading: "Choose Platform",
        options: [
          "Web Only",
          "Web + Mobile App",
          "Mobile App",
          "Cross-Platform",
        ],
      },
    ],
  },
];

  
  return (
    <>
   <ItemContainer AllFilters={AllFilters} page={"subscriptions"}/>
   </>
  );
};


export default Subscriptions
