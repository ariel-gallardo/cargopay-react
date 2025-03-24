'use client';
import { AppProvider, DashboardLayout } from "@toolpad/core";
import UserRoutes, { userDashboardNavigation } from '@routes/UserRoutes';
import { useAppContext } from "@/context/AppContext";
import AppTitle from "@/components/AppTitle";

interface Props{
    children: React.ReactNode
}

export default ({children}: Props) => {
    const {theme} = useAppContext();
    return (      
        <AppProvider navigation={userDashboardNavigation} theme={theme}>
        <DashboardLayout slots={{
            appTitle: AppTitle
        }}>
            {children}
        </DashboardLayout>
        </AppProvider>
    );
}