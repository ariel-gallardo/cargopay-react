import { AppBar, Avatar, Grid2, Toolbar, Box, IconButton, Button, Typography, Collapse } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useEffect, useState } from "react";
export default () => {

    const [isLogged, setLogged] = useState(false);

    useEffect(() => {
        
    },[isLogged]);

    return (
        <AppBar position="sticky" className="h-full">
            <Toolbar variant="regular" className="h-full bg-black">
                <Grid2 container columns={12} className="w-full">
                    <Grid2 size={2}>
                        <img src="/images/cargopay.svg" className="w-20" />
                    </Grid2>
                    <Grid2 size={10} className="flex justify-end gap-1">
                        {
                            isLogged ?
                            <IconButton>
                                <Avatar/>
                            </IconButton>
                            :
                            <></>
                        }
                        {
                            isLogged ? <></>
                            :
                            <>
                                <Button className="gap-1">
                                    <LoginIcon className="text-green-400"/>
                                    <Typography className="text-green-300 border-b-2">Login</Typography>
                                </Button>
                                <Button className="gap-1">
                                    <PersonAddIcon className="text-green-400"/>
                                    <Typography className="text-green-300 border-b-2">Register</Typography>
                                </Button>
                            </>
                        }
                    </Grid2>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}