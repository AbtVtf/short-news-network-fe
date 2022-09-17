import { createSlice } from "@reduxjs/toolkit";
import { register } from "../api/userApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    message: "",
    response: 0,
  },
  reducers: {
    handleRegistrationType: (state, action) => {
      //   state.registerFlow.userInfo.registrationType = action.payload;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = action.status;
    },
    [register.rejected]: (state, action) => {
      state.message = action.error.message;
    },
  },
});

export const message = (state) => state.user.message;

export const { handleRegistrationType } = userSlice.actions;

export default userSlice.reducer;
