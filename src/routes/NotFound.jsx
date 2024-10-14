import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { RouterLink } from "./components";

import Logo from "../components/logo";
import { ContainedButton } from "../components/CustomButtons";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/actions/pageActions";

// ----------------------------------------------------------------------

export default function NotFound() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const renderHeader = (
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        width: 1,
        lineHeight: 0,
        position: "fixed",
        p: (theme) => ({
          xs: theme.spacing(3, 3, 0),
          sm: theme.spacing(5, 5, 0),
        }),
      }}
      onClick={() => dispatch(setPage("Home"))}
    >
      <Logo />
    </Box>
  );

  return (
    <>
      {renderHeader}

      <Container>
        <Box
          sx={{
            backgroundColor:
              theme === "light" ? "var(--bg_lightest)" : "var(--bg_darkest)",
            py: 12,
            maxWidth: 480,
            mx: "auto",
            display: "flex",
            minHeight: "100vh",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/illustration_404.svg"
            sx={{
              mx: "auto",
              height: 260,
              my: { xs: 5, sm: 10 },
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
