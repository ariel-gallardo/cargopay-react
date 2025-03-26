import { Button, Card, FormControl, FormLabel, Stack, TextField, Typography } from "@mui/material";
import { PageContainer } from "@toolpad/core";

const RegisterView = () => {

    return (
        <PageContainer>
            <Stack alignItems={'center'}>
            <Card elevation={5} variant="elevation" className="p-5 w-[80vw] lg:p-10 lg:w-[20vw]" >
                    <Typography textAlign={'center'} variant="h5">Crear Cuenta</Typography>
                    <Stack gap={2}>
                        <FormControl>
                            <FormLabel>Correo</FormLabel>
                            <TextField placeholder="client@cargopay.com"></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <TextField type="password" placeholder="********"></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Re-Password</FormLabel>
                            <TextField type="password" placeholder="********"></TextField>
                        </FormControl>
                        <Button variant="contained">Crear Cuenta</Button>
                    </Stack>
                </Card>
            </Stack>
        </PageContainer>
    );
}

export default RegisterView;