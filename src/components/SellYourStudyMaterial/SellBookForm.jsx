import styles from "../../Css/sellPage/SellPage.module.css";
import stateCityData from "../../Data/city.json";
import { useState } from "react";
const SellBookForm = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubcategory] = useState("");
  const HandleSelect = (e) => {
    setCategory(e.target.value);
  };
  const HandleSubSelect = (e) => {
    setSubcategory(e.target.value);
  };
  const [state, setState] = useState("");
 
  const HandleState = (e) => {
    console.log(state);
    setState(e.target.value);
  };
  return (
    <div className={styles.sellForm}>
      <form action="">
        {/* <!-- SECTION 1 — BASIC BOOK INFORMATION --> */}
        <div>
          <label htmlFor="bookTitle">Book Title</label>
          <input
            type="text"
            name="bookTitle"
            id="bookTitle"
            placeholder="Enter Book Title"
          />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Enter Author Name"
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={HandleSelect} defaultValue={""}>
            <option value="" disabled >
              Select Category
            </option>

            <option value="academic">Academic & Study Material</option>
            <option value="selfImprovement">Self-Improvement</option>
            <option value="religious">Religious & Spiritual</option>
            <option value="fiction">Fiction & Literature</option>
            <option value="languageLearning">Language Learning</option>
          </select>
        </div>

        <div>
          <label htmlFor="subCategory">Sub Category</label>

          <select
            name="subCategory"
            id="subCategory"
            onChange={HandleSubSelect}
            defaultValue={""}
          >
            {category === "academic" ? (
              <>
                <option value="" hidden >
                  Select Sub Category
                </option>
                {/* Academic & Study Material */}
                <option value="schoolBooks">School Books</option>
                <option value="collegeBooks">College Books</option>
                <option value="competitiveExam">
                  Competitive Exam Material
                </option>
                <option value="notesGuides">Notes & Guides</option>
              </>
            ) : category === "selfImprovement" ? (
              <>
                {/* Self Improvement */}
                <option value="motivational">Motivational Books</option>
                <option value="habitBuilding">Habit Building</option>
                <option value="productivity">Productivity</option>
                <option value="mentalHealth">Mental Health</option>
              </>
            ) : category === "religious" ? (
              <>
                {/* Religious & Spiritual */}
                <option value="hindu">Hindu</option>
                <option value="islamic">Islamic</option>
                <option value="christian">Christian</option>
                <option value="buddhist">Buddhist</option>
                <option value="meditation">Meditation Books</option>
              </>
            ) : category === "fiction" ? (
              <>
                {/* Fiction */}
                <option value="indianFiction">Indian Fiction</option>
                <option value="internationalFiction">
                  International Fiction
                </option>
                <option value="romance">Romance</option>
                <option value="thriller">Thriller</option>
                <option value="shortStories">Short Stories</option>
              </>
            ) : category === "languageLearning" ? (
              <>
                {/* Language Learning */}
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="regionalLang">Regional Languages</option>
                <option value="foreignLang">Foreign Languages</option>
              </>
            ) : (
              <option value="" >
                Please Select Category
              </option>
            )}
          </select>
        </div>
        {subCategory === "schoolBooks" ? (
          <div>
            <label htmlFor="selectclass">Class</label>
            <select name="selectclass" id="selectclass">
              <option value="12th">Class 12</option>
              <option value="11th">Class 11</option>
              <option value="10th">Class 10</option>
              <option value="9th">Class 9</option>
              <option value="8th">Class 8</option>
              <option value="7th">Class 7</option>
              <option value="6th">Class 6</option>
              <option value="5th">Class 5</option>
              <option value="4th">Class 4</option>
              <option value="3rd">Class 3</option>
              <option value="2nd">Class 2</option>
              <option value="1st">Class 1</option>
              <option value="play">Play</option>
            </select>
          </div>
        ) : (
          <></>
        )}

        {/* <!-- SECTION 2 — BOOK CONDITION --> */}
        <div>
          <label htmlFor="condition">Book Condition</label>
          <select name="condition" id="condition">
            <option value="" disabled defaultValue="on">
              Select Book Condition
            </option>

            <option value="brand-new">Brand New</option>
            <option value="like-new">Like New</option>
            <option value="good">Good</option>
            <option value="acceptable">Acceptable</option>
          </select>
        </div>

        <div>
          <label htmlFor="edition">Edition Type/Publication Year</label>
          <select name="edition" id="edition">
            <option value="" disabled defaultValue="on">
              Select Publication Year
            </option>

            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>

            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>

            <option value="2010">2010</option>
            <option value="2005">2005</option>
            <option value="2000">2000</option>
            <option value="1995">1995</option>
            <option value="1990">1990</option>
            <option value="1980">1980</option>
            <option value="1970">1970</option>
            <option value="1960">1960</option>
            <option value="1950">1950</option>
          </select>
        </div>

        {/* <!-- SECTION 3 — DESCRIPTION --> */}
        <div>
          <label htmlFor="description">Book Description</label>
          <textarea name="description" id="description" placeholder="Enter Book Description"></textarea>
        </div>

        {/* <!-- SECTION 4 — PRICING --> */}
        <div>
          <label htmlFor="originalPrice">Original Price (₹)</label>
          <input type="number" name="originalPrice" id="originalPrice" placeholder="Enter Original Price(₹)" />
        </div>
        <div>
          <label htmlFor="sellingPrice">Selling Price (₹)</label>
          <input type="number" name="sellingPrice" id="sellingPrice" placeholder="Enter Selling Price(₹)" />
        </div>
        <div>
          <label htmlFor="rentPrice">Rent Price/Month (₹)</label>
          <input
            type="number"
            name="rentPrice"
            id="rentPrice"
            placeholder="₹/m"
          />
        </div>

        <div className={styles.negotiate}>
          
          <label htmlFor="negotiable">Negotiable</label>
          <input type="checkbox" name="negotiable" id="negotiable" />
        </div>

        {/* <!-- SECTION 5 — IMAGES --> */}
        <div>
          <label htmlFor="images">Upload Images (upload max 5 image)</label>
          <input type="file" name="images" id="images" multiple max={5} />
        </div>

        {/* <!-- SECTION 6 — LOCATION --> */}
        <div>
          <label htmlFor="state">State</label>
          <select name="state" id="state" onChange={HandleState} defaultValue={"select state"}>
            <option value="select state">Select State</option>
            {Object.keys(stateCityData).map((state, index) => (
              <option value={state} key={index}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city">City</label>
          <select name="city" id="city" defaultValue={""}>
            <option value="" hidden>
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

       

        {/* <!-- SECTION 7 — SELLER INFORMATION --> */}
        <div>
          <label htmlFor="sellerName">Your Name</label>
          <input type="text" name="sellerName" id="sellerName"  placeholder="Enter Your Name"/>
        </div>

        <div>
          <label htmlFor="whatsapp">WhatsApp Number</label>
          <input type="tel" name="whatsapp" id="whatsapp" maxLength={10} minLength={10} placeholder="Enter Your Whatsapp Number"/>
        </div>
        <div className={styles.Confirmbtn}>
          <button>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default SellBookForm;
