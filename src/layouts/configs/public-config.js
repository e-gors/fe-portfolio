import SvgColor from "../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const publicConfig = [
  {
    title: "Home",
    path: "#home",
    icon: icon("ic_outlined_home"),
  },
  {
    title: "About",
    path: "#about",
    icon: icon("ic_outlined_info"),
  },
  {
    title: "Services",
    path: "#services",
    icon: icon("ic_services"),
  },
  {
    title: "Portfolio",
    path: "#portfolio",
    icon: icon("ic_outlined_user"),
  },
  {
    title: "Testimonials",
    path: "#testimonials",
    icon: icon("ic_outlined_users_group"),
  },
  {
    title: "Contact",
    path: "#contact",
    icon: icon("ic_blog"),
  },
];

export default publicConfig;
