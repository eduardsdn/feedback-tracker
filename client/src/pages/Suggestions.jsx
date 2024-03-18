import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedback } from "../state/feedbackSlice";
// import Title from "../components/Title";
// import Categories from "../components/Categories";
import suggestionsStyle from "../styles/suggestions/suggestions.module.scss";
import SuggestionsLeftPanel from "../components/SuggestionsLeftPanel";
import SuggestionsTopPanel from "../components/SuggestionsTopPanel";
import SuggestionCards from "../components/SuggestionCards";
import NoSuggestions from "../components/NoSuggestions";

const Suggestions = function () {
  const feedbacks = useSelector((state) => state.feedback.feedback);
  console.log(useSelector((state) => state));
  const categoryFilter = useSelector(
    (state) => state.categoryFilter.chosenCategory
  );
  const sortBy = useSelector((state) => state.sortSuggestions.sortBy);

  const dispatch = useDispatch();

  console.log(categoryFilter);

  //MAKE API ENDPOINTS !
  React.useEffect(() => {
    // if (categoryFilter === "All") {
    //   // dispatch(fetchFeedback("/api/feedbacks/all"));
    //   dispatch(fetchFeedback(`/api/feedbacks/all/${sortBy}`));
    // } else
    dispatch(
      fetchFeedback(`/api/feedbacks/${categoryFilter.toLowerCase()}/${sortBy}`)
    );
  }, [categoryFilter, sortBy]);

  // else if (categoryFilter === "Feature") {
  //   dispatch(fetchFeedback("/api/feedbacks/feature"));
  // }

  const numOfSuggestions = feedbacks.length;

  return (
    <div className={suggestionsStyle.suggestions}>
      <SuggestionsLeftPanel />
      <main>
        <SuggestionsTopPanel numOfSuggestions={numOfSuggestions} />
        {numOfSuggestions > 0 ? (
          <SuggestionCards feedbacks={feedbacks} />
        ) : (
          <NoSuggestions />
        )}
      </main>
    </div>
  );
};

export default Suggestions;
