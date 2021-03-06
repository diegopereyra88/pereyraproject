import React from "react";
import { ThemeProvider, useTheme } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
}

const theme = createMuiTheme();

export default function ThemeHelper() {
  return (
    <ThemeProvider theme={theme}>
      <MyComponent />
    </ThemeProvider>
  );
}
