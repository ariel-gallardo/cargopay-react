import { createTheme } from "@mui/material";
import Light from "./Light";
import Dark from "./Dark";

const theme = createTheme({
    colorSchemes: {
        light: Light,
        dark: Dark
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        allVariants: {
          color: 'var(--mui-palette-text-primary)',
        },
      },
      cssVariables: true,
});

export default theme;