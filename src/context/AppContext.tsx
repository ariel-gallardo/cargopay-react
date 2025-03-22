'use client';
import { useMediaQuery, useTheme } from '@mui/material';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import Navigation from '@context/Navigation';

interface AppContextType {
  isDesktop: boolean;
  isMobile: boolean;
  isLogged: boolean;
  setLogged: (auth: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setLogged] = useState<boolean>(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {

  }, [isDesktop])

  return (
    <AppContext.Provider value={{isDesktop, isMobile:!isDesktop, isLogged, setLogged }}>
      <NextAppProvider navigation={Navigation}>{children}</NextAppProvider>
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext debe usarse dentro de AppProvider');
  return context;
};
