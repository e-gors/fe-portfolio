// import ReeValidate from "ree-validate-18";
import PropTypes from "prop-types";
import { options, ToastNotification } from "./toastConfig";

// handle errors response
export const handleErrorResponse = (err) => {
  if (
    err &&
    err.response &&
    err.response.data &&
    err.response.data &&
    err.response.data.errors
  ) {
    const message = [];
    for (const key in err.response.data.errors) {
      message.push(err.response.data.errors[key][0]);
    }

    return message.join(" ");
  }

  return (
    (err && err.response && err.response.data && err.response.data.message) ||
    err.message
  );
};

// validate fields
// export const Validator = (fields) => {
//   const validator = new ReeValidate.Validator(fields);

//   const formatFieldName = (field) => {
//     // Replace camelCase with spaces
//     field = field.replace(/([a-z])([A-Z])/g, "$1 $2");
//     // Replace underscores with spaces and capitalize the first letter
//     return field
//       .replace(/_/g, " ")
//       .replace(/\b\w/g, (char) => char.toUpperCase());
//   };

//   const dictionary = {
//     en: {
//       messages: {
//         required: (field) => `${formatFieldName(field)} is required!`,
//         email: (field) =>
//           `${formatFieldName(field)} must be a valid email address!`,
//         number: (field) => `${formatFieldName(field)} must be a number!`,
//         regex: (field) => `${formatFieldName(field)} format is invalid!`,
//         min: (field) =>
//           `${formatFieldName(field)} must be at least 6 chars length!`,
//         max: (field) =>
//           `${formatFieldName(field)} must only be 20 chars length!`,
//         length: (field) => `${formatFieldName(field)} length must be 11`,
//       },
//     },
//   };

//   validator.localize(dictionary);

//   return validator;
// };

// validate state values
export const handleValidate = async (state, validator, set) => {
  try {
    validator.validateAll({ ...state }).then((success) => {
      if (success) {
        return true;
      } else {
        set((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
        return false;
      }
    });
  } catch (error) {
    ToastNotification("error", error, options);
    return false;
  }
};

// check if user is authenticated
export const isAuth = () => {
  return !!localStorage.getItem("accessToken");
};

// check if empty
export const isEmpty = (value) => {
  if (typeof value === "string") {
    return !value.trim();
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (value && typeof value === "object") {
    return Object.keys(value).length === 0;
  }
  return !value;
};

// check match
export const isMatchPassword = (firstParam, secondParam) => {
  return firstParam === secondParam;
};

//convert value to money format
export const toMoneyFormat = (value, precision = 2) => {
  return parseFloat(value)
    .toFixed(precision)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

//optimizing fetch
export const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};
