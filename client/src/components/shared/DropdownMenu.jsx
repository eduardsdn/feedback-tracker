import React from "react";
import selectInputStyle from "../../styles/dropdownMenu.module.scss";
import { useSelector } from "react-redux";
import checkIcon from "../../assets/shared/icon-check.svg";

const DropdownOption = function ({
  option,
  selectOption,
  sortBy,
  selectedOption,
  isLastChild,
}) {
  // console.log(selectedOption);
  let isActive = false;
  if (selectedOption === option) {
    isActive = true;
  } else {
  }

  // console.log(option + "rerender");
  let selectFunctionAttribute = option;
  if (sortBy) {
    selectFunctionAttribute = sortBy;
  }

  return (
    <div
      className={`${selectInputStyle.option} ${
        isLastChild ? selectInputStyle.underlined : ""
      } `}
      onClick={() => selectOption(selectFunctionAttribute)}
    >
      <div>{option}</div>
      {isActive === true ? <img src={checkIcon} alt="" /> : ""}
    </div>
  );
};

const DropdownMenu = function ({
  mountedOn,
  options,
  selectOption,
  selectedOption,
}) {
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
              <DropdownOption
                option={option}
                selectOption={selectOption}
                selectedOption={selectedOption}
                sortBy={sortBy}
                isLastChild={false}
              />
            ); // For example, doubling the value of the last element
          } else {
            return (
              <DropdownOption
                option={option}
                selectOption={selectOption}
                selectedOption={selectedOption}
                sortBy={sortBy}
                isLastChild={true}
              />
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
              <DropdownOption
                option={option}
                selectOption={selectOption}
                selectedOption={selectedOption}
                isLastChild={false}
              />
            ); // For example, doubling the value of the last element
          } else {
            return (
              <DropdownOption
                option={option}
                selectOption={selectOption}
                selectedOption={selectedOption}
                isLastChild={true}
              />
            );
          }
        })}
      </div>
    );
  }
};

export default DropdownMenu;
