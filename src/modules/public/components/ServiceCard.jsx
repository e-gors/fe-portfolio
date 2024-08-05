import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { OutlinedButton } from "../../../components/CustomButtons";
import PropTypes from "prop-types";

function ServiceCard({ title = "Title", descriptions = [], icon }) {
  return (
    <Paper
      sx={{
        backgroundColor: "#f9fafb",
        borderRadius: 2,
        padding: 2,
        boxShadow: 4,
        "&:hover": {
          backgroundColor: "#f1e8ef",
        },
        position: "relative",
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
        <img
          src={icon}
          alt="SVG"
          width={35}
          height={35}
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <Box
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 3,
            minHeight: 80,
            height: "auto",
            maxHeight: 100,
          }}
        >
          {descriptions?.map((description, i) => (
            <Typography
              key={i}
              variant="body2"
              color="text.secondary"
              sx={{ my: 1 }}
              component="li"
            >
              {description}
            </Typography>
          ))}
        </Box>
      </Box>
      <OutlinedButton variant="outlined">Read More</OutlinedButton>
    </Paper>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array,
  icon: PropTypes.node,
};
export default ServiceCard;
