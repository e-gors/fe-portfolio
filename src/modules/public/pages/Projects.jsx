import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../../_mock/projects";
import { isEmpty } from "../../../utils/heplers";
import publicHttp from "../../../utils/publicHttp";
import CardSkeleton from "../../../components/CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocalPercent,
  setTotalProjects,
  setWorldwidePercent,
} from "../../../redux/actions/totalsActions";
import { options, ToastNotification } from "../../../utils/toastConfig";

const properties = [
  {
    variant: "text",
    width: 50,
    height: 10,
  },
  {
    variant: "text",
    width: 100,
    height: 10,
  },
  {
    variant: "h1",
  },
  {
    variant: "rounded",
    width: 200,
    height: 30,
  },
];

function Projects() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const [projectList, setProjectList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

    fetchProjects(controller);

    return () => {
      clearTimeout(timeoutId); // Clear timeout if the component unmounts before it finishes
      controller.abort(); // Clean up and abort the request
    };
  }, []);

  const fetchProjects = (controller) => {
    setLoading(true);
    publicHttp
      .get("projects", { signal: controller.signal })
      .then((res) => {
        setProjectList(res.data.data);
        dispatch(setTotalProjects(res.data?.data[0]?.totalProjects));
        dispatch(setLocalPercent(res.data?.data[0]?.local));
        dispatch(setWorldwidePercent(res.data?.data[0]?.worldwide));
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

  const projs = !isEmpty(projectList) ? projectList : projects;

  return (
    <Box
      component="section"
      id="portfolio"
      sx={{
        minHeight: `calc(100vh - 60px)`,
        height: "auto",
        overflow: "none",
        padding: { xs: "5%", md: "3% 10%" },
        backgroundColor:
          theme === "light" ? "var(--bg_white)" : "var(--bg_black)",
      }}
    >
      <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
        <Typography variant="h3" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Here you will find some of my projects that I developed during my past
          years of being a software developer.
        </Typography>
      </Box>
      <Box mt={2}>
        {projs?.map((project, i) =>
          loading ? (
            <CardSkeleton key={i} properties={properties} />
          ) : (
            <ProjectCard key={i} {...project} />
          )
        )}
      </Box>
    </Box>
  );
}

export default Projects;
