import { createSlice } from "@reduxjs/toolkit";
import { handleCategory } from "../api/sessionApi";
// import { handleCategory } from "api/sessionApi";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isLoading: false,
    category: "country",
  },

  reducers: {
    handleChangeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: {
    // ============= handleCategory REQUEST HANDLERS ============= //
    [handleCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [handleCategory.fulfilled]: (state, action) => {
      // TODO: use only one method for decoding per project
      console.log("aici", action.payload);
    },
    [handleCategory.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },
  },
});

export const isLoading = (state) => state.session.isLoading;
export const category = (state) => state.session.category;

export const { handleChangeCategory } = sessionSlice.actions;

export default sessionSlice.reducer;
