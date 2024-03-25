import React from "react";
import selectInputStyle from "../../styles/forms/selectInput.module.scss";

const SelectInputDropdown = function ({ categories, selectOption }) {
  return (
    <div className={selectInputStyle.selectInputDropdown}>
      {categories.map((category, categories, index) => {
        // <div
        //   className={selectInputStyle.option}
        //   onClick={() => selectOption(category)}
        // >
        //   {category}
        // </div>
        if (index === categories.length - 1) {
          // This is the last element, apply any operation you want
          return (
            <div
              className={selectInputStyle.option}
              onClick={() => selectOption(category)}
            >
              {category}
            </div>
          ); // For example, doubling the value of the last element
        } else {
          return (
            <div
              className={`${selectInputStyle.option} ${selectInputStyle.underlined}`}
              onClick={() => selectOption(category)}
            >
              {category}
            </div>
          );
        }
      })}
    </div>
  );
};

export default SelectInputDropdown;
