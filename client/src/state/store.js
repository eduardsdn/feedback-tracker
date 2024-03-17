import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedbackSlice";
import categoryFilterReducer from "./categoryFilterSlice";

export default configureStore({
  reducer: { feedback: feedbackReducer, categoryFilter: categoryFilterReducer },
});
