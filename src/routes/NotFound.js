import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: { xs: 200, sm: 300, md: 400 },
    height: "auto",
    borderRadius: 2,
    boxShadow: 5,
    p: 2,
  },
  textWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    // color: "#484848",
    color: "white",
    fontSize: { xs: 50, sm: 75, md: 150 },
    fontWeight: "bold",
    textShadow: "2px 2px 4px #000000",
    WebkitTextFillColor: "#EA3C27",
    WebkitTextStroke: "2px #EEEEEE",
    textStroke: "2px #000000",
    textFillColor: "#EA3C27",
  },
  descriptionsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionTitle: {
    fontWeight: "bold",
    fontSize: { xs: 18, sm: 24, md: 30 },
  },
  descriptions: {
    fontSize: { xs: 10, sm: 12, md: 14 },
    textAlign: "left",
  },
  button: {
    boxShadow: 5,
    mt: 2,
    background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
  },
};
function NotFound() {
  const history = useHistory();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.main}>
        <Box sx={styles.textWrapper}>
          <Typography sx={styles.status}>4</Typography>
          <Typography sx={styles.status}>0</Typography>
          <Typography sx={styles.status}>4</Typography>
        </Box>
        <Box sx={styles.descriptionsWrapper}>
          <Typography sx={styles.descriptionTitle}>Ooops!</Typography>
          <Typography sx={styles.descriptionTitle}>Page Not Found</Typography>
          <Typography sx={styles.descriptions}>
            This page doesn't exist or was removed!
          </Typography>
          <Typography sx={styles.descriptions}>
            We suggest you back to home
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="small"
            onClick={() => history.push("/")}
            sx={styles.button}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default NotFound;
