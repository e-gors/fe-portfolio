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
import { useHistory } from "react-router-dom";
import Logo from "../components/logo";
import publicConfig from "./configs/public-config";
import Nav from "./dashboard/nav";
import { usePathname } from "../routes/hooks";
import { OutlinedButton } from "../components/CustomButtons";
import CustomSwitch from "../components/CustomSwitch";
import { alpha } from "@mui/material/styles";

function PublicAppBar() {
  const history = useHistory();
  const pathname = usePathname();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState("Home");

  React.useEffect(() => {
    const currentPath = pathname.slice(1).toLowerCase();
    const initialPage =
      publicConfig.find((page) => page.title.toLowerCase() === currentPath) ||
      "Home";
    setSelectedPage(initialPage);

    const handleScroll = () => {
      const sectionOffsets = publicConfig.map((page) => {
        const link = page.title;
        const section = document.getElementById(link.toLowerCase());
        return {
          link,
          offsetTop: section?.offsetTop || 0,
        };
      });

      const scrollPosition = window.scrollY + 80;

      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i].offsetTop) {
          setSelectedPage(sectionOffsets[i].link);
          break;
        }
      }
    };

    const unlisten = history.listen((location) => {
      if (location.hash) {
        const section = location.hash.slice(1);
        scrollToSection(section);
        setSelectedPage(
          publicConfig.find((page) => page.title.toLowerCase() === section) ||
            "Home"
        );
      }
    });

    if (currentPath && currentPath !== "login" && currentPath !== "register") {
      scrollToSection(currentPath);
      setSelectedPage(
        publicConfig.find((page) => page.title.toLowerCase() === currentPath) ||
          "Home"
      );
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      unlisten();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [history, pathname]);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = -60;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleOpenNavMenu = () => {
    setDrawerOpen(true);
  };

  const handlePageClick = (page) => {
    setDrawerOpen(false);
    setSelectedPage(page);
    scrollToSection(page.toLowerCase());
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
              onCloseNav={() => setDrawerOpen(false)}
            />
          </Box>

          <Stack
            direction="row"
            component="nav"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {publicConfig.map((page, i) => {
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
                    transition: '0.3s',

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
            <OutlinedButton variant="outlined" size="small">
              Download CV
            </OutlinedButton>
            {/* <CustomSwitch noLabel /> */}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default PublicAppBar;
