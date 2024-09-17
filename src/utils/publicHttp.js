import axios from "axios";

// Create an instance of Axios
const publicHttp = axios.create();

// Set default configuration
publicHttp.defaults.baseURL = process.env.REACT_APP_API_DOMAIN;
publicHttp.defaults.headers.common["Accept"] = "application/json";
publicHttp.defaults.headers.common["Content-Type"] = "application/json";

// Add a request interceptor
publicHttp.interceptors.request.use(
  function (config) {
    // Check if there's an access token in local storage
    const token = JSON.parse(localStorage.getItem("accessToken"));

    if (token) {
      // Attach the token to the request headers if it exists
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor
publicHttp.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message === "Network Error") {
      return Promise.reject(error);
    }

    switch (error.response && error.response.status) {
      case 401:
        // Clear the token and redirect to login on unauthorized access
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);

export default publicHttp;
