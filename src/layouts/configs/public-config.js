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
    icon: icon("ic_dashboard"),
  },
  {
    title: "Services",
    path: "#services",
    icon: icon("ic_services"),
  },
  {
    title: "About",
    path: "#about",
    icon: icon("ic_services"),
  },
  {
    title: "Blog",
    path: "#blog",
    icon: icon("ic_blog"),
  },
  {
    title: "Contact",
    path: "#contact",
    icon: icon("ic_blog"),
  },
];


export default publicConfig;
