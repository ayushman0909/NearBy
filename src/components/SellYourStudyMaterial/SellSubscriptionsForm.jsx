import { useState } from "react";
import styles from "../../Css/SellPage/SellPage.module.css";

const SellSubscriptionForm = () => {
  const [formData, setFormData] = useState({
    subscriptionType: "",
    category: "",
    priceRange: "",
    duration: "",
    platform: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.sellForm}>
      <form>
         {/* <!-- SECTION 1 — BASIC Subscriptions INFORMATION --> */}
        <div>
          <label htmlFor="SubscriptionTitle">Subscriptions Title</label>
          <input
            type="text"
            name="SubscriptionTitle"
            id="SubscriptionTitle"
            placeholder="Enter Subscriptions Title"
          />
        </div>
        {/* <!-- SECTION 3 — DESCRIPTION --> */}
        <div>
          <label htmlFor="description"> Description</label>
          <textarea name="description" id="description" placeholder="Enter Description"></textarea>
        </div>
        {/* Subscription Type */}
        <div>
          <label>Subscription Type</label>
          <select
            name="subscriptionType"
            value={formData.subscriptionType}
            onChange={handleChange}
            className={styles.sellSelect}
          >
            <option value="">Select Subscription Type</option>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Half-Yearly</option>
            <option>Yearly</option>
            <option>One-Time Access</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.sellSelect}
          >
            <option value="">Select Category</option>
            <option>Educational</option>
            <option>Fitness & Health</option>
            <option>Entertainment</option>
            <option>Productivity Tools</option>
            <option>News & Magazines</option>
            <option>Tech & Software</option>
          </select>
        </div>

        {/* Price  */}
        
          <div className={styles.formGroup}>
                    <label>Price (₹)</label>
                    <input
                      type="number"
                      placeholder="Enter Price"
                    />
                  </div>
        

        {/* Duration */}
        <div>
          <label>Duration Left</label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className={styles.sellSelect}
          >
            <option value="">Select Duration</option>
            <option>Less than 1 Month</option>
            <option>1 – 3 Months</option>
            <option>3 – 6 Months</option>
            <option>6 – 12 Months</option>
            <option>More than 1 Year</option>
          </select>
        </div>

        {/* Platform */}
        <div>
          <label>Platform</label>
          <select
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className={styles.sellSelect}
          >
            <option value="">Select Platform</option>
            <option>Web Only</option>
            <option>Web + Mobile App</option>
            <option>Mobile App</option>
            <option>Cross-Platform</option>
          </select>
        </div>

        {/* Submit */}
        <div className={styles.Confirmbtn}>
        <button type="submit" >
          Confirm
        </button>
        </div>
      </form>
    </div>
  );
};

export default SellSubscriptionForm;
