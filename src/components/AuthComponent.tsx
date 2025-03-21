'use client';
import { useAppContext } from "@/context/AppContext";
import { ReactNode, useEffect } from "react";

class Props {
  children: ReactNode;
  isAuth?: Boolean = true;
}

const AuthComponent: React.FC<Props> = ({ children, isAuth = true }) => {
  const {isLogged} = useAppContext();
  useEffect(() => {

  },[isLogged])
  return isAuth && isLogged || !isAuth && !isLogged ? <>{children}</> : <></>;
};

export default AuthComponent;
