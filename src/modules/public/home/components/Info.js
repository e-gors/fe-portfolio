import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const styles = {
  wrapper: {
    minHeight: "100vh",
    mt: { xs: 5, md: 0 },
  },
  contentWrapper: {
    p: { xs: "7px 20px", md: "37px 100px", lg: "75px 200px" },
  },
  leftWrapper: {
    backgroundColor: "#9466eaff",
    p: { xs: 5, md: 5 },
    borderRadius: 5,
  },
  leftTextWrapper: {
    mb: 2,
    color: "white",
  },
  leftTextTitle: {
    fontSize: { xs: 14, md: 18 },
  },
  leftTextValue: {
    fontSize: { xs: 14, md: 18 },
    fontWeight: "bold",
  },
  link: {
    color: "white",
    textDecoration: "underline white",
  },
  icon: {
    mr: 1,
    p: 1,
    fontSize: 40,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#605d8cff",
      borderRadius: "50%",
    },
  },
  rightWrapper: {},
  rightTextTitle: {
    fontSize: { xs: 20, sm: 25, md: 30 },
    color: "#9466eaff",
    textTransform: "uppercase",
  },
  rightTextValue: {
    fontSize: { xs: 40, sm: 60, md: 80 },
    color: "#fc94af",
    fontWeight: "bold",
  },
  download: {
    backgroundColor: "#fc94af",
    transition: "0.5s",
    mt: 2,

    "&:hover": {
      backgroundColor: "#9466ea",
    },
  },
};

function Info() {
  return (
    <Box id="my-info" sx={styles.wrapper}>
      <Box sx={styles.contentWrapper}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Box sx={styles.leftWrapper}>
              <Box sx={styles.leftTextWrapper}>
                <Typography sx={styles.leftTextTitle}>Name</Typography>
                <Typography sx={styles.leftTextValue}>Efren Goron</Typography>
              </Box>
              <Box sx={styles.leftTextWrapper}>
                <Typography sx={styles.leftTextTitle}>Birthday</Typography>
                <Typography sx={styles.leftTextValue}>
                  April 30, 2000
                </Typography>
              </Box>
              <Box sx={styles.leftTextWrapper}>
                <Typography sx={styles.leftTextTitle}>Role</Typography>
                <Typography sx={styles.leftTextValue}>
                  Junior Web Developer
                </Typography>
              </Box>
              <Box sx={styles.leftTextWrapper}>
                <Typography sx={styles.leftTextTitle}>Email</Typography>
                <Typography sx={styles.leftTextValue}>
                  goronefren@gmail.com
                </Typography>
              </Box>
              <Box sx={styles.leftTextWrapper}>
                <Typography sx={styles.leftTextTitle}>Phone</Typography>
                <Typography sx={styles.leftTextValue}>
                  (+63) 905 417 0203
                </Typography>
              </Box>
              <Box sx={styles.leftTextWrapper}>
                <Typography sx={styles.leftTextTitle}>Website</Typography>
                <Link
                  href=" www.website.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={[styles.leftTextValue, styles.link]}
                >
                  www.website.com
                </Link>
              </Box>
              <Box sx={styles.leftTextWrapper}>
                <Typography sx={styles.leftTextTitle}>Location</Typography>
                <Typography sx={styles.leftTextValue}>
                  Hilongos, Leyte, Philippines
                </Typography>
              </Box>
              <Box sx={styles.leftTextWrapper}>
                <Typography sx={styles.leftTextTitle}>Interest</Typography>
                <Typography sx={styles.leftTextValue}>
                  Games, Books, Movies, Eating
                </Typography>
              </Box>
              <Box component="div" sx={styles.leftTextWrapper}>
                <Typography sx={styles.leftTextTitle}>Social</Typography>
                <FacebookIcon sx={styles.icon} />
                <TwitterIcon sx={styles.icon} />
                <InstagramIcon sx={styles.icon} />
                <YouTubeIcon sx={styles.icon} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Box sx={{ textAlign: "center" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <Box>
                      <Typography sx={styles.rightTextTitle}>Awards</Typography>
                      <Typography sx={styles.rightTextValue}>17</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Box>
                      <Typography sx={styles.rightTextTitle}>
                        Xp Years
                      </Typography>
                      <Typography sx={styles.rightTextValue}>15+</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Box>
                      <Typography sx={styles.rightTextTitle}>
                        Clients
                      </Typography>
                      <Typography sx={styles.rightTextValue}>108</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Box>
                      <Typography sx={styles.rightTextTitle}>
                        Projects
                      </Typography>
                      <Typography sx={styles.rightTextValue}>150</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  mb: 2,
                  mt: { xs: 5, md: 0 },
                  fontSize: { xs: 18, md: 24 },
                  fontWeight: "bold",
                }}
              >
                Nam ultrices ultrices nec tortor pulvinar esteras loremips est
              </Typography>
              <Typography>
                Etiam erat velit scelerisque in dictum non consectetur. Nisl
                purus in mollis nunc sed id semper. Cras fermentum odio eu
                feugiat pretium nibh ipsum. Tristique senectus et netus et
                malesuada fames. Sem fringilla ut morbi tincidunt augue interdum
                velit. Nunc sed blandit libero volutpat sed cras. Risus quis
                varius quam quisque id. Semper auctor neque vitae tempus quam
                pellentesque nec nam aliquam.
              </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={styles.download}
                endIcon={<DownloadIcon />}
              >
                Download CV
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Info;
