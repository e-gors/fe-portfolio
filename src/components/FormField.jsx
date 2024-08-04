import { TextField } from "@mui/material";
import React from "react";

function FormField(props) {
  const { errors, name, customError, ...rest } = props;

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

  const fieldProps = {
    error,
    name,
    helperText,
    FormHelperTextProps: {
      style: { whiteSpace: "pre-line" },
    },
    ...rest,
    value: rest.value || "",
  };

  return <TextField variant="outlined" {...fieldProps} />;
}

export default FormField;
