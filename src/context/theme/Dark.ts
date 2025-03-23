import { ColorSystemOptions } from "@mui/material";
const greenPrimary = '#067c2a';
const greenDark = '#055a20';
const greenLight = '#26a856';
export const Dark: ColorSystemOptions = {
    palette: {
      mode: 'dark',
      primary: {
        main: greenPrimary,
        light: greenLight,
        dark: greenDark,
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ffffff',
      },
      background: {
        default: '#121212',
        paper: '#1a1a1a',
      },
      text: {
        primary: '#ffffff',
        secondary: '#cccccc',
      },
    },
  };

export default Dark;