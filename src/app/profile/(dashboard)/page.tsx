'use client'
import { Button, Card, FormControl, FormLabel, Stack, TextField, Typography } from "@mui/material";
import { PageContainer } from "@toolpad/core";
import { signOut } from "next-auth/react";

const ProfileView = () => {

    const logout = () =>{
        signOut();
    }

    return (
        <PageContainer className="w-full">
            <Stack alignItems={'center'} className="w-full">
            <Card elevation={5} variant="elevation" className="p-5 w-[80vw] lg:p-10 lg:w-[20vw]" >
                    <Typography textAlign={'center'} variant="h5">Perfil</Typography>
                    <Stack gap={2}>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <TextField type="password" placeholder="********"></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Re-Password</FormLabel>
                            <TextField type="password" placeholder="********"></TextField>
                        </FormControl>
                        <Button variant="contained">Guardar cambios</Button>
                        <Button onClick={logout} variant="contained" className="!bg-red-600">Cerrar Sesion</Button>
                    </Stack>
                </Card>
            </Stack>
        </PageContainer>
    );
}

export default ProfileView;