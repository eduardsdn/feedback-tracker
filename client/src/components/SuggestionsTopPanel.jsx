import React from "react";
import suggestionsTopPanelStyle from "../styles/suggestions/suggestionsTopPanel.module.scss";
import buttonsStyle from "../styles/buttons.module.scss";
import lightBulbImg from "../assets/suggestions/desktop/bulb.svg";
import plusIcon from "../assets/shared/icon-plus.svg";

const suggestionsTopPanel = function () {
  let suggestions = 6; // temororary
  return (
    <div className={suggestionsTopPanelStyle.suggestionsTopPanel}>
      <div className={suggestionsTopPanelStyle.left}>
        <div className={suggestionsTopPanelStyle.alertCounter}>
          <img src={lightBulbImg} alt="" />
          <div className={suggestionsTopPanelStyle.amount}>
            {`${suggestions} Suggestions`}
          </div>
        </div>

        <div className={suggestionsTopPanelStyle.filter}>
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

export default suggestionsTopPanel;
