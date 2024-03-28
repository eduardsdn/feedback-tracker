import React from "react";
import selectInputStyle from "../../styles/dropdownMenu.module.scss";
import { useSelector } from "react-redux";
import checkIcon from "../../assets/shared/icon-check.svg";

const DropdownMenu = function ({ mountedOn, options, selectOption }) {
  const currentSortingOption = useSelector(
    (state) => state.sortSuggestions.sortBy
  );
  console.log(currentSortingOption);

  if (mountedOn === "topPanel") {
    return (
      <div
        className={`${selectInputStyle.selectInputDropdown} ${selectInputStyle.mountedOnTopPanel}`}
      >
        {options.map((option, options, index) => {
          let sortBy = "";
          switch (option) {
            case "Most upvotes":
              sortBy = "most_upvotes";
              break;
            case "Least upvotes":
              sortBy = "least_upvotes";
              break;
            case "Most comments":
              sortBy = "most_comments";
              break;
            case "Least comments":
              sortBy = "least_comments";
          }

          if (index === options.length - 1) {
            // This is the last element, apply any operation you want
            return (
              <div
                className={selectInputStyle.option}
                onClick={() => selectOption(sortBy)}
              >
                {option}
              </div>
            ); // For example, doubling the value of the last element
          } else {
            return (
              <div
                className={`${selectInputStyle.option} ${selectInputStyle.underlined}`}
                onClick={() => selectOption(sortBy)}
              >
                {option}
              </div>
            );
          }
        })}
      </div>
    );
  } else if (mountedOn === "form") {
    return (
      <div
        className={`${selectInputStyle.selectInputDropdown} ${selectInputStyle.mountedOnForm}`}
      >
        {options.map((option, options, index) => {
          if (index === options.length - 1) {
            // This is the last element, apply any operation you want
            return (
              <div
                className={selectInputStyle.option}
                onClick={() => selectOption(option)}
              >
                {option}
              </div>
            ); // For example, doubling the value of the last element
          } else {
            return (
              <div
                className={`${selectInputStyle.option} ${selectInputStyle.underlined}`}
                onClick={() => selectOption(option)}
              >
                {option}
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default DropdownMenu;
