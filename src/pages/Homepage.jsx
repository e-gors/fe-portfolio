import React from "react";
import { Helmet } from "react-helmet-async";
import HomepageView from "../modules/public/pages/HomepageView";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Efren Goron | Homepage</title>
      </Helmet>
      <HomepageView />
    </>
  );
}

export default Homepage;
