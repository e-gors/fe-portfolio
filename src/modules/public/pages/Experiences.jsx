import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ContainedButton } from "../../../components/CustomButtons";
import CustomTimeline from "../../../components/CustomTimeline";
import { experiences } from "../../../_mock/experiences";
import publicHttp from "../../../utils/publicHttp";
import { isEmpty } from "../../../utils/heplers";
import { useDispatch } from "react-redux";
import { setTotalExperiences } from "../../../redux/actions/totalsActions";

function Experiences() {
  const dispatch = useDispatch();
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
        dispatch(setTotalExperiences(res.data?.data[0]?.totalExperience));
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDownloadResume = () => {
    publicHttp
      .get("/resume/download", {
        responseType: "blob", // Receive the file as a Blob
      })
      .then((res) => {
        // Get the filename directly from the backend response (original name from database)
        const fileName = res.headers["content-disposition"]
          ? res.headers["content-disposition"]
              .split("filename=")[1]
              .replace(/['"]/g, "")
          : "resume.pdf"; // Fallback filename if header is missing (rare)

        // Create a new Blob from the response data
        const url = window.URL.createObjectURL(new Blob([res.data]));

        // Create a link element and trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName); // Use the original filename
        document.body.appendChild(link);
        link.click();

        // Cleanup: Remove the link and revoke the Object URL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error("Error downloading the resume:", err);
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
            <ContainedButton variant="contained" onClick={handleDownloadResume}>
              Download CV
            </ContainedButton>
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
