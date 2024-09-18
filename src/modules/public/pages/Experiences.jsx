import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ContainedButton } from "../../../components/CustomButtons";
import CustomTimeline from "../../../components/CustomTimeline";
import { experiences } from "../../../_mock/experiences";
import publicHttp from "../../../utils/publicHttp";
import { isEmpty } from "../../../utils/heplers";

function Experiences() {
  const [expList, setExpList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();

    fetchData(controller);
    return () => controller.abort();
  }, []);

  const fetchData = (controller) => {
    setLoading(true);
    publicHttp
      .get("experiences", { signal: controller.signal })
      .then((res) => {
        setExpList(res.data.data);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const exps = !isEmpty(expList) ? expList : experiences;

  return (
    <Box
      sx={{
        height: "auto",
        overflow: "none",
        padding: { xs: "5%", md: "3% 10%" },
        backgroundColor: "white",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h3" gutterBottom>
              My Experiences
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              I have had the pleasure to work with companies across a variety of
              industries. I’m always interested in new, exciting, and
              challenging adventures.
            </Typography>
            <ContainedButton variant="contained">Download CV</ContainedButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <CustomTimeline
            experiences={exps}
            position="right"
            loading={loading}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experiences;
