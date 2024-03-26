import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSortingOption } from "../../state/sortSuggestionsSlice";
import dropdownStyle from "../../styles/suggestions/sortDropdown.module.scss";
import checkIcon from "../../assets/shared/icon-check.svg";

const SortDropwdown = function () {
  const dispatch = useDispatch();

  const handleChooseSortBy = function (sortBy) {
    //dispatch changeSortingOption action to sortSuggestions reducer passing sortBy option
    dispatch(changeSortingOption(sortBy));
  };

  return (
    <div className={dropdownStyle.menu}>
      <ul className={dropdownStyle.options}>
        <li
          className={dropdownStyle.option}
          onClick={() => handleChooseSortBy("most_upvotes")}
        >
          Most Upvotes
        </li>
        <li
          className={dropdownStyle.option}
          onClick={() => handleChooseSortBy("least_upvotes")}
        >
          Least Upvotes
        </li>
        <li
          className={dropdownStyle.option}
          onClick={() => handleChooseSortBy("most_comments")}
        >
          Most Comments
        </li>
        <li
          className={dropdownStyle.option}
          onClick={() => handleChooseSortBy("least_comments")}
        >
          Least Comments
        </li>
      </ul>
    </div>
  );
};

export default SortDropwdown;
