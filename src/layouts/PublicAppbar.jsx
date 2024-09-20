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
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../components/logo";
import Nav from "./dashboard/nav";
import { OutlinedButton } from "../components/CustomButtons";
import { alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import publicHttp from "../utils/publicHttp";
import axios from "axios";

function PublicAppBar({
  publicConfig,
  handleOpenNavMenu,
  handlePageClick,
  selectedPage,
  drawerOpen,
  onDrawerOpen,
}) {

  // when click, download the latest uploaded resume
  const handleDownloadResume = () => {
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
      })
      .catch((err) => {
        console.error("Error downloading the resume:", err);
        // Display a user-friendly error message here
        alert(
          "There was an error downloading the resume. Please try again later."
        );
      });
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
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            minHeight: 60,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo sx={{ display: { xs: "none", md: "block" } }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
          <Stack direction="row" spacing={2}>
            <OutlinedButton
              variant="outlined"
              size="small"
              onClick={handleDownloadResume}
            >
              Download CV
            </OutlinedButton>
            {/* <CustomSwitch noLabel /> */}
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
