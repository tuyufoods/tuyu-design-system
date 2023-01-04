import React from "react";
import { ThemeProvider } from "@tuyufoods/web-ui";

export const withTheme = (storyFn) => (
  <ThemeProvider>{storyFn()}</ThemeProvider>
);
