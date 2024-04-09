import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedback } from "../state/feedbackSlice";
import suggestionsStyle from "../styles/suggestions/suggestions.module.scss";
import SuggestionsLeftPanel from "../components/suggestions/SuggestionsLeftPanel";
import SuggestionsTopPanel from "../components/suggestions/SuggestionsTopPanel";
import SuggestionCards from "../components/suggestions/SuggestionCards";
import NoSuggestions from "../components/suggestions/NoSuggestions";

const Suggestions = function () {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedback.feedback); //grab feedbacks from the store
  const categoryFilter = useSelector(
    //grab current category filter from the store
    (state) => state.categoryFilter.chosenCategory
  );
  const sortBy = useSelector((state) => state.sortSuggestions.sortBy); //grab current sorting option from the store

  React.useEffect(() => {
    // console.log(sortBy);
    //on state change of category filter or sorting option dispatch fetchFeedback action to feedbackReducer providing api endpoint with params
    dispatch(
      fetchFeedback(
        `http://localhost:5006/api/feedbacks/${categoryFilter}/${sortBy}`
      )
    );
  }, [categoryFilter, sortBy]);

  const numOfSuggestions = feedbacks.length; // get number of suggestions to display in SuggestionsTopPanel

  return (
    <div className={suggestionsStyle.suggestions}>
      <SuggestionsLeftPanel />
      <main>
        <SuggestionsTopPanel numOfSuggestions={numOfSuggestions} />
        {numOfSuggestions > 0 ? ( //if there are feedback suggestions render suggestion cards
          <SuggestionCards feedbacks={feedbacks} /> //pass feedbacks to cards components
        ) : (
          <NoSuggestions /> //if no feedback suggestions render this
        )}
      </main>
    </div>
  );
};

export default Suggestions;
