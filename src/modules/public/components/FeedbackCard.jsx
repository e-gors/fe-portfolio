import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PropTypes from "prop-types";
import { getProfile } from "../../../utils/heplers";

function FeedbackCard({
  description = "What they say?...",
  name = "Fullname",
  date = "August 03, 2024",
  image,
  gender,
  index,
  rating = 5,
}) {
  return (
    <Box
      sx={{
        boxShadow: 4,
        borderRadius: 1,
        position: "relative",
        padding: 3,
        backgroundColor: "white",
      }}
    >
      <FormatQuoteIcon
        sx={{
          position: "absolute",
          width: 50,
          height: 50,
          color: "#00dfc0",
          top: -25,
          left: 0,
        }}
      />
      <Box>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt={name} src={image ?? getProfile("", gender, index + 1)} />
          <Box sx={{ ml: 1 }}>
            <Typography variant="body2">{name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {date}
            </Typography>
          </Box>
        </Box>
        <Rating value={rating} precision={0.5} readOnly />
      </Box>
    </Box>
  );
}

FeedbackCard.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
};
export default FeedbackCard;
