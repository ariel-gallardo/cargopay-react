'use client';
import { AppBar, Avatar, Grid2, Toolbar, Box, IconButton, Button, Typography, Menu, Drawer } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import AuthComponent from "./AuthComponent";
import CloseIcon from '@mui/icons-material/Close';

export default () => {

    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
         setOpenMenu(!openMenu)
    };
    const {isMobile} = useAppContext();

    useEffect(() => {
        
    },[openMenu, isMobile])

    return (
        <AppBar position="sticky" className="h-full">
            <Toolbar variant="regular" className="h-full bg-black">
                <Grid2 container columns={12} className="w-full">
                    <Grid2 size={2}>
                        <img src="/images/cargopay.svg" className="w-20" />
                    </Grid2>
                    <Grid2 size={10} className="flex justify-end gap-1">
                            <AuthComponent isAuth={true}>
                                <IconButton sx={{display: {xs: 'none',  lg:'block'}}}>
                                    <Avatar/>
                                </IconButton>
                            </AuthComponent>
                            <AuthComponent isAuth={false}>
                                <Box sx={{display: {xs: 'none', lg:'flex'}}}>
                                    <Button className="gap-1">
                                        <LoginIcon className="text-green-400"/>
                                        <Typography className="text-green-300 border-b-2">Login</Typography>
                                    </Button>
                                    <Button className="gap-1">
                                        <PersonAddIcon className="text-green-400"/>
                                        <Typography className="text-green-300 border-b-2">Register</Typography>
                                    </Button>
                                </Box>
                            </AuthComponent>
                            <Button onClick={toggleMenu} sx={{display: {xs: 'block', lg:'none'}}}>
                                    <MenuIcon className="text-green-400"/>
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
                                            <IconButton>
                                                    <Avatar/>
                                            </IconButton>
                                        </AuthComponent>
                                        <AuthComponent isAuth={false}>
                                            <Box>
                                                <Button className="w-full">
                                                    <LoginIcon className="text-green-400"/>
                                                    <Typography className="text-green-300 border-b-2">Login</Typography>
                                                </Button>
                                                <Button className="w-full" size="large">
                                                    <PersonAddIcon className="text-green-400"/>
                                                    <Typography className="text-green-300 border-b-2">Register</Typography>
                                                </Button>
                                            </Box>
                                        </AuthComponent>
                                        <Button onClick={toggleMenu}>
                                                <CloseIcon className="text-red-400"/>
                                                <Typography className="text-red-300 border-b-2">Close</Typography>
                                        </Button>
                                    </Drawer>
                            </Box>
                    </Grid2>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}