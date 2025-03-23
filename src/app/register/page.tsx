import { Card, Container, FormControl, FormLabel, Stack, TextField } from "@mui/material";
import { PageContainer } from "@toolpad/core";

export default () => {

    return (
        <PageContainer>
                <Card variant="elevation" className="p-10 w-[20vw]" >
                    <Stack gap={2}>
                        <FormControl>
                            <FormLabel>Correo</FormLabel>
                            <TextField placeholder="client@cargopay.com"></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <TextField placeholder="client@cargopay.com"></TextField>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Re-Password</FormLabel>
                            <TextField placeholder="client@cargopay.com"></TextField>
                        </FormControl>
                    </Stack>
                </Card>
        </PageContainer>
    );
}