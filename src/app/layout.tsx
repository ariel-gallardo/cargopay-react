"use client";
import "./globals.css";
import { Grid2 } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Grid2 container columns={16} height={'100vh'}>
          <Grid2 size={16}></Grid2>
          <Grid2 size={16} height={'80vh'} className="bg-blue-200">{children}</Grid2>
          <Grid2 size={16}></Grid2>
        </Grid2>
      </body>
    </html>
  );
}
