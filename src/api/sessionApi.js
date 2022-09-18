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
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.post("/login", data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
