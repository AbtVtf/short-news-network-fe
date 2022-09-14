import { createAsyncThunk } from "@reduxjs/toolkit";
// import { REST } from "config/axiosConfig";

export const handleCategory = createAsyncThunk(
  "user/handleCategory",
  async (data, { rejectWithValue }) => {
    console.log({ data });
    // try {
    //   const response = await REST.post("/authenticate");
    //   return response.data.jwt;
    // } catch (err) {
    //   return rejectWithValue(err.response.data);
    // }
  }
);
