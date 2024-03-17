import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  feedback: [],
  error: "",
};

export const fetchFeedback = createAsyncThunk(
  "feedback/fetchFeedback",
  async () => {
    return await axios.get("/api/feedbacks").then((response) => response.data);
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFeedback.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFeedback.fulfilled, (state, action) => {
      state.loading = false;
      state.feedback = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFeedback.rejected, (state, action) => {
      state.loading = false;
      state.feedback = [];
      state.error = action.error.message;
    });
  },
});

export default feedbackSlice.reducer;
