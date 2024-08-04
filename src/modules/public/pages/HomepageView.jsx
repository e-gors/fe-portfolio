import React from "react";
import {
  Box,
  CircularProgress,
  Grid,
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
import ServiceCard from "../components/ServiceCard";
import { useSelector } from "react-redux";
import ProjectCard from "../components/ProjectCard";
import CustomTimeline from "../../../components/CustomTimeline";
import FeedbackCard from "../components/FeedbackCard";
import ContactCard from "../components/ContactCard";
import { Validator } from "../../../utils/heplers";
import FormField from "../../../components/FormField";
import SendIcon from "@mui/icons-material/Send";
import SocialCards from "../components/SocialCards";
import { contacts } from "../../../_mock/contacts";
import { feedbacks } from "../../../_mock/feedbacks";
import { socials } from "../../../_mock/socials";
import { services } from "../../../_mock/services";
import { projects } from "../../../_mock/projects";
import { experiences } from "../../../_mock/experiences";
import { WifiTetheringErrorSharp } from "@mui/icons-material";

const contactInfoValidator = Validator({
  name: "required",
  email: "email|required",
  message: "required",
});

function HomepageView() {
  const theme = useSelector((state) => state.theme.theme);

  const [loading, setLoading] = React.useState(false);
  const [contactInfo, setContactInfo] = React.useState({
    values: {
      name: "",
      email: "",
      message: "",
    },
    errors: contactInfoValidator.errors,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
    }));

    const { errors } = contactInfoValidator;

    contactInfoValidator.validate(name, value).then((success) => {
      if (!success) {
        setContactInfo((prev) => ({
          ...prev,
          errors,
        }));
      }
    });
  };

  const handleValidate = () => {
    contactInfoValidator.validateAll(contactInfo.values).then((success) => {
      if (success) handleSubmit();
      else
        setContactInfo((prev) => ({
          ...prev,
          errors: contactInfoValidator.errors,
        }));
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    console.log(contactInfo);
    setLoading(false);
  };

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
              <SocialCards
                buttonText="Hire Me"
                text="Follow Me"
                socials={socials}
              />
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
              <Typography variant="h3">Hear what they say about me?</Typography>
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
          minHeight: { xs: "85vh", md: "auto" },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">Get in Touch</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              tempora incidunt, voluptates architecto pariatur eveniet esse
              doloremque repellendus nam, rem impedit cumque tenetur fugiat
              fugit maxime ducimus, voluptate illum et?
            </Typography>
            <Box mt={2}>
              {contacts?.map((contact, i) => (
                <ContactCard {...contact} key={i} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <Box
              component="form"
              sx={{
                boxShadow: 4,
                padding: { xs: 2, md: 5 },
                borderRadius: 1,
                position: "absolute",
                mt: 2,
                left: 15,
                bottom: { xs: -400, md: -150 },
                backgroundColor: "white",
              }}
            >
              <Typography variant="h4">Say Something</Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                What's on your mind?
              </Typography>
              <FormField
                label="Fullname"
                name="name"
                value={contactInfo.values.name}
                onChange={handleChange}
                errors={contactInfo.errors}
                type="text"
                fullWidth
                sx={{ my: 1 }}
              />
              <FormField
                label="Email Address"
                name="email"
                value={contactInfo.values.email}
                onChange={handleChange}
                errors={contactInfo.errors}
                type="email"
                fullWidth
                sx={{ my: 1 }}
              />
              <FormField
                label="Your Message"
                name="message"
                value={contactInfo.values.message}
                onChange={handleChange}
                errors={contactInfo.errors}
                type="text"
                multiline
                minRows={4}
                maxRows={4}
                fullWidth
                sx={{ my: 1 }}
              />
              <ContainedButton
                variant="contained"
                endIcon={
                  loading ? <CircularProgress size="small" /> : <SendIcon />
                }
                disabled={loading}
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleValidate}
              >
                Submit Message
              </ContainedButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomepageView;
