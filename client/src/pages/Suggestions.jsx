import React from "react";
// import Title from "../components/Title";
// import Categories from "../components/Categories";
import suggestionsStyle from "../styles/suggestions/suggestions.module.scss";
import SuggestionsLeftPanel from "../components/SuggestionsLeftPanel";
import SuggestionsTopPanel from "../components/SuggestionsTopPanel";
import SuggestionCards from "../components/SuggestionCards";

const Suggestions = function () {
  return (
    <div className={suggestionsStyle.suggestions}>
      <SuggestionsLeftPanel />
      <main>
        <SuggestionsTopPanel />
        <SuggestionCards />
      </main>
    </div>
  );
};

export default Suggestions;
