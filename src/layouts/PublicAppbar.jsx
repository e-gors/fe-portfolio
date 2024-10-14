import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Stack,
  ListItemButton,
} from "@mui/material";
import { Menu, LightModeTwoTone, DarkModeTwoTone } from "@mui/icons-material";
import Logo from "../components/logo";
import Nav from "./dashboard/nav";
import { OutlinedButton } from "../components/CustomButtons";
import { alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import publicHttp from "../utils/publicHttp";
import { options, ToastNotification } from "../utils/toastConfig";
import { setPage } from "../redux/actions/pageActions";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/actions/themeActions";

function PublicAppBar({
  publicConfig,
  handleOpenNavMenu,
  handlePageClick,
  selectedPage,
  drawerOpen,
  onDrawerOpen,
}) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const [loading, setLoading] = React.useState(false);

  // when click, download the latest uploaded resume
  const handleDownloadResume = () => {
    setLoading(true);
    publicHttp
      .get("/resume/download", {
        responseType: "blob", // Receive the file as a Blob
      })
      .then((res) => {
        // Extract the filename from the content-disposition header if available
        const disposition = res.headers["content-disposition"];
        let fileName = "Goron, Efren - Resume.docx"; // Default filename

        if (disposition) {
          const filenameMatch = disposition.match(/filename[^;=\n]*=(.*)/);
          if (filenameMatch && filenameMatch[1]) {
            fileName = filenameMatch[1].replace(/['"]/g, "").trim(); // Clean up the filename
          }
        }

        // Create a new Blob from the response data
        const url = window.URL.createObjectURL(new Blob([res.data]));

        // Create a link element and trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName); // Use the extracted or default filename
        document.body.appendChild(link);

        // Triger download
        link.click();

        // Cleanup: Remove the link and revoke the Object URL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        ToastNotification("success", "Resume downloaded successfully!", options);
      })
      .catch((err) => {
        ToastNotification(
          "error",
          err?.response?.statusText ?? err.message,
          options
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        backdropFilter: "blur(10px)",
        color: "black",
        height: 60,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5, lg: 10 } }}>
        <Toolbar
          sx={{
            minHeight: 60,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => dispatch(setPage("Home"))}
          >
            <Logo sx={{ display: { xs: "none", md: "block" } }} />
            <Box sx={{ ml: { xs: 0, sm: 3, md: 5, lg: 10 } }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <Menu
                    sx={{
                      color:
                        theme === "light"
                          ? "var(--text_dark)"
                          : "var(--text_white)",
                    }}
                  />
                </IconButton>
                <Nav
                  handlePageClick={handlePageClick}
                  selectedPage={selectedPage}
                  navConfig={publicConfig}
                  openNav={drawerOpen}
                  onCloseNav={() => onDrawerOpen(false)}
                />
              </Box>

              <Stack
                direction="row"
                component="nav"
                spacing={1}
                sx={{ display: { xs: "none", md: "flex" } }}
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
                          bgcolor: (theme) =>
                            alpha(theme.palette.primary.main, 0.08),
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
              </Stack>
            </Box>
          </Box>

          <Stack direction="row" spacing={2}>
            <OutlinedButton
              theme={theme}
              variant="outlined"
              size="small"
              onClick={handleDownloadResume}
              disabled={loading}
            >
              {loading ? "Downloading..." : "Download CV"}
            </OutlinedButton>
            <IconButton onClick={handleChangeTheme}>
              {theme === "light" ? <DarkModeTwoTone /> : <LightModeTwoTone />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

PublicAppBar.propTypes = {
  publicConfig: PropTypes.array,
  handleOpenNavMenu: PropTypes.func,
  handlePageClick: PropTypes.func,
  selectedPage: PropTypes.string,
  drawerOpen: PropTypes.bool,
  onDrawerOpen: PropTypes.func,
};

export default PublicAppBar;
