import { Box, Paper } from "@mui/material";
import React from "react";
import PublicAppbar from "./PublicAppbar";
import Footer from "./Footer";

function PublicDefaultLayout({ children }) {
  return (
    <Box>
      <PublicAppbar />
      <Paper>{children}</Paper>
      <Footer />
    </Box>
  );
}

export default PublicDefaultLayout;
