import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chosenCategory: "All",
};

const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    changeChosenCategory: (state, action) => {
      state.chosenCategory = action.payload;
    },
  },
});

export const { changeChosenCategory } = categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;
