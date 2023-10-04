import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    0: "#ff4138",
    "1.0": "#ff4138",
  },
  shadowBlur: 5,
});

function Loader() {
  return <TopBarProgress />;
}

export default Loader;
