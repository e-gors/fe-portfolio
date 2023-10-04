import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  "Home",
  "My Info",
  "Experiences",
  "Expertise",
  "Testimonial",
  "Blog",
  "Contact Me",
];

function DefaultAppbar(props) {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState(""); // State to track active button

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (sectionId, buttonLabel) => {
    const section = document.getElementById(sectionId);
    const appBarHeight =
      document.querySelector("nav.MuiAppBar-root")?.clientHeight || 0;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - appBarHeight,
        behavior: "smooth",
      });
      setActiveButton(buttonLabel); // Update the active button
      setMobileOpen(false); // Close the drawer
    }
  };

  React.useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const appBarHeight =
        document.querySelector("nav.MuiAppBar-root")?.clientHeight || 0;

      // Find the section in view based on scroll position
      let inViewSection = "";
      navItems.forEach((item) => {
        const section = document.getElementById(
          item.toLowerCase().replace(" ", "-")
        );
        if (section) {
          const sectionTop = section.offsetTop - appBarHeight;
          const sectionBottom = sectionTop + section.clientHeight;
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            inViewSection = item;
          }
        }
      });

      // Update the active button
      setActiveButton(inViewSection);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Drawer Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            onClick={() => {
              scrollToSection(item.toLowerCase().replace(" ", "-"), item);
            }}
          >
            <ListItemButton
              sx={{
                textAlign: "center",
                backgroundColor:
                  activeButton === item ? "#9466eaff" : "transparent",
                color: activeButton === item ? "white" : "inherit",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "inherit",
            }}
          >
            Logo
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <MenuItem
                key={item}
                sx={{
                  backgroundColor:
                    activeButton === item ? "#9466eaff" : "transparent",
                  color: activeButton === item ? "white" : "inherit",
                  "&:hover": {
                    color: "black",
                  },
                }}
                onClick={() => {
                  scrollToSection(item.toLowerCase().replace(" ", "-"), item);
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "none" },
              color: "inherit",
            }}
          >
            Logo
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ width: "100%" }}>
        <Toolbar />
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
}

export default DefaultAppbar;
