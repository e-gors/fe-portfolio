import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { OutlinedButton } from "../../../components/CustomButtons";
import Dribble from "../../../assets/svg/dribble.svg";

function ServiceCard(props) {
  const { title = "Title", description = "Descriptions...", icon } = props;
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
          top: "-25%",
          left: "45%",
          backgroundColor: "white",
          border: "1px solid #10fddd",
          borderRadius: "50%",
          width: 50,
          height: 50,
          boxShadow: 5,
        }}
      >
        <img src={Dribble} alt="SVG" width={50} height={50} />
      </Box>
      <Box gutterBottom>
        <Typography variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <Box
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 4,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
      <OutlinedButton variant="outlined">Read More</OutlinedButton>
    </Paper>
  );
}

export default ServiceCard;
