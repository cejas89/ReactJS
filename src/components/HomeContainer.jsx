import React from "react";
import { NavBar } from "./header/NavBar";
import { ItemListContainer } from "./ItemListContainer";
import { Footer } from "./footer/Footer";

export const HomeContainer = () => {
    
    return <>
        <NavBar/>
        <ItemListContainer/>
        <Footer/>
    </>
}