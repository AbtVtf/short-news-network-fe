import { createSlice } from "@reduxjs/toolkit";
import {
  handleAddLike,
  handleAll,
  handleArticle,
  handleCategory,
  handleComment,
  handleGetComments,
  handleGetLikedTitles,
  handleGetLikes,
  handleLogin,
  handleRemoveComment,
  handleRemoveLike,
} from "../api/sessionApi";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isLoading: false,
    isArticleLoading: false,
    category: "country",
    selectedNews: [],
    loggedState: {
      loggedIn: false,
      token: "",
      username: "",
      userId: 0,
      userLikes: [],
      userLikesTitles: [],
    },
    article: null,
    titleId: 0,
    comments: [],
  },

  reducers: {
    handleChangeCategory: (state, action) => {
      state.category = action.payload;
    },
    handleChangeArticle: (state, action) => {
      state.titleId = action.payload;
    },
    handleClearArticle: (state) => {
      state.article = null;
    },
    handleClearComments: (state) => {
      state.comments = [];
    },
    handleLogout: (state) => {
      state.loggedState.loggedIn = false;
      state.loggedState.token = "";
      state.loggedState.username = "";
      state.loggedState.userId = 0;
      console.log("did it boss");
    },
    handleChangeLikedTitles: (state, action) => {
      state.loggedState.userLikesTitles = action.payload;
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

    // ============= HANDLE SINGLE ARTICLE ============= //
    [handleArticle.pending]: (state) => {
      state.isArticleLoading = true;
    },
    [handleArticle.fulfilled]: (state, action) => {
      state.article = action.payload;
      state.isArticleLoading = false;
    },
    [handleArticle.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE GET LIKED TITLES ============= //

    [handleGetLikedTitles.pending]: (state) => {
      state.isLoading = true;
    },
    [handleGetLikedTitles.fulfilled]: (state, action) => {
      state.loggedState.userLikesTitles = action.payload;
    },
    [handleGetLikedTitles.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE COMMENTS ============= //
    [handleGetComments.pending]: (state) => {},
    [handleGetComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
    [handleGetComments.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE GET USER LIKES ============= //
    [handleGetLikes.pending]: (state) => {},
    [handleGetLikes.fulfilled]: (state, action) => {
      state.loggedState.userLikes = action.payload;
    },
    [handleGetLikes.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE INDIVIDUAL CATEGORIES ============= //
    [handleCategory.pending]: (state) => {},
    [handleCategory.fulfilled]: (state, action) => {
      state.selectedNews = action.payload["data"];
    },
    [handleCategory.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE ADD LIKE ============= //
    [handleAddLike.pending]: (state) => {
      state.isLoading = false;
    },
    [handleAddLike.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [handleAddLike.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE REMOVE LIKE ============= //
    [handleRemoveLike.pending]: (state) => {
      state.isLoading = false;
    },
    [handleRemoveLike.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [handleRemoveLike.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE ADD COMMENT ============= //
    [handleComment.pending]: (state) => {},
    [handleComment.fulfilled]: (state, action) => {},
    [handleComment.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE REMOVE COMMENT ============= //
    [handleRemoveComment.pending]: (state) => {},
    [handleRemoveComment.fulfilled]: (state, action) => {},
    [handleRemoveComment.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },

    // ============= HANDLE LOGIN ============= //

    [handleLogin.pending]: (state) => {},
    [handleLogin.fulfilled]: (state, action) => {
      state.loggedState.accessToken = action.payload.data["accessToken"];
      state.loggedState.loggedIn = true;
      state.loggedState.username = action.payload.data["username"];
      state.loggedState.userId = action.payload.data["id_user"];
    },
    [handleLogin.rejected]: (state, action) => {
      state.errorMessage = action.error.message;
    },
  },
});

export const isLoading = (state) => state.session.isLoading;
export const isArticleLoading = (state) => state.session.isArticleLoading;
export const article = (state) => state.session.article;
export const comments = (state) => state.session.comments;
export const titleId = (state) => state.session.titleId;
export const token = (state) => state.session.loggedState.token;
export const userId = (state) => state.session.loggedState.userId;
export const username = (state) => state.session.loggedState.username;
export const userLikesTitles = (state) =>
  state.session.loggedState.userLikesTitles;
export const loggedIn = (state) => state.session.loggedState.loggedIn;
export const userLikes = (state) => state.session.loggedState.userLikes;
export const category = (state) => state.session.category;
export const selectedNews = (state) => state.session.selectedNews;
export const {
  handleChangeCategory,
  handleChangeArticle,
  handleClearArticle,
  handleLogout,
  handleChangeLikedTitles,
  handleClearComments,
} = sessionSlice.actions;

export default sessionSlice.reducer;
