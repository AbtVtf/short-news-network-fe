import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST } from "../config/axiosConfig";

export const register = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.post("/register", data);
      return response.status;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const getPersonalInfo = createAsyncThunk(
//   "account/personal-information",
//   async (emailAddress, { rejectWithValue }) => {
//     try {
//       const response = await REST.get(
//         `account/personal-information?emailAddress=${emailAddress}`
//       );
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
