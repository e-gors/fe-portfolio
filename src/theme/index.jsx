import { useMemo } from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import { palette } from "./palette";
import { shadows } from "./shadows";
import { overrides } from "./overrides";
import { typography } from "./typography";
import { customShadows } from "./custom-shadows";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const mode = useSelector((state) => state.theme.theme);

  const memoizedValue = useMemo(
    () => ({
      palette: palette(mode),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    [mode]
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
