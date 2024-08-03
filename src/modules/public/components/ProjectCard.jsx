import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { TextButton } from "../../../components/CustomButtons";
import { useHistory } from "react-router-dom";
import { isEmpty } from "../../../utils/heplers";
import PropTypes from "prop-types";
import Project from '../../../assets/bookease-not-finish.png'

function ProjectCard({
  type = "Landing Page",
  title = "Page Title",
  description = "Page Descriptions...",
  link,
  img = Project,
}) {
  const history = useHistory();

  const handleNavigate = (link) => {
    if (!isEmpty(link)) history.push(link);
    else console.log("no link");
  };

  return (
    <Grid container spacing={2} alignItems="center" sx={{ my: 2 }}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            {type}
          </Typography>
          <Typography variant="h5">{title}</Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 400 }}
            gutterBottom
          >
            {description}
          </Typography>
          <TextButton
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
          src={img}
          alt={title}
          sx={{
            mt: { xs: 2, md: 0 },
            borderRadius: 1,
            boxShadow: 4,
          }}
        />
      </Grid>
    </Grid>
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
