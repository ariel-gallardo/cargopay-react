import OpinionType from "@/models/OpinionType";
import { Avatar, Box, Paper, Rating, Stack, Typography } from "@mui/material";


const Opinion : React.FC<OpinionType> = (data: OpinionType) => {
    return (
        <Paper className="flex-none p-3 w-full">
            <Stack spacing={1} direction={"row"}>
            <Box>
                <Avatar className="m-auto">{data.name}</Avatar>
                <Rating defaultValue={data.rate}/>
            </Box>
            <Typography color="secondary" className="m-auto">{data.description}</Typography>
            </Stack>
        </Paper>
    );
}

export default Opinion;