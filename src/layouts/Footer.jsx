import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { ContainedButton } from "../components/CustomButtons";
import SocialCards from "../modules/public/components/SocialCards";
import { socials } from "../_mock/socials";


function Footer() {
  return (
    <Box
      sx={{
        p: { xs: "150px 10px 25px", md: "200px 20px 50px" },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontSize: { xs: 19, md: 36 } }}>
          Let's Work Together
        </Typography>
        <ContainedButton variant="contained">Let's Talk</ContainedButton>
      </Box>
      <Box
        sx={{
          my: 2,
          display: { xs: "block", sm: "flex", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Typography>Phone: +63-905-417-0203</Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              backgroundColor: "orange",
              mx: 2,
              height: 12,
              display: { xs: "none", md: "block" },
            }}
          />
          <Typography>Email: goronefren@gmail.com</Typography>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "orange", my: 1 }} />
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography
          sx={{ my: { xs: 1, md: 0 }, textAlign: { xs: "center", md: "left" } }}
        >
          Efren Goron
        </Typography>
        <Typography
          sx={{ my: { xs: 1, md: 0 }, textAlign: { xs: "center", md: "left" } }}
        >
          Copyright @2023. All rights reserved
        </Typography>
        <SocialCards buttonText="Hire Me" text="Follow Me" socials={socials} />
      </Box>
    </Box>
  );
}

export default Footer;
