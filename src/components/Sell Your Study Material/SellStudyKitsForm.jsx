import React from 'react'
import styles from "../../Css/sellPage/SellPage.module.css"

const SellStudyKitsForm = () => {
  return (
    <div className={styles.form}>
     <div className={styles.sellForm}>
  <form>
    {/* <!-- SECTION 1 — BASIC Study-kits INFORMATION --> */}
        <div>
          <label htmlFor="studykitsTitle">Study-kits Title</label>
          <input
            type="text"
            name="studykitsTitle"
            id="studykitsTitle"
            placeholder="Enter Study-kits Title"
          />
        </div>
        {/* <!-- SECTION 3 — DESCRIPTION --> */}
        <div>
          <label htmlFor="description"> Description</label>
          <textarea name="description" id="description" placeholder="Enter Description"></textarea>
        </div>
    {/* Category → Kit Type */}
    <div>
      <label>Kit Type</label>
      <select className={styles.sellSelect}>
        <option value="">Select Kit Type</option>
        <option>School Study Kit</option>
        <option>Competitive Exam Kit</option>
        <option>College Starter Kit</option>
        <option>Engineering Kit</option>
        <option>Medical Entrance Kit</option>
        <option>Arts & Commerce Kit</option>
        <option>Language Learning Kit</option>
      </select>
    </div>

   
    {/* Condition */}
    <div>
      <label>Condition</label>
      <select className={styles.sellSelect}>
        <option value="">Select Condition</option>
        <option>Brand New</option>
        <option>Like New</option>
        <option>Good</option>
        <option>Used</option>
      </select>
    </div>

    {/* Price  */}
    <div>
      <label>Price </label>
      <input type="text" placeholder='Enter Price' />
    </div>

    {/* Exam / Board */}
    <div>
      <label>Relevant For</label>
      <select className={styles.sellSelect}>
        <option value="">Select Exam/Board</option>
        <option>CBSE</option>
        <option>ICSE</option>
        <option>State Board</option>
        <option>JEE</option>
        <option>NEET</option>
        <option>UPSC</option>
        <option>Banking Exams</option>
        <option>SSC</option>
      </select>
    </div>

    {/* Submit Button */}
    <div className={styles.Confirmbtn}>
      <button type="submit" className={styles.sellBtn}>
      Confirm
    </button>
    </div>
    
  </form>
</div>

    </div>
  )
}

export default SellStudyKitsForm
