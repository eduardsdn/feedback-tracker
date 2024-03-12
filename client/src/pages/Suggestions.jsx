import React from "react";
// import Title from "../components/Title";
// import Categories from "../components/Categories";
import suggestionsStyle from "../styles/suggestions.module.scss";
import SuggestionsLeftPanel from "../components/SuggestionsLeftPanel";

const Suggestions = function () {
  return (
    <div className={suggestionsStyle.suggestions}>
      <SuggestionsLeftPanel />
    </div>
  );
};

export default Suggestions;
