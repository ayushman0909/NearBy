import { useState } from "react";
import styles from "../../Css/SellPage/SellPage.module.css";
import stateCityData from "../../Data/city.json";


const SellNotesForm = () => {

  const [categoryGroup, setCategoryGroup] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [condition, setCondition] = useState("");
  const [type, setType] = useState("");

  const [price, setPrice] = useState("");

  const categoryData = {
    "Class Notes": [
      "Class 6–8 Notes",
      "Class 9 Notes",
      "Class 10 Notes",
      "Class 11 Notes",
      "Class 12 Notes",
      "School Handwritten Notes"
    ],
    "College Notes": [
      "Engineering Notes",
      "Medical Notes",
      "B.Com / BBA Notes",
      "BA / MA Notes",
      "Diploma Notes"
    ],
    "Competitive Exams": [
      "UPSC Notes",
      "SSC Notes",
      "Railway Notes",
      "Banking Notes",
      "CAT Notes",
      "Defence Exams"
    ],
    Subjects: [
      "Maths",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "Commerce",
      "Humanities"
    ],
    Others: ["Project Notes", "Handwritten Assignments", "Custom Notes"]
  };

  const conditionData = ["New", "Like New", "Used", "Readable"];
  const typeData = ["Handwritten", "Printed", "Photocopy"];
  const [state,setState]=useState("");
   


 const HandleState = (e) => {
    console.log(state);
    setState(e.target.value);
  };
  return (
    <div className={styles.sellForm}>
      

      <form>
           {/* <!-- SECTION 1 — BASIC Notes INFORMATION --> */}
        <div>
          <label htmlFor="notesTitle">Notes Title</label>
          <input
            type="text"
            name="notesTitle"
            id="notesTitle"
            placeholder="Enter Notes Title"
          />
        </div>
        {/* <!--  DESCRIPTION --> */}
        <div>
          <label htmlFor="description"> Description</label>
          <textarea name="description" id="description" placeholder="Enter Description"></textarea>
        </div>
        {/* Category Group */}
        <div className={styles.formGroup}>
          <label>Category</label>
          <select
            value={categoryGroup}
            onChange={(e) => {
              setCategoryGroup(e.target.value);
              setSubCategory(""); // reset sub category
            }}
          >
            <option value="" disabled>Select Category Group</option>
            {Object.keys(categoryData).map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Sub Category */}
        <div className={styles.formGroup}>
          <label>Sub Category</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            disabled={!categoryGroup}
          >
            <option value="">Select Sub Category</option>
            {categoryGroup &&
              categoryData[categoryGroup].map((sub, i) => (
                <option key={i} value={sub}>{sub}</option>
              ))}
          </select>
        </div>

        {/* Condition */}
        <div className={styles.formGroup}>
          <label>Condition</label>
          <select value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option value="">Select Condition</option>
            {conditionData.map((con, i) => (
              <option key={i} value={con}>{con}</option>
            ))}
          </select>
        </div>
        {/* <! IMAGES --> */}
        <div>
          <label htmlFor="images">Upload Images (upload max 5 image)</label>
          <input type="file" name="images" id="images" multiple max={5} />
        </div>
        {/* Type */}
        <div className={styles.formGroup}>
          <label>Notes Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select Type</option>
            {typeData.map((tp, i) => (
              <option key={i} value={tp}>{tp}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className={styles.formGroup}>
          <label>Price (₹)</label>
          <input
            type="number"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* <!-- SECTION 6 — LOCATION --> */}
        <div>
          <label htmlFor="state">State</label>
          <select name="state" id="state" onChange={HandleState} defaultValue="select State">
            <option value="select State" >Select State</option>
            {Object.keys(stateCityData).map((state, index) => (
              <option value={state} key={index}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city">City</label>
          <select name="city" id="city">
            <option value="" disabled selected>
              Select City
            </option>

            {state &&
              stateCityData[state].map((cityName, index) => (
                <option key={index} value={cityName}>
                  {cityName}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label htmlFor="locality">Locality / Area</label>
          <input type="text" name="locality" id="locality" placeholder="Enter Near by Area" />
        </div>
    
        
       
        <div className={styles.Confirmbtn}>
        <button type="submit">Confirm</button></div>
      </form>
    </div>
  );
};

export default SellNotesForm;
