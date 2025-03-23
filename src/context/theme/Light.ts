import { ColorSystemOptions } from "@mui/material";
const greenPrimary = '#067c2a';
const greenDark = '#055a20';
const greenLight = '#26a856';
export const Light: ColorSystemOptions = {
    palette: {
      mode: 'light',
      primary: {
        main: greenPrimary,
        light: greenLight,
        dark: greenDark,
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#000000',
      },
      background: {
        default: '#ffffff',
        paper: '#f0f0f0',
      },
      text: {
        primary: '#000000',
        secondary: '#333333',
      },
    },
  };

export default Light;