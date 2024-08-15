import { Divider, IconButton, Stack } from "@mui/material";
import React from "react";
import { ContainedButton } from "../../../components/CustomButtons";
import { useDispatch } from "react-redux";
import { setPage } from "../../../redux/actions/pageActions";
import { scrollToSection } from "../../../hooks/use-scroll-to-section";

function SocialCards({
  buttonText = "Hire Me",
  text = "Follow Me",
  socials = [],
}) {
  const dispatch = useDispatch();

  const handleViewPage = (page) => {
    dispatch(setPage(page));
    scrollToSection(page.toLowerCase());
  };
  
  return (
    <Stack direction="row" spacing={3} alignItems="center" mt={2}>
      <ContainedButton
        variant="contained"
        onClick={() => handleViewPage("Contact")}
      >
        {buttonText}
      </ContainedButton>
      <Divider sx={{ display: { xs: "none", md: "block" } }}>{text}</Divider>
      <Stack direction="row" spacing={1}>
        {socials?.map((social, i) => (
          <IconButton
            key={i}
            sx={{
              backgroundColor: "white",
              border: "1px solid #10fddd",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#10fddd",
                border: "1px solid white",
              },
            }}
            onClick={() => window.open(social.link)}
          >
            {social.icon}
          </IconButton>
        ))}
      </Stack>
    </Stack>
  );
}

export default SocialCards;
