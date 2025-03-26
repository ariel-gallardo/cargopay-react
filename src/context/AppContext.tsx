'use client';
import { Theme as ThemeD, useMediaQuery } from '@mui/material';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import Navigation from '@context/Navigation';
import Theme from '@context/theme/Theme';

interface AppContextType {
  isDesktop: boolean;
  isMobile: boolean;
  isLogged: boolean;
  setLogged: (auth: boolean) => void;
  theme: ThemeD;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setLogged] = useState<boolean>(true);
  const isDesktop = useMediaQuery(Theme.breakpoints.up("md"));

  useEffect(() => {

  }, [isDesktop])

  return (
    <AppContext.Provider value={{isDesktop, isMobile:!isDesktop, isLogged, setLogged, theme: Theme }}>
      <NextAppProvider navigation={Navigation} theme={Theme}>{children}</NextAppProvider>
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext debe usarse dentro de AppProvider');
  return context;
};
