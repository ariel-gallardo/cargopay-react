import { ReactNode } from "react";

interface Props{
    children: ReactNode
}

const Main : React.FC<Props> = ({children})  => {
    
    return (
        <main className="flex-1 bg-[rgba(0,0,0,0.5)]">{children}</main>
    );
}

export default Main;