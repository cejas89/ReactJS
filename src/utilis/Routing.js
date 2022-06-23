import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeContainer } from "../components/HomeContainer";
import { ItemsContainer } from "../components/ItemsContainer";

export const AppRouting = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element= {<HomeContainer/>}></Route>
            <Route path="/productos" element= {<ItemsContainer/>}></Route>
        </Routes>
    
    
    
    </BrowserRouter>
}