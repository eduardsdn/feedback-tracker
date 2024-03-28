import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "most_upvotes",
};

const sortSuggestionsSlice = createSlice({
  name: "sortSuggestions",
  initialState,
  reducers: {
    changeSortingOption: (state, action) => {
      console.log(action.payload);
      state.sortBy = action.payload;
      console.log(state.sortBy);
    },
  },
});

export const { changeSortingOption } = sortSuggestionsSlice.actions;
export default sortSuggestionsSlice.reducer;
