import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../../_mock/projects";
import { isEmpty } from "../../../utils/heplers";
import publicHttp from "../../../utils/publicHttp";
import CardSkeleton from "../../../components/CardSkeleton";

const properties = [

];

function Projects() {
  const [projectList, setProjectList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();

    fetchData(controller);
    return () => controller.abort();
  }, []);

  const fetchData = (controller) => {
    setLoading(true);
    publicHttp
      .get("projects", { signal: controller.signal })
      .then((res) => {
        setProjectList(res.data.data);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const projs = !isEmpty(projectList) ? projectList : projects;

  return (
    <Box
      id="portfolio"
      sx={{
        minHeight: `calc(100vh - 60px)`,
        height: "auto",
        overflow: "none",
        padding: { xs: "5%", md: "3% 10%" },
        backgroundColor: "#f9fafb",
      }}
    >
      <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
        <Typography variant="h3">My Projects</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Here you will find some of my projects that I developed during my past
          years of being a software developer.
        </Typography>
      </Box>
      <Box mt={2}>
        {projs?.map((project, i) =>
          loading ? (
            <CardSkeleton properties={properties} />
          ) : (
            <ProjectCard key={i} {...project} />
          )
        )}
      </Box>
    </Box>
  );
}

export default Projects;