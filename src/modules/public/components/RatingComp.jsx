import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { FormHelperText, FormLabel } from "@mui/material";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function RatingComp({ value, onChange, errors }) {
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
          precision={0.5}
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
