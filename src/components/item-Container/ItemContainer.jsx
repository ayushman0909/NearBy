import React from "react";
import Filters from "../filter/Filters";
import "../../Css/itemContainer.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

import Card from "./Card";
import AllitemsContainer from "./AllitemsContainer";
import { Link } from "react-router";
// import RecentlyAddedCard from '../HomePage/RecentlyAddedCard'

const ItemContainer = ({ AllFilters,page }) => {

  const items=[1,2,3,4,5];
  return (
    <div className="page-main-container">
      <aside className="item-filter">
        <h2>Filters</h2>
        <section className="filter">
          {AllFilters.map((filter, index) => {
            return <Filters key={index} filter={filter} />;
          })}
        </section>
      </aside>
      <div className="item-content">
        <section className="search-items">
          <input type="text" placeholder="Search Here" />
          <FaMagnifyingGlass className="search-item-icon" />
        </section>
        <section className="sort-by">
          <h1>Sort by</h1>
        </section>
        <section className="item-recentlyAdded-container">
          <h2>Recently Added</h2>
          <div className="item-recentlyAdded">
            {
              items.map((item)=>(
                 
                <Card category={page} id={item} key={item}/>
                
              ))
            }
          </div>
        </section>
        <AllitemsContainer category={page} />
      </div>
    </div>
  );
};

export default ItemContainer;
