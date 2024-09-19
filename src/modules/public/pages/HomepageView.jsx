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
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "../components/ContactCard";
import { formatNumberToStr, Validator } from "../../../utils/heplers";
import FormField from "../../../components/FormField";
import SendIcon from "@mui/icons-material/Send";
import SocialCards from "../components/SocialCards";
import { contacts } from "../../../_mock/contacts";
import { socials } from "../../../_mock/socials";
import { setPage } from "../../../redux/actions/pageActions";
import { scrollToSection } from "../../../hooks/use-scroll-to-section";
import Feedbacks from "./Feedbacks";
import Services from "./Services";
import publicHttp from "../../../utils/publicHttp";
import { options, ToastNotification } from "../../../utils/toastConfig";
import Projects from "./Projects";
import Experiences from "./Experiences";

const contactInfoValidator = Validator({
  name: "required",
  email: "email|required",
  message: "required",
});

function HomepageView() {
  const theme = useSelector((state) => state.theme.theme);
  const exp = useSelector((state) => state.totals.totalExperience);
  const rating = useSelector((state) => state.totals.rates);
  const reviews = useSelector((state) => state.totals.totalReviews);
  const projects = useSelector((state) => state.totals.totalProjects);


  const dispatch = useDispatch();

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
    publicHttp
      .post("/contacts", contactInfo.values)
      .then((res) => {
        if (res.data.status === 201) {
          ToastNotification("success", res.data.message, options);
          setContactInfo({
            values: {
              name: "",
              email: "",
              message: "",
            },
          });
        } else {
          ToastNotification("error", res.data.message, options);
          console.error(res.data.error);
        }
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleViewPage = (page) => {
    dispatch(setPage(page));
    scrollToSection(page.toLowerCase());
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
          padding: { xs: "60px 5%", md: "3% 8%" },
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
          <Grid item xs={12} md={5.5}>
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
                <ContainedButton
                  variant="contained"
                  onClick={() => handleViewPage("Services")}
                >
                  My Services
                </ContainedButton>
                <OutlinedButton
                  variant="outlined"
                  onClick={() => handleViewPage("Portfolio")}
                >
                  My Projects
                </OutlinedButton>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6.5}>
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
                  <Typography variant="h5">{exp ?? 12}+</Typography>
                  <Typography>Years of Experience</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5">100%</Typography>
                  <Typography>Client on Worldwide</Typography>
                </Box>
                <Box sx={{ mb: 5 }}>
                  <Typography variant="h5">{ formatNumberToStr(projects) ?? 769}</Typography>
                  <Typography>Projects Done</Typography>
                </Box>
                <Box>
                  <Rating precision={0.5} value={Number(rating)} />
                  <Typography variant="h6">
                    {rating} Star Ratings ({formatNumberToStr(reviews)}+ reviews)
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
          <Grid item xs={12} sm={12} md={5}>
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
              <Typography variant="body1" color="text.secondary" gutterBottom>
                I graduated last year with a Bachelor of Science in Information
                Technology, majoring in Programming (Web Development), and
                earned Cum Laude honors. My academic journey was marked by a
                deep commitment to learning and a strong dedication to my craft.
                The rigorous curriculum and hands-on projects have equipped me
                with a solid foundation in web development, setting the stage
                for a successful career in this dynamic field.
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                My passion for software development drives me to continuously
                improve and innovate. I've immersed myself in various
                technologies, including React.js and Laravel, which have become
                central to my development toolkit. Additionally, I am proficient
                in Git for version control, NPM for package management, and have
                a good grasp of HTML, CSS, and PHP. I also have experience with
                Redux Toolkit for state management and have dabbled in
                JavaScript to enhance interactivity on the web.
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                I am dedicated and hardworking, always eager to tackle new
                challenges and expand my skill set. My enthusiasm for building
                engaging and responsive web applications motivates me to stay
                current with industry trends and technologies. My ultimate goal
                is to leverage my skills and passion to contribute to impactful
                projects and achieve my dream of becoming a skilled web
                developer.
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
      <Services />
      <Projects />
      <Experiences />
      <Feedbacks />
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
            <Typography variant="h3" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Feel free to get in touch! Whether you have questions, feedback,
              or just want to say hello, I’d be happy to hear from you. Don't
              hesitate to reach out using the contact information provided
              below. I’m always open to connecting and discussing ideas, so
              let’s chat!
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
                bottom: { xs: -400, md: -200 },
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
                  loading ? <CircularProgress size={24} /> : <SendIcon />
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
