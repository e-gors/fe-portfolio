// ScrollToTopButton.js
import React from "react";
import { IconButton, Zoom, useScrollTrigger } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled } from "@mui/system";

const ScrollTopButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,
}));

const ScrollToTopButton = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <ScrollTopButton
        onClick={handleClick}
        sx={{
          border: "1px solid #00dfc0",
          boxShadow: 5,
          backgroundColor: "white",
          color: "black"
        }}
      >
        <ArrowUpwardIcon />
      </ScrollTopButton>
    </Zoom>
  );
};

export default ScrollToTopButton;
