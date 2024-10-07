import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import { OutlinedButton } from "../../../components/CustomButtons";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function ServiceCard({ service = "Title", descriptions = [], image }) {
  const theme = useSelector((state) => state.theme.theme);

  // State to track if descriptions are expanded or not
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Handle toggle between expand/collapse
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Paper
      sx={{
        borderRadius: 2,
        padding: 2,
        boxShadow: theme === "light" ? 4 : 0,
        position: "relative",
        backgroundColor:
            theme === "light" ? "var(--bg_white)" : "var(--bg_black)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-15%",
          left: "40%",
          backgroundColor: "white",
          border: "1px solid #10fddd",
          borderRadius: "50%",
          width: 60,
          height: 60,
          boxShadow: 5,
        }}
      >
        <Avatar
          src={image}
          alt={service}
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            height: "70%",
          }}
        />
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          {service}
        </Typography>
        <Box
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: isExpanded ? "none" : 3, // Show full or truncate text
            minHeight: 80,
            height: "auto",
            maxHeight: isExpanded ? "none" : 100, // Control height based on expand state
            transition: "0.3s all ease",
          }}
        >
          {descriptions?.map((description, i) => (
            <Typography
              key={i}
              variant="body2"
              color="text.secondary"
              component="li"
            >
              {description}
            </Typography>
          ))}
        </Box>
      </Box>
      <OutlinedButton theme={theme} variant="outlined" onClick={toggleExpand}>
        {isExpanded ? "Show Less" : "Read More"} {/* Toggle button text */}
      </OutlinedButton>
    </Paper>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.string,
  descriptions: PropTypes.array,
  icon: PropTypes.node,
};

export default ServiceCard;
