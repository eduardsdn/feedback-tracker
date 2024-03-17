import React from "react";
import noSuggestionsStyle from "../styles/suggestions/noSuggestions.module.scss";
import buttonsStyle from "../styles/buttons.module.scss";
import emptyImg from "../assets/suggestions/illustration-empty.svg";
import plusIcon from "../assets/shared/icon-plus.svg";

const NoSuggestions = function () {
  return (
    <section className={noSuggestionsStyle.noSuggestionsSection}>
      <img src={emptyImg} className={noSuggestionsStyle.emptyImg} alt="" />
      <h2 className={noSuggestionsStyle.heading}>There is no feedback yet.</h2>
      <p className={noSuggestionsStyle.text}>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <button
        className={`${buttonsStyle.btn} ${buttonsStyle.purple} ${buttonsStyle.addFeedbackBtn}`}
      >
        <img src={plusIcon} alt="" />
        Add Feedback
      </button>
    </section>
  );
};

export default NoSuggestions;
