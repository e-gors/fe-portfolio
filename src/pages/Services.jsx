import React from "react";
import { Helmet } from "react-helmet-async";
import ServicesView from '../modules/private/sections/services/view/ServicesView'

function Services() {
  return (
    <>
      <Helmet>
        <title>Efren Goron | Services</title>
      </Helmet>
      <ServicesView />
    </>
  );
}

export default Services;
