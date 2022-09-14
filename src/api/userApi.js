import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST } from "config/axiosConfig";

export const logIn = createAsyncThunk(
  "user/logIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.post("/authenticate", data);
      return response.data.jwt;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPersonalInfo = createAsyncThunk(
  "account/personal-information",
  async (emailAddress, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `account/personal-information?emailAddress=${emailAddress}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCompanyInfo = createAsyncThunk(
  "company/company-information",
  async (emailAddress, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `/company/company-information?emailAddress=${emailAddress}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCategories = createAsyncThunk(
  "admin/category",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.get("/admin/category/all");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getSubcategories = createAsyncThunk(
  "admin/subcategory",
  async (id, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `/admin/category/subcategory/all?categoryId=${id}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCategoryById = createAsyncThunk(
  "admin/category/get?categoryId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await REST.get(`/admin/category/get?categoryId=${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCompanyProject = createAsyncThunk(
  "company/company-project-information",
  async (email, { rejectWithValue }) => {
    try {
      const response = await REST.get(
        `/company/company-project-information?emailAddress=${email}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const postContactForm = createAsyncThunk(
  "notification/contact",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.post(`notification/contact`, data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const resetPasswordRequest = createAsyncThunk(
  "account/reset-password-request",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.post(
        `account/reset-password-request?emailAddress=${data}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "account/reset-password",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.put(`account/reset-password`, data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// =============== RESEND VALIDATION CODE =============== //
export const getNewValidationCode = createAsyncThunk(
  "/account/getNewValidationCode",
  async (data, { rejectWithValue }) => {
    try {
      const response = await REST.post(
        `/account/resend?emailAddress=${data.email}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
