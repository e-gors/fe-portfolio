import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { TextButton } from "../../../components/CustomButtons";
import { isEmpty } from "../../../utils/heplers";
import PropTypes from "prop-types";
import {
  options,
  ToastNotification,
  ToastNotificationContainer,
} from "../../../utils/toastConfig";
import { useSelector } from "react-redux";

function ProjectCard({
  type = "Landing Page",
  name = "Website Name",
  description = "Page Descriptions...",
  link,
  picture = "/assets/bookease-not-finish.png",
}) {
  const theme = useSelector((state) => state.theme.theme);
  
  const handleNavigate = (link) => {
    if (!isEmpty(link)) window.open(link, "_blank");
    else
      ToastNotification(
        "error",
        "I'm sorry, link is broken, or it is in building process!",
        options
      );
  };

  return (
    <>
      <ToastNotificationContainer />
      <Grid container spacing={2} alignItems="center" sx={{ my: 2 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {type}
            </Typography>
            <Typography variant="h5">{name}</Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 400 }}
              gutterBottom
            >
              {description}
            </Typography>
            <TextButton
              theme={theme}
              variant="text"
              endIcon={<ArrowOutwardIcon />}
              onClick={() => handleNavigate(link)}
            >
              View Live
            </TextButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={picture}
            alt={name}
            sx={{
              mt: { xs: 2, md: 0 },
              borderRadius: 1,
              boxShadow: 4,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

ProjectCard.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string,
};
export default ProjectCard;
