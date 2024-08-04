import { Box, Divider, ListItemButton, Stack, Typography } from "@mui/material";
import React from "react";
import { ContainedButton } from "../components/CustomButtons";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SocialCards from "../modules/public/components/SocialCards";
import publicConfig from "./configs/public-config";
import { socials } from "../_mock/socials";
import { alpha } from "@mui/material/styles";

function Footer({ publicConfig, selectedPage, handlePageClick }) {
  return (
    <Box sx={{ p: { xs: "150px 10px 25px", md: "150px 20px 50px" } }}>
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
        {/* <Stack
          direction="row"
          component="nav"
          spacing={1}
          sx={{ flexWrap: "wrap" }}
        >
          {publicConfig?.map((page, i) => {
            const title = page.title;
            const selected = selectedPage === title;
            return (
              <ListItemButton
                key={i}
                onClick={() => handlePageClick(page.title)}
                selected={selected}
                sx={{
                  borderRadius: 0.75,
                  typography: "body1",
                  color: "text.secondary",
                  textTransform: "none",
                  fontWeight: "fontWeightMedium",
                  transition: "0.3s",

                  ...(selected && {
                    color: "primary.main",
                    fontWeight: "fontWeightSemiBold",
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                    "&:hover": {
                      bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, 0.16),
                    },
                  }),
                }}
              >
                {page.title}
              </ListItemButton>
            );
          })}
        </Stack> */}
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
