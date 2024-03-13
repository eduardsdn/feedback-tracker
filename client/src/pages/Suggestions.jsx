import React from "react";
// import Title from "../components/Title";
// import Categories from "../components/Categories";
import suggestionsStyle from "../styles/suggestions/suggestions.module.scss";
import SuggestionsLeftPanel from "../components/SuggestionsLeftPanel";
import SuggestionsTopPanel from "../components/SuggestionsTopPanel";

const Suggestions = function () {
  return (
    <div className={suggestionsStyle.suggestions}>
      <SuggestionsLeftPanel />
      <main>
        <SuggestionsTopPanel />
      </main>
    </div>
  );
};

export default Suggestions;
