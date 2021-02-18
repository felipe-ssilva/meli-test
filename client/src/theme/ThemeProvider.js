import React from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "./default";

export default function({ children, theme }) {
  return (
    <ThemeProvider theme={theme || defaultTheme}>
      {children}
    </ThemeProvider>
  );
}
