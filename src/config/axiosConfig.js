import axios from "axios";
// import store from "../store/store";
// import { handleLogOutUser } from "slices/sessionSlice";

const baseURL = "https://short-news-network.herokuapp.com/";
// const baseURL = "http://192.168.0.193:8080/";

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

// let store;
let store;
export const injectStore = (_store) => {
  store = _store;
};

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
    const token = store?.getState().session.loggedState.accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

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
