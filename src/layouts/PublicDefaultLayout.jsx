import { Box, Paper } from "@mui/material";
import React from "react";
import PublicAppbar from "./PublicAppbar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { usePathname } from "../routes/hooks";
import publicConfig from "./configs/public-config";

function PublicDefaultLayout({ children }) {
  const history = useHistory();
  const pathname = usePathname();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState("Home");

  React.useEffect(() => {
    const currentPath = pathname.slice(1).toLowerCase();
    const initialPage =
      publicConfig?.find((page) => page.title.toLowerCase() === currentPath) ||
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
    <Box>
      <PublicAppbar
        publicConfig={publicConfig}
        handleOpenNavMenu={handleOpenNavMenu}
        handlePageClick={handlePageClick}
        selectedPage={selectedPage}
        drawerOpen={drawerOpen}
        onDrawerOpen={setDrawerOpen}
      />
      <Paper>{children}</Paper>
      <Footer
        publicConfig={publicConfig}
        selectedPage={selectedPage}
        handlePageClick={handlePageClick}
      />
    </Box>
  );
}

export default PublicDefaultLayout;
