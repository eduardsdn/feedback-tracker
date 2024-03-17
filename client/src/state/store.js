import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedbackSlice";

export default configureStore({
  reducer: { feedback: feedbackReducer },
});
