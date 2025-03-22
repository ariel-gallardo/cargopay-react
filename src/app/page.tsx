'use client';
import {
  Box,
  Button,
  Grid2,
  List,
  ListItemText,
  Typography,
} from "@mui/material";

import OpinionJson from '@json/opinion.json';
import { useEffect, useState } from "react";
import OpinionType from "@/models/OpinionType";
import Carousel from "@/components/Carousel";
import Opinion from "@/components/Opinion";

export default function Home() {

  const [firstLoad, setFirstLoad] = useState(true);
  const [opinions, setOpinions] = useState<OpinionType[]>([])

  useEffect(() => {
    if(firstLoad){
      setOpinions(OpinionJson.map((x: OpinionType) => x))
      setFirstLoad(false);
    }
  },[])

  return (
    <Grid2 container className="text-white my-5" rowGap={2} columnSpacing={5}>
      <Grid2 size={12} className="justify-items-center">
        <Typography variant="h1" sx={{fontSize: {
          xs: '3rem',
          md: '5rem'
        }}} fontFamily={"Boldonse"}>
          <p className="my-5">Cargopay</p>
        </Typography>
        <Typography variant="h4" textAlign={"center"}>
          Tu dinero, tu control. La forma más simple de manejar tus tarjetas prepagas.
        </Typography>
        <Button>Abrí tu cuenta</Button>
      </Grid2>

      <Grid2 size={{md: 6, xs:12}} className="justify-items-end">
        <Typography className="text-center" variant="h3">¿Cómo funciona?</Typography>
        <List>
          <ListItemText>📲 Registrate y obtené tu cuenta digital.</ListItemText>
          <ListItemText>
            💳 Solicitá y gestioná múltiples tarjetas prepagas.
          </ListItemText>
          <ListItemText>
            🔄 Cargá saldo al instante y usalas donde quieras.
          </ListItemText>
          <ListItemText>
            🔐 Seguimiento y control total desde tu celular.
          </ListItemText>
        </List>
      </Grid2>

      <Grid2 size={{md: 6, xs:12}}>
        <Typography variant="h3" className="text-center">Beneficios de Cargopay</Typography>
        <List>
          <ListItemText>
            ✅ Manejo centralizado de múltiples tarjetas.
          </ListItemText>
          <ListItemText>✅ Seguridad en cada transacción.</ListItemText>
          <ListItemText>
            ✅ Ideal para familias, empleados o grupos de trabajo.
          </ListItemText>
          <ListItemText>
            ✅ Recargas simples y seguimiento en tiempo real.
          </ListItemText>
          <ListItemText>
            ✅ Compatible con compras online y presenciales.
          </ListItemText>
        </List>
      </Grid2>

      <Grid2 size={12} className="justify-items-center">
        <Typography className="text-center" variant="h3">Lo que dicen nuestros usuarios</Typography>
        <Box className="w-full md:w-[500px]">
          <Carousel>
            {opinions.map((x,i) => <Opinion key={i} {...x}></Opinion>)}
          </Carousel>
        </Box>
      </Grid2>

      <Grid2 size={12} className="justify-items-center">
        <Typography className="text-center" variant="h3">¿Querés empezar?</Typography>
        <Typography>
          Sumate hoy a la nueva forma de manejar tu dinero. Creá tu cuenta en
          minutos y descubrí todo lo que Cargopay puede ofrecerte.
        </Typography>
        <Button>Crear cuenta ahora</Button>
      </Grid2>
    </Grid2>
  );
}
