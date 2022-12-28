const palette = {
  primary: {
    main: "#1976d2",
    light: "#63a4ff",
    dark: "#004ba0",
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    light: "#ffc947",
    main: "#ff9800",
    dark: "#c66900",
    contrastText: "#ffcc00",
  },
  custom: {
    light: "#ffa726",
    main: "#f57c00",
    dark: "#ef6c00",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
};

export default palette;
