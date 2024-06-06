import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  feedback: [],
  error: "",
};

export const fetchFeedback = createAsyncThunk("feedback/fetchFeedback", async (apiEndpoint) => {
  const response = await axios.get(apiEndpoint); //make get request to api
  return response.data; //retrun fetched data
});

export const addFeedback = createAsyncThunk("feedback/addFeedback", async ({ apiEndpoint, data }) => {
  const response = await axios.post(apiEndpoint, data); //post request with data(feedback object) in the request body
  return response.data;
});

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  extraReducers: (builder) => {
    /////////////////////////////////////////////////////////////////
    builder.addCase(fetchFeedback.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFeedback.fulfilled, (state, action) => {
      state.loading = false;
      state.feedback = action.payload; //if request successful return state with fetched data
      state.error = "";
    });
    builder.addCase(fetchFeedback.rejected, (state, action) => {
      state.loading = false;
      state.feedback = []; //if request unsuccessful return empty state
      state.error = action.error.message;
    });
    /////////////////////////////////////////////////////////////////
    builder.addCase(addFeedback.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addFeedback.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addFeedback.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    /////////////////////////////////////////////////////////////////
  },
});

export default feedbackSlice.reducer;
