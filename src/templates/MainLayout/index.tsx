import { Children, type ReactNode } from "react";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navagate from "../../components/Navagate";

type MainLayoutProps = {
    children:ReactNode;
}

export default function MainLayout ({children}:MainLayoutProps) {
    return (
       <>
        <Heading/>
        <Navagate/>
        <main>{children}</main>
        <Footer/>
       </> 
    )
}