'use client';
import { AppBar, Avatar, Grid2, Toolbar, Box, IconButton, Button, Typography, Menu, Drawer } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import AuthComponent from "./AuthComponent";
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/navigation";

export default () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
         setOpenMenu(!openMenu)
    };
    const {isMobile} = useAppContext();
    const router = useRouter();

    const goToRegisterSite = () =>{
        router.push('/register');
    }

    const goToLoginSite = () =>{
        router.push('/login');
    }

    const goToProfileSite = () =>{
        router.push('/profile');
    }

    const goToHomeSite = () =>{
        router.push('/');
    }

    useEffect(() => {
        
    },[openMenu, isMobile])

    return (
        <AppBar position="sticky" sx={{zIndex: (theme) => theme.zIndex.drawer +2}}>
            <Toolbar variant="regular" className="h-full">
                <Grid2 container columns={12} className="w-full">
                    <Grid2 size={2}>
                        <img src="/images/cargopay.svg" className="w-20" onClick={goToHomeSite} />
                    </Grid2>
                    <Grid2 size={10} className="flex justify-end gap-1">
                            <AuthComponent isAuth={true}>
                                <IconButton onClick={goToProfileSite} color="secondary" sx={{display: {xs: 'none',  lg:'block'}}}>
                                    <Avatar color="secondary"/>
                                </IconButton>
                            </AuthComponent>
                            <AuthComponent isAuth={false}>
                                <Box sx={{display: {xs: 'none', lg:'flex'}}}>
                                    <Button className="gap-1" color="secondary" onClick={goToLoginSite}>
                                        <LoginIcon/>
                                        <Typography color="secondary" className="border-b-2">Login</Typography>
                                    </Button>
                                    <Button className="gap-1" color="secondary" onClick={goToRegisterSite}>
                                        <PersonAddIcon/>
                                        <Typography color="secondary" className="border-b-2">Register</Typography>
                                    </Button>
                                </Box>
                            </AuthComponent>
                            <Button color="secondary" onClick={toggleMenu} sx={{display: {xs: 'block', lg:'none'}}}>
                                    <MenuIcon/>
                            </Button>
                            <Box sx={{display: {xs: 'block', lg:'none'}}}>
                            <Drawer open={openMenu} onClose={toggleMenu} sx={
                                            {
                                                display: {lg: 'none'},
                                                '& .MuiDrawer-paper': {
                                                    width: '70vw',
                                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                                    padding: '20px',
                                                }
                                            }
                                        }>
                                        <AuthComponent>
                                            <IconButton color="secondary" onClick={goToProfileSite}>
                                                    <Avatar color="secondary"/>
                                            </IconButton>
                                        </AuthComponent>
                                        <AuthComponent isAuth={false}>
                                            <Box>
                                                <Button className="w-full" color="secondary" onClick={goToLoginSite}>
                                                    <LoginIcon/>
                                                    <Typography color="secondary" className="border-b-2">Login</Typography>
                                                </Button>
                                                <Button color="secondary" className="w-full" size="large" onClick={goToRegisterSite}>
                                                    <PersonAddIcon/>
                                                    <Typography color="secondary" className="border-b-2">Register</Typography>
                                                </Button>
                                            </Box>
                                        </AuthComponent>
                                        <Button onClick={toggleMenu} color="secondary">
                                                <CloseIcon className="text-red-700"/>
                                                <Typography color="error" className=" border-b-2">Close</Typography>
                                        </Button>
                                    </Drawer>
                            </Box>
                    </Grid2>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}