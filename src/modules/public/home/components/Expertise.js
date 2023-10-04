import {
  Box,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const styles = {
  wrapper: {
    minHeight: "100vh",
    p: { xs: 2, sm: "50px 100px", md: "100px 200px" },
    mt: { xs: 5, md: 0 },
  },
  contentWrapper: { textAlign: "center" },
  title: {
    fontSize: { xs: 24, sm: 36, md: 50 },
    fontWeight: "bold",
    color: "#9466eaff",
  },
  subTitle: {
    fontSize: { xs: 16, sm: 26, md: 36 },
    fontWeight: "bold",
    color: "#fc94af",
  },
  styledDivider: { height: 3, backgroundColor: "#9466eaff", mt: 2 },
  content: {
    mt: 5,
  },
};
function Expertise() {
  return (
    <Box id="expertise" sx={styles.wrapper}>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.title}>Expertise</Typography>
        <Typography sx={{ fontSize: { xs: 16, md: 24 } }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur.
        </Typography>
        <Divider sx={styles.styledDivider} />
      </Box>

      <Box sx={styles.content}>
        <Box>
          <Typography sx={styles.subTitle}>Soft Skills</Typography>
          <Box>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <Box>
                <Typography>HTML</Typography>
                <LinearProgress
                  color="primary"
                  variant="determinate"
                  value={25}
                  determinate="true"
                  sx={{ height: 25 }}
                >
                  <Typography sx={{ color: "red" }}>
                    LOADING… {`${Math.round(25)}%`}
                  </Typography>
                </LinearProgress>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Expertise;
