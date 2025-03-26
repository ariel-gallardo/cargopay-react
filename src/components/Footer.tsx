import { Stack } from "@mui/material";
import Image from "next/image";

const FooterComponent = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 text-center md:flex justify-between">
      <div className="md:flex">
        <p>© {year} CargoPay™.</p>
        <p>Todos los derechos reservados.</p>
      </div>
      <Stack direction={"row"} spacing={1} className="justify-center">
        <Image key={"whatsapp"} width={30} height={1} src={'/images/Whatsapp.svg'} alt="whatsapp"/>
        <Image key={"gmail"} width={30} height={1} src={'/images/Gmail.svg'} alt="gmail"/>
        <Image key={"discord"} width={30} height={1} src={'/images/Discord.svg'} alt="discord"/>
        <Image key={"linkedin"} width={30} height={1} src={'/images/LinkedIn.svg'} alt="linkedin"/>
      </Stack>
    </footer>
  );
};

export default FooterComponent;