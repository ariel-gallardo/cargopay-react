"use client";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid2 } from "@mui/material";
import NavBar from "@components/NavBar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>
      <CssBaseline>
        <Grid2 container columns={16} height={'100vh'}>
          <Grid2 size={16}>
            <NavBar/>
          </Grid2>
          <Grid2 size={16} height={'80vh'} className="bg-blue-200">{children}</Grid2>
          <Grid2 size={16}></Grid2>
        </Grid2>
        </CssBaseline>
      </body>
    </html>
  );
}
