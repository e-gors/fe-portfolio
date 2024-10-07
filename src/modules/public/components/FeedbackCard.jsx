import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PropTypes from "prop-types";
import { getProfile } from "../../../utils/heplers";
import { useSelector } from "react-redux";

function FeedbackCard({
  message = "What they say?...",
  guestName = "Fullname",
  createdAt = "August 03, 2024",
  profileImage,
  gender,
  index,
  rating = 5,
}) {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <Box
      sx={{
        boxShadow: theme === "light" ? 4 : 0,
        borderRadius: 1,
        position: "relative",
        padding: 3,
        backgroundColor:
            theme === "light" ? "var(--bg_lightest)" : "var(--bg_darkest)",
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
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 6,
            lineClamp: 6, // For non-webkit browsers
          }}
        >
          {message}
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
          <Avatar
            alt={guestName}
            src={profileImage ?? getProfile("", gender, index + 1)}
          />
          <Box sx={{ ml: 1 }}>
            <Typography variant="body2">{guestName}</Typography>
            <Typography variant="caption" color="text.secondary">
              {createdAt}
            </Typography>
          </Box>
        </Box>
        <Rating value={rating} precision={0.5} readOnly />
      </Box>
    </Box>
  );
}

FeedbackCard.propTypes = {
  message: PropTypes.string,
  guestName: PropTypes.string,
  rating: PropTypes.number,
  createdAt: PropTypes.string,
};
export default FeedbackCard;
