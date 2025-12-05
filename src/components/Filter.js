import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  //   const [filter, setFilter] = useState("All");
  const filterValues = ["All", "Work", "Personal", "Study", "Other"];

  //   const handleFilterChange = (e) => {
  //     setFilter(e.target.value);
  //   }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <p>Filter</p>
      <select onChange={(e) => onFilter(e.target.value)} >
        {filterValues.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
