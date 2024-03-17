import React from "react";
import suggestionsTopPanelStyle from "../styles/suggestions/suggestionsTopPanel.module.scss";
import buttonsStyle from "../styles/buttons.module.scss";
import lightBulbImg from "../assets/suggestions/desktop/bulb.svg";
import plusIcon from "../assets/shared/icon-plus.svg";
import SortDropwdown from "./SortDropdown";

const SuggestionsTopPanel = function ({ numOfSuggestions }) {
  const [menuHidden, setMenuHidden] = React.useState(true);

  const handleClick = function () {
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

        {!menuHidden ? <SortDropwdown /> : null}
        <div
          className={suggestionsTopPanelStyle.filter}
          // onMouseEnter={() => setMenuHidden(false)}
          // onMouseLeave={() => setMenuHidden(true)}
          onClick={() => handleClick()}
        >
          <p className={suggestionsTopPanelStyle.text}>
            Sort by :{" "}
            <span className={suggestionsTopPanelStyle.chosenFilter}>
              Most Upvotes
            </span>
            <div className={suggestionsTopPanelStyle.filterArrowIcon}></div>
          </p>
        </div>
      </div>

      <button
        className={`${buttonsStyle.btn} ${buttonsStyle.purple} ${buttonsStyle.addFeedbackBtn}`}
      >
        <img src={plusIcon} alt="" />
        Add Feedback
      </button>
    </div>
  );
};

export default SuggestionsTopPanel;
