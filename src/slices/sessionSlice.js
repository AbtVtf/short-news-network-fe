import { createSlice } from "@reduxjs/toolkit";
import { handleAll, handleCategory, handleLogin } from "../api/sessionApi";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isLoading: false,
    category: "country",
    selectedNews: [],
    token: "10",

    loggedState: {
      loggedIn: false,
      token: null,
      email: "",
    },
  },

  reducers: {
    handleChangeCategory: (state, action) => {
      state.category = action.payload;
    },
    handleChangeUsername: (state, action) => {
      state.loggedState.email = action.payload;
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

    // ============= HANDLE LOGIN ============= //

    [handleLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [handleLogin.fulfilled]: (state, action) => {
      state.loggedState.accessToken = action.payload.data["accessToken"];
      state.loggedState.loggedIn = true;
    },
    [handleLogin.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },
  },
});

export const isLoading = (state) => state.session.isLoading;
export const token = (state) => state.session.loggedState.token;
export const loggedIn = (state) => state.session.loggedState.loggedIn;
export const category = (state) => state.session.category;
export const selectedNews = (state) => state.session.selectedNews;
export const { handleChangeCategory, handleChangeUsername } =
  sessionSlice.actions;

export default sessionSlice.reducer;
