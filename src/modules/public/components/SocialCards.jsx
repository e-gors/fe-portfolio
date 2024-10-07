import { Divider, IconButton, Stack } from "@mui/material";
import React from "react";
import { ContainedButton } from "../../../components/CustomButtons";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../redux/actions/pageActions";
import { scrollToSection } from "../../../hooks/use-scroll-to-section";

function SocialCards({
  buttonText = "Hire Me",
  text = "Follow Me",
  socials = [],
}) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

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
              color: "#10fddd",
              backgroundColor:
                theme === "light" ? "var(--bg_white)" : "var(--bg_black)",
              border: "1px solid #10fddd",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#0b1a26",
                border: "1px solid white",
              },
            }}
            onClick={() => window.open(social.link, "_blank")}
          >
            {social.icon}
          </IconButton>
        ))}
      </Stack>
    </Stack>
  );
}

export default SocialCards;
