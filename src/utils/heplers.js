import ReeValidate from "ree-validate-18";
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
export const Validator = (fields) => {
  const validator = new ReeValidate.Validator(fields);

  const formatFieldName = (field) => {
    // Replace camelCase with spaces
    field = field.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Replace underscores with spaces and capitalize the first letter
    return field
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const dictionary = {
    en: {
      messages: {
        required: (field) => `${formatFieldName(field)} is required!`,
        email: (field) =>
          `${formatFieldName(field)} must be a valid email address!`,
        number: (field) => `${formatFieldName(field)} must be a number!`,
        regex: (field) => `${formatFieldName(field)} format is invalid!`,
        min: (field) =>
          `${formatFieldName(field)} must be at least 6 chars length!`,
        max: (field) =>
          `${formatFieldName(field)} must only be 20 chars length!`,
        length: (field) => `${formatFieldName(field)} length must be 11`,
      },
    },
  };

  validator.localize(dictionary);

  return validator;
};

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

//get profile of the user to be display in the table
export const getProfile = (imageUrl, gender, index) => {
  let url;

  if (!isEmpty(imageUrl)) {
    url = imageUrl;
  } else {
    // Determine the maximum index based on gender
    const maxIndex = gender === "male" ? 7 : 8;

    // Calculate the actual index using modulus to loop within 0-8 range
    const avatarIndex = index % maxIndex;

    // Construct the URL based on gender and avatar index
    if (gender === "male") {
      url = `${process.env.PUBLIC_URL}/assets/images/avatars/m_avatar_${avatarIndex}.jpg`;
    } else if (gender === "female") {
      url = `${process.env.PUBLIC_URL}/assets/images/avatars/f_avatar_${avatarIndex}.jpg`;
    } else {
      url = `${process.env.PUBLIC_URL}/assets/images/avatars/m_avatar_5.jpg`;
    }
  }

  return url;
};

// link regex
export const linkRegex = () => {
  return /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/;
};

// test if link is valid
export const validateLink = (link) => {
  const regex = linkRegex();
  return regex.test(link);
};

// format numbers, if 10000 display as 10k, if 10000000 then display as 1M
export const formatNumberToStr = (number) => {
  if (number >= 1000000) {
    return `${Math.floor(number / 1000000)}M`;
  } else if (number >= 1000) {
    return `${Math.floor(number / 1000)}k`;
  } else {
    return number;
  }
};

// convert rating to only display rating precision 0f 0.5
export const customRound = (rating) => {
  const base = Math.floor(rating); // Get the base number
  const decimal = rating - base; // Get the decimal part

  // Determine the new decimal value based on the specified conditions
  let newDecimal;

  if (decimal >= 0.1 && decimal <= 0.4) {
    newDecimal = 0.5; // Set to 0.5
  } else if (decimal >= 0.6 && decimal <= 0.9) {
    newDecimal = 1; // Set to 1
  } else {
    newDecimal = decimal; // Keep the decimal as is if it doesn't meet the criteria
  }

  // Return the combined value
  return Math.min(base + newDecimal, 5);
};
