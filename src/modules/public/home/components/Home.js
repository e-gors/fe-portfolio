import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Efren from "../../../../assets/images/efren-formal.png";
import DownloadIcon from "@mui/icons-material/Download";

const styles = {
  wrapper: {
    minHeight: "100vh",
    p: { xs: "7px 20px", md: "37px 100px", lg: "75px 200px" },
  },
  name: {
    color: "#9466eaff",
    fontSize: { xs: 40, md: 60, lg: 80 },
    fontWeight: "bold",
    width: { xs: 200, md: 500 },
    lineHeight: 1.2,
    zIndex: 10,
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  leftWrapper: {
    position: "relative",
    zIndex: 10,
  },
  rightWrapper: {
    height: "auto",
    maxHeight: 500,
    backgroundColor: "#dfdfdf",
    overflow: "hidden",
    borderRadius: 8,
    zIndex: -1,
    transition: "0.5s",

    // "&:hover": {
    //   boxShadow: "10px 10px #9466eaff",
    //   transition: "0.5s",
    // },
  },
  image: {
    display: "block",
    m: "0 auto",
    zIndex: -1,
    width: { xs: "90%", md: "90%" },
  },
  buttonWrapper: {
    mt: 2,
  },
  download: {
    backgroundColor: "#fc94af",
    transition: "0.5s",
    mr: 2,

    "&:hover": {
      backgroundColor: "#9466ea",
    },
  },
};
function Home() {
  // Scroll to a section by its ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const appBarHeight =
      document.querySelector("nav.MuiAppBar-root")?.clientHeight || 0;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - appBarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box id="home" sx={styles.wrapper}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={styles.leftWrapper}>
            <Typography sx={styles.name}>Hello</Typography>

            <Typography sx={styles.name}>I'm Efren Goron</Typography>
            <Typography>
              Frontend Developer, Backend Developer, and Full Stack Developer. I
              am hardworking, positive thinker, and passionate with my work. I
              am flexible to adapt to the new environment.
            </Typography>
            <Box sx={styles.buttonWrapper}>
              <Button
                variant="contained"
                sx={styles.download}
                endIcon={<DownloadIcon />}
              >
                Download CV
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => scrollToSection("contact-me")}
              >
                Contact Me
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.rightWrapper}>
            <Box
              component="img"
              src={Efren}
              alt="Efren"
              sx={styles.image}
              id="image"
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
