import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ContainedButton } from "../../../components/CustomButtons";
import CustomTimeline from "../../../components/CustomTimeline";
import { experiences } from "../../../_mock/experiences";
import publicHttp from "../../../utils/publicHttp";
import { isEmpty } from "../../../utils/heplers";
import { useDispatch, useSelector } from "react-redux";
import { setTotalExperiences } from "../../../redux/actions/totalsActions";
import { options, ToastNotification } from "../../../utils/toastConfig";

function Experiences() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const [expList, setExpList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

    fetchExperiences(controller);

    return () => {
      clearTimeout(timeoutId); // Clear timeout if the component unmounts before it finishes
      controller.abort(); // Clean up and abort the request
    };
  }, []);

  const fetchExperiences = (controller) => {
    setLoading(true);
    publicHttp
      .get("experiences", { signal: controller.signal })
      .then((res) => {
        setExpList(res.data.data);
        dispatch(setTotalExperiences(res.data?.data[0]?.totalExperience));
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          ToastNotification(
            "error",
            "Request was aborted due to timeout.",
            options
          );
        } else {
          console.error(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // when click, download the latest uploaded resume
  const handleDownloadResume = () => {
    publicHttp
      .get("/resume/download", {
        responseType: "blob", // Receive the file as a Blob
      })
      .then((res) => {
        // Extract the filename from the content-disposition header if available
        const disposition = res.headers["content-disposition"];
        let fileName = "Goron, Efren - Resume.docx"; // Default filename

        if (disposition) {
          const filenameMatch = disposition.match(/filename[^;=\n]*=(.*)/);
          if (filenameMatch && filenameMatch[1]) {
            fileName = filenameMatch[1].replace(/['"]/g, "").trim(); // Clean up the filename
          }
        }

        // Create a new Blob from the response data
        const url = window.URL.createObjectURL(new Blob([res.data]));

        // Create a link element and trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName); // Use the extracted or default filename
        document.body.appendChild(link);

        // Triger download
        link.click();

        // Cleanup: Remove the link and revoke the Object URL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        ToastNotification(
          "error",
          err?.response?.statusText ?? err.message,
          options
        );
      });
  };

  const exps = !isEmpty(expList) ? expList : experiences;

  return (
    <Box
      component="section"
      sx={{
        height: "auto",
        overflow: "none",
        padding: { xs: "5%", md: "3% 10%" },
        backgroundColor:
          theme === "light" ? "var(--bg_lightest)" : "var(--bg_darkest)",
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
