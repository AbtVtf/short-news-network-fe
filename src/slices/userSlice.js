// import { createSlice } from "@reduxjs/toolkit";
// import {
//   createCompany,
//   createUser,
//   verifyAccount,
//   changePassword,
//   editAccountInfo,
//   getBrainerProjects,
//   getPartnerBlockedProjects,
//   getPartnersNda,
// } from "api/userApi";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     isLoading: false,
//     errorMessage: "",
//     registerFlow: {
//       step: 1,
//       userInfo: {
//         registrationType: "",
//       },
//     },
//     partnerNdsList: [],
//     paymentPayload: {},
//   },
//   reducers: {
//     handleRegistrationType: (state, action) => {
//       state.registerFlow.userInfo.registrationType = action.payload;
//     },
//     handleRegistrationStep: (state, action) => {
//       state.registerFlow.step = action.payload;
//     },
//     savePaymentPayload: (state, action) => {
//       state.paymentPayload = {};
//     },
//     removePaymentPayload: (state) => {
//       state.paymentPayload = {};
//     },
//   },
//   extraReducers: {
//     [createUser.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [createUser.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.registerFlow.step = 2;
//     },
//     [createUser.rejected]: (state, action) => {
//       state.errorMessage = action.error.message;
//     },
//     [createCompany.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [createCompany.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.registerFlow.step = 3;
//     },
//     [createCompany.rejected]: (state, action) => {
//       state.errorMessage = action.error.message;
//     },
//     [verifyAccount.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [verifyAccount.fulfilled]: (state, action) => {
//       state.registerFlow.step = 1;
//       state.isLoading = false;
//     },
//     [verifyAccount.rejected]: (state, action) => {
//       state.errorMessage = action.error.message;
//     },
//     [changePassword.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [changePassword.fulfilled]: (state, action) => {
//       state.isLoading = false;
//     },
//     [changePassword.rejected]: (state, action) => {
//       state.errorMessage = action.error.message;
//     },
//     [editAccountInfo.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [editAccountInfo.fulfilled]: (state, action) => {
//       state.isLoading = false;
//     },
//     [editAccountInfo.rejected]: (state, action) => {
//       state.errorMessage = action.error.message;
//     },
//     // ======= GET BRAINER PROJECTS REQUEST HANDLERS ======= //
//     [getBrainerProjects.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [getBrainerProjects.fulfilled]: (state, action) => {
//       state.isLoading = false;
//     },
//     [getBrainerProjects.rejected]: (state, action) => {
//       state.errorMessage = action.error.message;
//     },
//     // ======= GET PARTNER BLOCKED PROJECTS REQUEST HANDLERS ======= //
//     [getPartnerBlockedProjects.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [getPartnerBlockedProjects.fulfilled]: (state, action) => {
//       state.isLoading = false;
//     },
//     [getPartnerBlockedProjects.rejected]: (state, action) => {
//       state.errorMessage = action.error.message;
//     },
//     // ======= GET PARTNER NDS ======= //
//     [getPartnersNda.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [getPartnersNda.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.partnerNdsList = action.payload;
//     },
//     [getPartnersNda.rejected]: (state, action) => {
//       state.errorMessage = action.error.message;
//     },
//   },
// });

// export const registerFlow = (state) => state.user.registerFlow;
// export const partnerNdsList = (state) => state.user.partnerNdsList;
// export const paymentPayload = (state) => state.session.paymentPayload;

// export const {
//   handleRegistrationStep,
//   savePaymentPayload,
//   removePaymentPayload,
// } = userSlice.actions;

// export default userSlice.reducer;
