import React from "react";
import { Helmet } from "react-helmet-async";
import DashboardView from '../modules/private/dashboard/view/DashboardView'

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Efren Goron | Dashboard</title>
      </Helmet>
      <DashboardView />
    </>
  );
}

export default Dashboard;
