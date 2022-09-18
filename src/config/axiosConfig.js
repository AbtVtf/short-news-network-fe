import axios from "axios";

let store;

export const injectStore = (_store) => {
  store = _store;
};
// import store from "../store/store";
// import { handleLogOutUser } from "slices/sessionSlice";

const baseURL = "https://short-news-network.herokuapp.com/";

// export const REST_WITH_UPLOAD = axios.create({
//   baseURL: baseURL,
//   timeout: 10000,
//   headers: {
//     "X-engage-initiator": "frontend",
//     "Content-Type": `multipart/form-data`,
//   },
// });

// export const REST_FOR_DOWNLOAD_REPORT = axios.create({
//   baseURL: baseURL,
//   timeout: 40000,
//   responseType: "blob",
//   headers: {
//     Accept: "application/octet-stream",
//   },
// });

export const REST = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "X-engage-initiator": "frontend",
    "Content-Type": `application/json`,
  },
});

// REST.interceptors.request.use(
//   async (config) => {
//     const token = store.getState().session.loggedState.token;
//     console.log("TOKEN", token);
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export const checkStatus = (status) => {
//   return {
//     is200: status === 200,
//     is202: status === 202,
//     is401: status === 401,
//     is403: status === 403,
//     is405: status === 405,
//     is404: status === 404,
//     is500: status === 500,
//     is501: status === 501,
//   };
// };

// REST.interceptors.response.use(
//   (response) => {
//     return new Promise((resolve, reject) => {
//       resolve(response);
//     });
//   },
//   async (error) => {
//     return Promise.reject(error);
//   }
// );
