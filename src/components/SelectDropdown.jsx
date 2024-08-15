import React from "react";
import { TextField } from "@mui/material";

function SelectDropdown(props) {
  const {
    name,
    errors,
    options = [],
    customError,
    noOptions = false,
    ...rest
  } = props;

  let error = false;
  let helperTextArray = [];

  if (customError) {
    error = true;
    helperTextArray.push(customError);
  }

  if (errors) {
    if (errors.has(name)) {
      error = true;
      helperTextArray.push(errors.first(name));
      // Assuming errors object has a method to get all errors for a field
      if (errors.getAll) {
        helperTextArray = helperTextArray.concat(errors.getAll(name));
      }
    }
  }

  const helperText = helperTextArray.join("\n");

  const newProps = {
    variant: "outlined",
    select: true,
    fullWidth: true,
    error,
    name,
    helperText,
    FormHelperTextProps: {
      style: { whiteSpace: "pre-line" },
    },
    ...rest,
    value: rest.value || "",
  };

  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      SelectProps={{ native: true }}
      {...newProps}
    >
      {!noOptions && <option value="">Select Option</option>}
      {options.map((option, i) => (
        <option key={i} value={option.value ? option.value : option}>
          {option.name ? option.name : option}
        </option>
      ))}
    </TextField>
  );
}

export default SelectDropdown;
