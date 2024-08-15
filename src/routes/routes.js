const routes = [
  {
    path: "/",
    component: "pages/Homepage",
  },
  {
    path: "/login",
    component: "pages/Login",
    authentication: true
  },
  {
    path: "/dashboard",
    component: "pages/Dashboard",
    auth: true
  },
  {
    path: "/services",
    component: "pages/Services",
    auth: true
  },
];

export default routes;
