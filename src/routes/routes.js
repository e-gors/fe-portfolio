const routes = [
  {
    path: "/",
    component: "pages/Homepage",
  },
  {
    path: "/dashboard",
    component: "pages/Dashboard",
    auth: true
  }
];

export default routes;
