import axios from "axios";
import { handleLogOutUser } from "slices/sessionSlice";
import store from "store/store";

const baseURL = process.env.REACT_APP_SERVER_URL
  ? process.env.REACT_APP_SERVER_URL
  : "https://bp-be.wtztechnologies.com/api/";
// "http://192.168.1.146:8090/api/";

// const baseURL = "http://192.168.1.146:8299/api/"

export const REST_WITH_UPLOAD = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "X-engage-initiator": "frontend",
    "Content-Type": `multipart/form-data`,
  },
});

export const REST_FOR_DOWNLOAD_REPORT = axios.create({
  baseURL: baseURL,
  timeout: 40000,
  responseType: "blob",
  headers: {
    Accept: "application/octet-stream",
  },
});

export const REST = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "X-engage-initiator": "frontend",
    "Content-Type": `application/json`,
  },
});

REST.interceptors.request.use(
  async (config) => {
    const token = store.getState().session.loggedState.token;
    // console.log('TOKEN',token)
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const checkStatus = (status) => {
  return {
    is200: status === 200,
    is202: status === 202,
    is401: status === 401,
    is403: status === 403,
    is405: status === 405,
    is404: status === 404,
    is500: status === 500,
    is501: status === 501,
  };
};

REST.interceptors.response.use(
  (response) => {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  },
  async (error) => {
    const requestStatus = checkStatus(error.response.status);

    const { dispatch } = store;
    // the user is not authorized
    if (requestStatus.is401) {
      // If token is not valid or expired clear lscache.
      // Also, here you can do refresh token API call
      if (window.location.pathname !== "/login") {
        dispatch(handleLogOutUser());
        setTimeout(() => {
          window.location = "/login";
        }, 500);
      }
    }
    return Promise.reject(error);
  }
);
