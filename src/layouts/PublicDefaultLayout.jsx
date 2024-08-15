import { Box, Paper } from "@mui/material";
import React from "react";
import PublicAppbar from "./PublicAppbar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { usePathname } from "../routes/hooks";
import publicConfig from "./configs/public-config";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../redux/actions/pageActions";
import { scrollToSection } from "../hooks/use-scroll-to-section";

function PublicDefaultLayout({ children }) {
  const history = useHistory();
  const pathname = usePathname();
  
  const dispatch = useDispatch();

  const initialPage = useSelector((state) => state.page.page);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState(initialPage);

  React.useEffect(() => {
    const currentPath = pathname.slice(1).toLowerCase();
    const initialPage =
      publicConfig?.find((page) => page.title.toLowerCase() === currentPath) ||
      "Home";
    setSelectedPage(initialPage);
    dispatch(setPage(initialPage)); // Update Redux state with initial page

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
          dispatch(setPage(sectionOffsets[i].link)); // Update Redux state when scrolled to a section
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
        dispatch(setPage(section)); // Update Redux state when hash changes
      }
    });

    if (currentPath && currentPath !== "login" && currentPath !== "register") {
      scrollToSection(currentPath);
      setSelectedPage(
        publicConfig.find((page) => page.title.toLowerCase() === currentPath) ||
          "Home"
      );
      dispatch(setPage(currentPath)); // Update Redux state when path changes
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      unlisten();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [history, pathname, dispatch]);


  const handleOpenNavMenu = () => {
    setDrawerOpen(true);
  };

  const handlePageClick = (page) => {
    setDrawerOpen(false);
    setSelectedPage(page);
    scrollToSection(page.toLowerCase());
    dispatch(setPage(page)); // Update Redux state when a page is clicked
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
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
}

export default PublicDefaultLayout;
