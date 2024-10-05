import PropTypes from "prop-types";
import { forwardRef } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { RouterLink } from "../../routes/components";
// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  // OR using local (public folder)
  // -------------------------------------------------------
  const logo = (
    <Box
      component="img"
      src={"/assets/logo/logo-with-name-black.png"}
      alt="Bookease Logo"
      sx={{ width: 75, cursor: "pointer", ...sx }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
