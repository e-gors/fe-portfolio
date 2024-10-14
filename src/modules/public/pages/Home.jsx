import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContainedButton,
  OutlinedButton,
} from "../../../components/CustomButtons";
import { customRound, formatNumberToStr } from "../../../utils/heplers";
import { setPage } from "../../../redux/actions/pageActions";
import { scrollToSection } from "../../../hooks/use-scroll-to-section";

function Home() {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);
  const exp = useSelector((state) => state.totals.totalExperience);
  const rating = useSelector((state) => state.totals.rates);
  const reviews = useSelector((state) => state.totals.totalReviews);
  const projects = useSelector((state) => state.totals.totalProjects);
  const local = useSelector((state) => state.totals.localPercent);
  const worldwide = useSelector((state) => state.totals.worldwidePercent);

  const words = ["Frontend", "Backend", "Fullstack"]; // Words to cycle through
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0); // Index of the current word
  const [displayedText, setDisplayedText] = React.useState(""); // The text currently displayed
  const [isDeleting, setIsDeleting] = React.useState(false); // Whether the text is being deleted
  const [speed, setSpeed] = React.useState(150); // Typing speed

  React.useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const isFullWordTyped = displayedText === currentWord;

      if (isFullWordTyped && !isDeleting) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        return;
      }

      if (isDeleting) {
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
          setSpeed(150); // Reset speed for typing
        } else {
          setDisplayedText((prevText) => prevText.slice(0, -1)); // Remove the last character
          setSpeed(100); // Faster speed when deleting
        }
      } else {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1)); // Add the next character
        setSpeed(150); // Typing speed
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout); // Clear timeout on unmount
  }, [displayedText, isDeleting, speed, currentWordIndex]);

  const handleViewPage = (page) => {
    dispatch(setPage(page));
    scrollToSection(page.toLowerCase());
  };
  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: `calc(100vh - 60px)`,
        height: "auto",
        position: "relative",
        overflow: "none",
        padding: { xs: "60px 5%", md: "3% 8%" },
        backgroundColor:
          theme === "light" ? "var(--bg_lightest)" : "var(--bg_darkest)",
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
          <Box sx={{ mt: { xs: 2, md: 0 } }}>
            <Typography variant="h1" gutterBottom>
              Hello, I’m <br /> Efren a{" "}
              <span className="dynamic-text">{displayedText}</span> Software
              Developer
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              A dedicated developer passionate about creating modern,
              user-friendly, and optimized websites with robust functionalities.
              Committed to learning new trends and technologies to continuously
              improve skills. Aims to deliver high-quality web solutions
              tailored to your needs.
            </Typography>
            <Stack direction="row" spacing={2}>
              <ContainedButton
                variant="contained"
                onClick={() => handleViewPage("Services")}
              >
                My Services
              </ContainedButton>
              <OutlinedButton
                theme={theme}
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
              src={"/assets/hero-photo.png"}
              alt="Profile"
              style={{ minWidth: 210, maxWidth: 450 }}
            />
            <Box sx={{ textAlign: "right" }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5">{exp ?? 2}+</Typography>
                <Typography>Years of Experience</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5">{worldwide ?? 30}%</Typography>
                <Typography>Client on Worldwide</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5">{local ?? 70}%</Typography>
                <Typography>Client on Local</Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5">
                  {formatNumberToStr(projects ?? 5)}
                </Typography>
                <Typography>Projects Done</Typography>
              </Box>
              <Box>
                <Rating
                  readOnly
                  precision={0.5}
                  value={customRound(Number(rating?.toFixed(1))) ?? 5}
                />
                <Typography variant="h6">
                  {customRound(Number(rating?.toFixed(1))) ?? 5} Star Ratings (
                  {formatNumberToStr(reviews) ?? 0}+ reviews)
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
