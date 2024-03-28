import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSortingOption } from "../../state/sortSuggestionsSlice";
import Button from "../buttons/Button";
import suggestionsTopPanelStyle from "../../styles/suggestions/suggestionsTopPanel.module.scss";
import lightBulbImg from "../../assets/suggestions/desktop/bulb.svg";
import DropdownMenu from "../shared/DropdownMenu";
import arrowDownIcon from "../../assets/shared/icon-arrow-down.svg";

const SuggestionsTopPanel = function ({ numOfSuggestions }) {
  const dispatch = useDispatch();

  const handleChooseSortBy = function (sortBy) {
    //dispatch changeSortingOption action to sortSuggestions reducer passing sortBy option
    dispatch(changeSortingOption(sortBy));
  };

  const [menuHidden, setMenuHidden] = React.useState(true); //state for handling if dropdown menu with sort oprions in shown
  const sortingOptions = [
    "Most upvotes",
    "Least upvotes",
    "Most comments",
    "Least comments",
  ];

  const handleMenuShown = function () {
    //toggle menuHidden
    if (menuHidden === false) {
      setMenuHidden(true);
    } else if (menuHidden === true) {
      setMenuHidden(false);
    }
  };

  return (
    <div className={suggestionsTopPanelStyle.suggestionsTopPanel}>
      <div className={suggestionsTopPanelStyle.left}>
        <div className={suggestionsTopPanelStyle.alertCounter}>
          <img src={lightBulbImg} alt="" />
          <div className={suggestionsTopPanelStyle.amount}>
            {`${numOfSuggestions} Suggestions`}
          </div>
        </div>
        {!menuHidden ? (
          <DropdownMenu
            options={sortingOptions}
            mountedOn={"topPanel"}
            selectOption={handleChooseSortBy}
          />
        ) : (
          ""
        )}{" "}
        {/* if menu hidden is false render sortDropDown menu component */}
        <div
          className={suggestionsTopPanelStyle.filter}
          onClick={() => handleMenuShown()}
        >
          <p className={suggestionsTopPanelStyle.text}>
            Sort by :{" "}
            <span className={suggestionsTopPanelStyle.chosenFilter}>
              Most Upvotes
            </span>
            {/* TODO: change chosen filter text based on state*/}
            <img
              src={arrowDownIcon}
              alt=""
              className={`${suggestionsTopPanelStyle.filterArrowIcon} ${
                !menuHidden ? suggestionsTopPanelStyle.rotate : ""
              }`}
            />
            {/* to animate give arrow icon rotate classname when menu is shown */}
          </p>
        </div>
      </div>

      {/* link to addFeedback page (form) */}
      <Link to="/addfeedback">
        <Button
          text={"Add Feedback"}
          color={"purple"}
          hasPlusIcon={true}
        ></Button>
      </Link>
    </div>
  );
};

export default SuggestionsTopPanel;
