import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST } from "../config/axiosConfig";

export const handleAll = createAsyncThunk(
  "session/handleAll",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.get("/all-titles");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleCategory = createAsyncThunk(
  "session/handleCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.get(`/category?cat=${data}`);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleLogin = createAsyncThunk(
  "session/handleLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.post("/login", data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleComment = createAsyncThunk(
  "session/handleComment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.post("/add-comment", data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleRemoveComment = createAsyncThunk(
  "session/handleRemoveComment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.delete(`/remove-comment?id=${data}`);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleArticle = createAsyncThunk(
  "session/handleArticle",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.get(`/article?id=${data}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleGetComments = createAsyncThunk(
  "session/handleGetComments",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.get(`/get-comments?id=${data}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const handleUserLikes = createAsyncThunk(
  "session/handleUserLikes",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.get(`/user-likes`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
