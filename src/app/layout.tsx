"use client";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "@components/NavBar";
import { AppProvider } from "@/context/AppContext";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Main from "@/components/Main";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoad(true);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col">
        {!load ? (
          <></>
        ) : (
            <AppProvider>
            <CssBaseline>
              <NavBar />
              <Main>
                  {children}
              </Main>
              <Footer />
            </CssBaseline>
            </AppProvider>
        )}
      </body>
    </html>
  );
}
