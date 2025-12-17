import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Filters = ({ filter }) => {
  const { filterheading, filterSubheadings } = filter;
  const [openIndices, setOpenIndices] = useState([]);
  const HandleToggle = (index) => {
    if(openIndices.includes(index)){
      setOpenIndices([...openIndices.filter((i)=>i !==index)])
    }
    else{
    setOpenIndices([...openIndices,index])
    }
   
  };
  return (
    <>
      <div>
        <div className="filter-heading">
          <h3 className="filterheading">{filterheading}</h3>
        </div>
        <div className="filter-subheadings">
          {filterSubheadings.map((filterSubheading, index) => (
            <div key={index} className="filter-subheading">
              <h4>
                {filterSubheading.subheading}
                <span onClick={() => HandleToggle(index)}>
                  <IoIosArrowDown />
                </span>
              </h4>
              <div
                className={`filter-select-items ${
                   openIndices.includes(index) ? "show-list" : "hide-list"
                } `}
              >
                {filterSubheading.options.map((option, index) => {
                  return (
                    <div key={index} className="select-item">
                      <input type="checkbox" id={index} />
                      <label htmlFor={index}>{option}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
