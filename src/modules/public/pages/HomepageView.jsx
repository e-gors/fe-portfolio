import React from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import {
  ContainedButton,
  OutlinedButton,
} from "../../../components/CustomButtons";
import Profile from "../../../assets/hero-photo.png";
import AboutPhoto from "../../../assets/about-photo.jpg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ServiceCard from "../components/ServiceCard";
import Dribble from "../../../assets/svg/dribble.svg";
import Dropbox from "../../../assets/svg/dropbox.svg";
import Flowbite from "../../../assets/svg/flowbite.svg";
import Github from "../../../assets/svg/github.svg";
import Layers from "../../../assets/svg/layers.svg";
import Reddit from "../../../assets/svg/reddit.svg";

const services = [
  {
    title: "Dribble",
    descriptions:
      "This is the dribble that we are talking about to spend more time.",
    icon: Dribble,
  },
  {
    title: "Dropbox",
    descriptions:
      "This is the dropbox that we are talking about to spend more time.",
    icon: Dropbox,
  },
  {
    title: "Flowbite",
    descriptions:
      "This is the flowbite that we are talking about to spend more time.",
    icon: Flowbite,
  },
  {
    title: "Github",
    descriptions:
      "This is the github that we are talking about to spend more time.",
    icon: Github,
  },
  {
    title: "Layers",
    descriptions:
      "This is the layers that we are talking about to spend more time.",
    icon: Layers,
  },
  {
    title: "Reddit",
    descriptions:
      "This is the reddit that we are talking about to spend more time.",
    icon: Reddit,
  },
];

function HomepageView() {
  return (
    <>
      <Box
        id="home"
        sx={{
          minHeight: `calc(100vh - 60px)`,
          height: "auto",
          position: "relative",
          overflow: "none",
          padding: { xs: "70px 5%", md: "3% 10%" },
        }}
      >
        <Grid
          container
          spacing={2}
          alignContent="center"
          alignItems="center"
          sx={{ minHeight: "90vh" }}
        >
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h1" gutterBottom>
                Hello, I’m <br /> Efren a Front-end Web Developer
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                A dedicated developer passionate about creating modern,
                user-friendly, and optimized websites with robust
                functionalities. Committed to learning new trends and
                technologies to continuously improve skills. Aims to deliver
                high-quality web solutions tailored to your needs.
              </Typography>
              <Stack direction="row" spacing={2}>
                <ContainedButton variant="contained">
                  My Projects
                </ContainedButton>
                <OutlinedButton variant="outlined">My Projects</OutlinedButton>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: { xs: 3, md: 0 },
              }}
            >
              <img
                src={Profile}
                alt="Profile"
                style={{ minWidth: 210, maxWidth: 450 }}
              />
              <Box sx={{ textAlign: "right" }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5">12+</Typography>
                  <Typography>Years of Experience</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5">100%</Typography>
                  <Typography>Client on Worldwide</Typography>
                </Box>
                <Box sx={{ mb: 5 }}>
                  <Typography variant="h5">769</Typography>
                  <Typography>Projects Done</Typography>
                </Box>
                <Box>
                  <Rating precision={0.5} value={4.5} />
                  <Typography variant="h6">
                    5 Star Ratings (2k+ reviews)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        id="about"
        sx={{
          minHeight: `calc(100vh - 60px)`,
          height: "auto",
          position: "relative",
          overflow: "none",
          padding: { xs: "5%", md: "3% 10%" },
          backgroundColor: "#f9fafb",
        }}
      >
        <Grid
          container
          spacing={2}
          alignContent="center"
          alignItems="center"
          sx={{ minHeight: "90vh" }}
        >
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: { xs: 3, md: 0 },
              }}
            >
              <img
                src={AboutPhoto}
                alt="Profile"
                style={{
                  minWidth: 210,
                  maxWidth: 400,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box>
              <Typography variant="h3" gutterBottom>
                About Me
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                A dedicated developer with a passion for developing modern and
                user-friendly websites that not only look beautiful but also
                function seamlessly. A dedicated developer with a passion for
                developing modern and user-friendly websites that not only look
                beautiful but also function seamlessly.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                A dedicated developer with a passion for developing modern and
                user-friendly websites that not only look beautiful but also
                function seamlessly. A dedicated developer with a passion for
                developing modern and user-friendly websites that not only look
                beautiful but also function seamlessly. A dedicated developer
                with a passion for developing modern and user-friendly websites
                that not only look beautiful but also function seamlessly.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                A dedicated developer with a passion for developing modern and
                user-friendly websites that not only look beautiful but also
                function seamlessly.
              </Typography>
              <Stack direction="row" spacing={3} alignItems="center" mt={2}>
                <ContainedButton variant="contained">Hire Me</ContainedButton>
                <Divider sx={{ display: { xs: "none", md: "block" } }}>
                  Follow Me
                </Divider>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid #10fddd",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "#10fddd",
                        border: "1px solid white",
                      },
                    }}
                  >
                    <FacebookRoundedIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid #10fddd",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "#10fddd",
                        border: "1px solid white",
                      },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid #10fddd",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "#10fddd",
                        border: "1px solid white",
                      },
                    }}
                  >
                    <YouTubeIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid #10fddd",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "#10fddd",
                        border: "1px solid white",
                      },
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        id="services"
        sx={{
          minHeight: `calc(100vh - 60px)`,
          height: "auto",
          position: "relative",
          overflow: "none",
          padding: { xs: "5%", md: "3% 10%" },
          backgroundColor: "white",
        }}
      >
        <Box mb={2}>
          <Box sx={{ textAlign: {xs: 'left', sm: 'center'} }}>
            <Typography variant="h3">My Services</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Here you will find some of my services that I can offer with my
              skills and some other technologies.
            </Typography>
          </Box>
          <Grid container rowSpacing={5} columnSpacing={2} mt={2}>
            {services?.map((service, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <ServiceCard
                  title={service.title}
                  descriptions={service.descriptions}
                  icon={service.icon}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default HomepageView;
