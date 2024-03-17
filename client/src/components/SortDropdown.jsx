import React from "react";
import dropdownStyle from "../styles/suggestions/sortDropdown.module.scss";
import checkIcon from "../assets/shared/icon-check.svg";

const SortDropwdown = function () {
  return (
    <div className={dropdownStyle.menu}>
      <ul className={dropdownStyle.options}>
        <li className={dropdownStyle.option}>Most Upvotes</li>
        <li className={dropdownStyle.option}>Least Upvotes</li>
        <li className={dropdownStyle.option}>Most Comments</li>
        <li className={dropdownStyle.option}>Least Comments</li>
      </ul>
    </div>
  );
};

export default SortDropwdown;
