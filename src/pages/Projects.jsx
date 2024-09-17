import React from "react";
import { Helmet } from "react-helmet-async";
import ProjectsView from "../modules/private/sections/projects/view/ProjectsView";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Efren Goron | Projects</title>
      </Helmet>
      <ProjectsView />
    </>
  );
}

export default Projects;
