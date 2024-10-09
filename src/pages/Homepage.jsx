import React from "react";
import { Helmet } from "react-helmet-async";
import HomepageView from "../modules/public/pages/HomepageView";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Efren Goron | Homepage</title>
        <meta property="og:title" content="Efren Goron - Personal Portfolio" />
        <meta
          property="og:image"
          content="/assets/logo/logo-with-name-white.png"
        />
        <meta
          property="og:url"
          content="https://fe-portfolio-15c6f17a27da.herokuapp.com/"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <HomepageView />
    </>
  );
}

export default Homepage;
