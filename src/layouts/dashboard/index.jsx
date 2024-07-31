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

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const user = useSelector((state) => state.users.user);

  const [openNav, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (user) {
      if (user.isVerified === false) {
        router.push("/verify-email");
      } else if (!user.role || user.role === null) {
        router.push("/complete-registration");
      } else {
        setLoading(false);
      }
    }
  }, [user, router]);

  if (loading) {
    return <Loader />;
  }

  console.log(user)
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

        <Main>{children}</Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
