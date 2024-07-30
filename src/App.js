import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import NavBar from "./components/NavBar";
import { PlayCircle } from "@mui/icons-material";
import profile from "./assets/profile.jpg";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import Footer from "./layout/Footer";

function App() {
  const [role, setRole] = useState("Front-end");

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prevRole) =>
        prevRole === "Front-end" ? "Back-end" : "Front-end"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper
      className="App"
      elevation={0}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      <NavBar />
      <Box
        sx={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#EFE6D5",
          p: "0 5%",
          zIndex: 1,
        }}
      >
        <Avatar
          alt="profile"
          src={profile}
          sx={{
            width: { xs: 350, md: 450 },
            height: { xs: 350, md: 450 },
            position: "absolute",
            top: { xs: "20%", sm: "35", md: "50%" },
            left: "65%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        />
        <Grid container sx={{ mt: { xs: 10, md: 0 } }}>
          <Grid item xs={12} md={7} sx={{ p: 2 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, fontSize: { xs: 28, sm: 40, md: 50 } }}
            >
              Hello, I’m
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 600, fontSize: { xs: 28, sm: 40, md: 50 } }}
            >
              Efren Goron a {role} Web Developer
            </Typography>
            <Typography variant="body1" paragraph>
              A dedicated developer with a passion for developing modern and
              user-friendly websites that not only look beautiful but also
              function seamlessly.
            </Typography>
            <Stack direction="row" spacing={2} mt={3}>
              <Button variant="contained">Get Started</Button>
              <IconButton
                aria-label="play-circle"
                size="large"
                sx={{ color: "#FE9D8C" }}
              >
                <PlayCircle />
              </IconButton>
            </Stack>
            <Box
              display="flex"
              alignItems="center"
              sx={{ position: "relative", left: 0, bottom: -50 }}
            >
              <ArrowCircleDownOutlinedIcon />
              <Typography variant="body2" ml={1}>
                Scroll Down
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-end" },
              textAlign: { xs: "center", md: "right" },
              mt: { xs: 10, md: 0 },
            }}
          >
            <Box mb={5}>
              <Typography variant="h4">12</Typography>
              <Typography variant="body1">Years of Experience</Typography>
            </Box>
            <Box mb={5}>
              <Typography variant="h4">100%</Typography>
              <Typography variant="body1">Clients Worldwide</Typography>
            </Box>
            <Box>
              <Typography variant="h4">165</Typography>
              <Typography variant="body1">Projects Done</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Paper>
  );
}

export default App;
