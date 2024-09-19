import React from "react";
import { Helmet } from "react-helmet-async";
import ResumesView from '../modules/private/sections/resumes/view/ResumesView'

function Resumes() {
  return (
    <>
      <Helmet>
        <title>Efren Goron | Resumes</title>
      </Helmet>
      <ResumesView />
    </>
  );
}

export default Resumes;
