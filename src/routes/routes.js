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
    path: "/resumes",
    component: "pages/Resumes",
    auth: true
  },
  {
    path: "/profile",
    component: "pages/Profile",
    auth: true
  },
  {
    path: "/services",
    component: "pages/Services",
    auth: true
  },
  {
    path: "/feedbacks",
    component: "pages/Feedbacks",
    auth: true
  },
  {
    path: "/projects",
    component: "pages/Projects",
    auth: true
  },
  {
    path: "/experiences",
    component: "pages/Experiences",
    auth: true
  },
  {
    path: "/settings",
    component: "pages/Settings",
    auth: true
  },
];

export default routes;
