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
import { useSelector } from "react-redux";
import ProjectCard from "../components/ProjectCard";
import Project from "../../../assets/bookease-not-finish.png";
import CustomTimeline from "../../../components/CustomTimeline";
import FeedbackCard from "../components/FeedbackCard";

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

const projects = [
  {
    type: "Landing Page",
    title: "Medical Service",
    description:
      "The most powerful software & app landing page for any kind of app and software marketing business.",
    link: "localhost:3000",
    img: Project,
  },
  {
    type: "Landing Page",
    title: "Digital Banking",
    description:
      "The most powerful software & app landing page for any kind of app and software marketing business.",
    link: "localhost:3000",
    img: Project,
  },
  {
    type: "Landing Page",
    title: "Branding Website",
    description:
      "The most powerful software & app landing page for any kind of app and software marketing business.",
    link: "localhost:3000",
    img: Project,
  },
];

const experiences = [
  {
    date: "Dec 2021 - Now",
    title: "Frontend Developer",
    company: "ABC Company",
    description:
      "As a junior Front-End Developer at CreativeDevLabs, I started my journey by immersing myself in the world of modern technology. I have work closely with our development. My tasks have involve assisting in the creation of web components, translating design concepts into code, and optimizing user interfaces for responsiveness and speed. This level is all about learning and gaining hands-on experience.",
    icon: null,
  },
  {
    date: "Feb - May 2021",
    title: "Frontend Developer React TypeScript",
    company: "ABC Company",
    description:
      "As a junior Front-End Developer at CreativeDevLabs, I started my journey by immersing myself in the world of modern technology. I have work closely with our development. My tasks have involve assisting in the creation of web components, translating design concepts into code, and optimizing user interfaces for responsiveness and speed. This level is all about learning and gaining hands-on experience.",
    icon: null,
  },
  {
    date: "Oct 2020 - Jan 2021",
    title: "Backend Developer",
    company: "ABC Company",
    description:
      "As a junior Front-End Developer at CreativeDevLabs, I started my journey by immersing myself in the world of modern technology. I have work closely with our development.",
    icon: null,
  },
];

const feedbacks = [
  {
    name: "Efren Goron",
    gender: "male",
    description:
      "I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget.",
    image: null,
    rating: 5.0,
  },
  {
    name: "John Doe",
    gender: "male",
    description:
      "I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget.",
    image: null,
    rating: 4.8,
  },
  {
    name: "Criscilla Gumanid",
    gender: "female",
    description:
      "I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget.",
    image: null,
    rating: 5.0,
  },
  {
    name: "Alberto Lausa",
    gender: "male",
    description:
      "I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget.",
    image: null,
    rating: 5.0,
  },
  {
    name: "Charie Lausa",
    gender: "female",
    description:
      "I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget. I was impressed by the quality of work and the professionalism of the team. They delivered the project on time and within budget.",
    image: null,
    rating: 5.0,
  },
];

function HomepageView() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <Box
        id="home"
        sx={{
          minHeight: `calc(100vh - 60px)`,
          height: "auto",
          position: "relative",
          overflow: "none",
          padding: { xs: "60px 5%", md: "3% 10%" },
          backgroundColor:
            theme === "light" ? "var(--bg_white)" : "var(--bg_black)",
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
                Hello, I’m <br /> Efren a Fullstack Software Developer
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
          overflow: "none",
          padding: { xs: "5%", md: "3% 10%" },
          backgroundColor: "white",
        }}
      >
        <Box mb={2}>
          <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
            <Typography variant="h3">My Services</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Here you will find some of my services that I can offer with my
              skills and some other technologies.
            </Typography>
          </Box>
          <Grid container rowSpacing={5} columnSpacing={2} mt={2}>
            {services?.map((service, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <ServiceCard {...service} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        id="portfolio"
        sx={{
          minHeight: `calc(100vh - 60px)`,
          height: "auto",
          overflow: "none",
          padding: { xs: "5%", md: "3% 10%" },
          backgroundColor: "#f9fafb",
        }}
      >
        <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
          <Typography variant="h3">My Projects</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Here you will find some of my projects that I developed during my
            past years of being a software developer.
          </Typography>
        </Box>
        <Box mt={2}>
          {projects?.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          height: "auto",
          overflow: "none",
          padding: { xs: "5%", md: "3% 10%" },
          backgroundColor: "white",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h3" gutterBottom>
                My Experiences
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                I have had the pleasure to work with companies across a variety
                of industries. I’m always interested in new, exciting, and
                challenging adventures.
              </Typography>
              <ContainedButton variant="contained">Download CV</ContainedButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <CustomTimeline experiences={experiences} position="right" />
          </Grid>
        </Grid>
      </Box>
      <Box
        id="testimonials"
        sx={{
          overflow: "none",
          padding: { xs: "5%", md: "3% 10%" },
          backgroundColor: "#f9fafb",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box maxWidth={400}>
              <Typography variant="h3">
                Hear what they say about me?
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                We love our client and our clients loved us, see all feedback.
              </Typography>
              <ContainedButton variant="contained">
                See all Feedback
              </ContainedButton>
            </Box>
          </Grid>
          {feedbacks?.map((feedback, i) => (
            <Grid key={i} item xs={12} md={6}>
              <FeedbackCard {...feedback} index={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        id="contact"
        sx={{
          overflow: "none",
          padding: { xs: "5%", md: "3% 10%" },
          backgroundColor: "white",
        }}
      >
      Contact
      </Box>
    </>
  );
}

export default HomepageView;
