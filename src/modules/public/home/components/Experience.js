import { Box, Divider, Grid, Typography } from "@mui/material";
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
  styledDivider: { height: 3, backgroundColor: "#9466eaff", mt: 2 },
  expTitle: {
    mt: { xs: 2, md: 5 },
    mb: 2,
    fontSize: { xs: 24, md: 35 },
    fontWeight: "bold",
  },
  expContentWrapper: { mb: { xs: 2, md: 5 } },
  expContentSchool: {
    fontWeight: "bold",
    fontSize: { xs: 14, md: 18 },
  },
  expContentCourse: {
    fontWeight: "bold",
    color: "#9466eaff",
    fontSize: { xs: 14, md: 18 },
  },
  expContentValue: {
    mt: 2,
    fontSize: { xs: 14, md: 18 },
  },
  expContentLocation: {
    mt: 2,
    color: "#fc94af",
    fontSize: { xs: 14, md: 18 },
  },
};
function Experience() {
  return (
    <Box id="experiences" sx={styles.wrapper}>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.title}>Experiences</Typography>
        <Typography sx={{ fontSize: { xs: 16, md: 24 } }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur.
        </Typography>
        <Divider sx={styles.styledDivider} />
      </Box>

      <Box>
        <Box>
          <Typography sx={styles.expTitle}>Work Experiences</Typography>
          <Box sx={styles.expContentWrapper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <Box>
                  <Typography sx={styles.expContentSchool}>
                    School Name
                  </Typography>
                  <Typography sx={styles.expContentValue}>
                    Date Attended
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Box>
                  <Typography sx={styles.expContentCourse}>Course</Typography>
                  <Typography sx={styles.expContentValue}>
                    Additional Information skjlks kjdflkajdf lkjasdfklj saldfklj
                    sjdfkjd djf dkfj kdfjsdkf sdfjkalj dfas;dfjsalkdjf
                    sdkjfkdsjf djfkdfjk djfkd dkf
                  </Typography>
                  <Typography sx={styles.expContentLocation}>
                    Location
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={styles.expContentWrapper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <Box>
                  <Typography sx={styles.expContentSchool}>
                    School Name
                  </Typography>
                  <Typography sx={styles.expContentValue}>
                    Date Attended
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Box>
                  <Typography sx={styles.expContentCourse}>Course</Typography>
                  <Typography sx={styles.expContentValue}>
                    Additional Information skjlks kjdflkajdf lkjasdfklj saldfklj
                    sjdfkjd djf dkfj kdfjsdkf sdfjkalj dfas;dfjsalkdjf
                    sdkjfkdsjf djfkdfjk djfkd dkf
                  </Typography>
                  <Typography sx={styles.expContentLocation}>
                    Location
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Typography sx={styles.expTitle}>Educations</Typography>
          <Box sx={styles.expContentWrapper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <Box>
                  <Typography sx={styles.expContentSchool}>
                    School Name
                  </Typography>
                  <Typography sx={styles.expContentValue}>
                    Date Attended
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Box>
                  <Typography sx={styles.expContentCourse}>Course</Typography>
                  <Typography sx={styles.expContentValue}>
                    Additional Information skjlks kjdflkajdf lkjasdfklj saldfklj
                    sjdfkjd djf dkfj kdfjsdkf sdfjkalj dfas;dfjsalkdjf
                    sdkjfkdsjf djfkdfjk djfkd dkf
                  </Typography>
                  <Typography sx={styles.expContentLocation}>
                    Location
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={styles.expContentWrapper}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <Box>
                  <Typography sx={styles.expContentSchool}>
                    School Name
                  </Typography>
                  <Typography sx={styles.expContentValue}>
                    Date Attended
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Box>
                  <Typography sx={styles.expContentCourse}>Course</Typography>
                  <Typography sx={styles.expContentValue}>
                    Additional Information skjlks kjdflkajdf lkjasdfklj saldfklj
                    sjdfkjd djf dkfj kdfjsdkf sdfjkalj dfas;dfjsalkdjf
                    sdkjfkdsjf djfkdfjk djfkd dkf
                  </Typography>
                  <Typography sx={styles.expContentLocation}>
                    Location
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
