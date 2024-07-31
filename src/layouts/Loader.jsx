import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "50%", md: 300 },
        }}
      >
        <LinearProgress sx={{ height: 5 }} />
      </Box>
    </Box>
  );
}
