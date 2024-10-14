import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { RouterLink } from "./components";

import { ContainedButton } from "../components/CustomButtons";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

export default function DevelopmentMode(props) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <Container>
        <Box
          sx={{
            backgroundColor:
              theme === "light" ? "var(--bg_lightest)" : "var(--bg_darkest)",
            display: "flex",
            height: "100vh",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Sorry, page is under develop!
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            We’ll do our best to be up and running soon. Please check back with
            us in a bit.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/illustration_in_dev.png"
            sx={{
              mx: "auto",
              height: 260,
            }}
          />

          <ContainedButton
            href="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Go to Home
          </ContainedButton>
        </Box>
      </Container>
    </>
  );
}
