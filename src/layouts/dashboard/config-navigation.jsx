import SvgColor from "../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard",
    icon: icon("ic_dashboard"),
  },
  {
    title: "profile",
    path: "/profile",
    icon: icon("ic_profile"),
  },
  {
    title: "services",
    path: "/services",
    icon: icon("ic_services"),
  },
  {
    title: "feedbacks",
    path: "/feedbacks",
    icon: icon("ic_outlined_users_group"),
  },
  {
    title: "projects",
    path: "/projects",
    icon: icon("ic_blog"),
  },
  {
    title: "experiences",
    path: "/experiences",
    icon: icon("ic_web_development"),
  },
  {
    title: "settings",
    path: "/settings",
    icon: icon("ic_adjustment"),
  },
];

export default navConfig;
