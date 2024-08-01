import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import {
  ContainedButton,
  OutlinedButton,
} from "../../../components/CustomButtons";

function Hero() {
  return (
    <Box>
      <Box>
        <Typography variant="h1">
          Hello, I’m <br /> Efren a Front-end Web Developer
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          A dedicated developer with a passion for developing modern and
          user-friendly websites that not only look beautiful but also function
          seemlessly.
        </Typography>
        <Stack direction="row" spacing={2}>
          <ContainedButton variant="contained">My Projects</ContainedButton>
          <OutlinedButton variant="outlined">My Projects</OutlinedButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default Hero;
