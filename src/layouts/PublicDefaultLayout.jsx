import { Box } from "@mui/material";
import React from "react";
// import PublicAppBar from "./PublicAppBar";
import Footer from "./Footer";

function PublicDefaultLayout({ children }) {
  return (
    <Box>
      {/* <PublicAppBar /> */}
      <Box sx={{ my: { xs: 5, md: 10 }, mx: { xs: 2, md: 10 } }}>{children}</Box>
      <Footer />
    </Box>
  );
}

export default PublicDefaultLayout;
