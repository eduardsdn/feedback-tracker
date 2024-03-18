import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedbackSlice";
import categoryFilterReducer from "./categoryFilterSlice";
import sortSuggestionsReducer from "./sortSuggestionsSlice";

export default configureStore({
  reducer: {
    feedback: feedbackReducer,
    categoryFilter: categoryFilterReducer,
    sortSuggestions: sortSuggestionsReducer,
  },
});
