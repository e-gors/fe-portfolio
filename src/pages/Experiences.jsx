import React from "react";
import { Helmet } from "react-helmet-async";
import ExperiencesView from "../modules/private/sections/experiences/view/ExperiencesView";

function Experiences() {
  return (
    <>
      <Helmet>
        <title>Efren Goron | Experiences</title>
      </Helmet>
      <ExperiencesView />
    </>
  );
}

export default Experiences;
