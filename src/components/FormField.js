import { TextField } from "@mui/material";
import React from "react";

function FormField(props) {
  const { errors, name, customError, ...rest } = props;

  let error = false;
  let helperText = "";

  if (customError) {
    error = true;
    helperText = customError;
  }

  if (errors) {
    error = (errors && errors.has(name)) || false;
    helperText = (errors && errors.first(name)) || "";
  }

  const fieldProps = {
    error,
    name,
    helperText,
    ...rest,
    value: rest.value || "",
  };

  return <TextField size="small" variant="outlined" {...fieldProps} />;
}

export default FormField;
