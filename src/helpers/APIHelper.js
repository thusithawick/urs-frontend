import axios from "axios";

const BACKEND_API_URL =
  process.env.REACT_APP_BACKEND_API_URL || "http://127.0.0.1:8000/api";
const axiosApi = axios.create({
  baseURL: BACKEND_API_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// Simple get function
export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}

// Simple post function
export async function post(url, postData, config) {
  return await axiosApi
    .post(url, postData, {
      ...config,
    })
    .then((response) => response.data);
}

// Post with multipart form data
export async function postWithImage(url, formValues, config) {

  return await axiosApi
    .post(url, formValues, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...config?.headers,
      },
      ...config,
    })
    .then((response) => response.data);
}

// Put with multipart form data
export async function putWithImage(url, formValues, config) {

  return await axiosApi
    .put(url, formValues, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...config?.headers,
      },
      ...config,
    })
    .then((response) => response.data);
}
