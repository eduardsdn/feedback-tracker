import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "most_upvotes",
};

const sortSuggestionsSlice = createSlice({
  name: "sortSuggestions",
  initialState,
  reducers: {
    changeSortingOption: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { changeSortingOption } = sortSuggestionsSlice.actions;
export default sortSuggestionsSlice.reducer;
