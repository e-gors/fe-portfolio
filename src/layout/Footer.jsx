import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box sx={{ p: { xs: "10px 25px", md: "20px 50px" } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontSize: { xs: 19, md: 36 } }}>
          Let's Work Together
        </Typography>
        <Button variant="contained">Let's Talk</Button>
      </Box>
      <Box
        sx={{
          my: 2,
          display: { xs: "block", sm: "flex", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ mx: 1 }}>Home</Typography>
          <Typography sx={{ mx: 1 }}>About</Typography>
          <Typography sx={{ mx: 1 }}>Services</Typography>
          <Typography sx={{ mx: 1 }}>Contact</Typography>
        </Box>
        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ mx: 0.5 }}>Phone: +63-905-417-0203</Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ mx: 0.5 }}
          />
          <Typography sx={{ mx: 0.5 }}>Email: goronefren@gmail.com</Typography>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "orange", my: 1 }} />
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ my: { xs: 1, md: 0 } }}>Efren Goron</Typography>
        <Typography sx={{ my: { xs: 1, md: 0 } }}>
          Copyright @2023. All rights reserved
        </Typography>
        <Box sx={{ display: "flex", my: { xs: 1, md: 0 } }}>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "black",
              mx: 1,
            }}
          ></Box>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "black",
              mx: 1,
            }}
          ></Box>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "black",
              mx: 1,
            }}
          ></Box>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "black",
              mx: 1,
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
