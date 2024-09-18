import axios from "axios";

const Http = axios.create();

Http.defaults.baseURL = process.env.REACT_APP_API_DOMAIN;
Http.defaults.headers.common["Accept"] = "application/json";
Http.defaults.headers.common["Content-Type"] = "application/json";
Http.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
  localStorage.getItem("accessToken")
)}`;

Http.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("accessToken"));

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message === "Network Error") {
      return Promise.reject(error);
    }

    switch (error.response && error.response.status) {
      case 401:
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);

export default Http;
