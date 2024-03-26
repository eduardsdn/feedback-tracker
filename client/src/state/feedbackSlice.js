import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  feedback: [],
  error: "",
};

export const fetchFeedback = createAsyncThunk(
  "feedback/fetchFeedback",
  async (apiEndpoint) => {
    const response = await axios.get(apiEndpoint);
    console.log(response.data.response);
    return response.data;
    // return await axios.get(apiEndpoint).then((response) => response.data);
  }
);

export const addFeedback = createAsyncThunk(
  "feedback/addFeedback",
  async ({ apiEndpoint, data }) => {
    console.log(apiEndpoint);
    console.log(data);
    const response = await axios.post(apiEndpoint, data);
    // console.log(response.data);
    return response.data;
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

    builder.addCase(addFeedback.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addFeedback.fulfilled, (state, action) => {
      state.loading = false;
      state.feedback.push(action.payload);
      state.error = "";
    });
    builder.addCase(addFeedback.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default feedbackSlice.reducer;
