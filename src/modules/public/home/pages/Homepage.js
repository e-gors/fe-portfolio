import React from "react";
import Home from "../components/Home";
import Info from "../components/Info";
import Experience from "../components/Experience";
import Testimonial from "../components/Testimonial";
import Expertise from "../components/Expertise";
import Blog from "../components/Blog";
function Homepage() {
  return (
    <>
      <Home />
      <Info />
      <Experience />
      <Expertise />
      <Testimonial />
      <Blog />
    </>
  );
}

export default Homepage;
