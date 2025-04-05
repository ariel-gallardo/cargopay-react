'use client';
import { Theme as ThemeD, useMediaQuery } from '@mui/material';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import Navigation from '@context/Navigation';
import Theme from '@context/theme/Theme';
import { useSession } from 'next-auth/react';
import { Subject } from 'rxjs';
import ErrorChannel from '@/models/Channel/ErrorChannelType';
import SuccessChannel from '@/models/Channel/SuccessChannelType';

interface AppContextType {
  isDesktop: boolean;
  isMobile: boolean;
  isLogged: boolean;
  setLogged: (auth: boolean) => void;
  theme: ThemeD;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status} = useSession();
  const [isLogged, setLogged] = useState<boolean>(!!session?.user);
  const isDesktop = useMediaQuery(Theme.breakpoints.up("md"));

  useEffect(() => {
    if (!!session?.user != isLogged) setLogged(!!session?.user);
  }, [isDesktop, session, status])

  return (
    <AppContext.Provider value={{ isDesktop, isMobile: !isDesktop, isLogged, setLogged, theme: Theme}}>
      <NextAppProvider navigation={Navigation} theme={Theme}>{children}</NextAppProvider>
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext debe usarse dentro de AppProvider');
  return context;
};
