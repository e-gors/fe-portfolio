import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { FormHelperText, FormLabel } from "@mui/material";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

export default function RatingComp({ precision, value, onChange, errors }) {
  // Initialize error and helperText
  let error = false;
  let helperText = "";

  // Check for errors related to the "rating" field
  if (errors && Array.isArray(errors.items)) {
    const ratingError = errors.items.find((err) => err.field === "rating");
    if (ratingError) {
      error = true;
      helperText = ratingError.msg; // Assuming `msg` is the error message
    }
  }
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <FormLabel htmlFor="rating" mb={1}>
        Rating
      </FormLabel>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Rating
          name="rating"
          value={value}
          precision={precision ?? 1}
          onChange={onChange}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[Number(value)]}</Box>
      </Box>
      <FormHelperText error={error} sx={{ mt: 1 }}>
        {helperText}
      </FormHelperText>
    </Box>
  );
}
