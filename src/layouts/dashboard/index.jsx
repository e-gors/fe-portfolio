import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";

import Nav from "./nav";
import Main from "./main";
import Header from "./header";
import { useRouter } from "../../routes/hooks";
import Loader from "../Loader";
import navConfig from "./config-navigation";
import { useSelector } from "react-redux";
import DevelopmentMode from "../../routes/DevelopmentMode";

// ----------------------------------------------------------------------

export default function DashboardLayout({ development, children }) {
  const router = useRouter();

  const theme = useSelector((state) => state.theme.theme);
  const user = useSelector((state) => state.users.user);

  const [openNav, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Nav
          navConfig={navConfig}
          openNav={openNav}
          onCloseNav={() => setOpenNav(false)}
        />

        <Main
          sx={{
            backgroundColor:
              theme === "light" ? "var(--bg_lightest)" : "var(--bg_darkest)",
          }}
        >
          {development ? <DevelopmentMode /> : children }
        </Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
