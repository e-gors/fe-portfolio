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
    title: "Categories",
    path: "/categories",
    icon: icon("ic_services"),
  },
  {
    title: "services",
    path: "/services",
    icon: icon("ic_services"),
  },
  {
    title: "appointments",
    path: "/appointments",
    icon: icon("ic_calendar"),
  },
  {
    title: "users",
    path: "/users",
    icon: icon("ic_outlined_users_group"),
  },
  {
    title: "products",
    path: "/products",
    icon: icon("ic_cart"),
  },
  {
    title: "blogs",
    path: "/blogs",
    icon: icon("ic_blog"),
  },
];

export default navConfig;
