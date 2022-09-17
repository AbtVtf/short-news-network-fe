import { createSlice } from "@reduxjs/toolkit";
import { handleAll, handleCategory } from "../api/sessionApi";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isLoading: false,
    category: "country",
    selectedNews: [],
  },

  reducers: {
    handleChangeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: {
    // ============= handleCategory REQUEST HANDLERS ============= //
    [handleAll.pending]: (state) => {
      state.isLoading = true;
    },
    [handleAll.fulfilled]: (state, action) => {
      state.selectedNews = action.payload["data"];
    },
    [handleAll.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE INDIVIDUAL CATEGORIES ============= //
    [handleCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [handleCategory.fulfilled]: (state, action) => {
      state.selectedNews = action.payload["data"];
    },
    [handleCategory.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },
  },
});

export const isLoading = (state) => state.session.isLoading;
export const category = (state) => state.session.category;
export const selectedNews = (state) => state.session.selectedNews;
export const { handleChangeCategory } = sessionSlice.actions;

export default sessionSlice.reducer;
