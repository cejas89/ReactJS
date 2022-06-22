import React from "react";
import { useState, useEffect } from "react";

export const ConexionApi = () => {
    
    const [productos, setProductos] = useState([])
    
    useEffect (()=> {
        const getProductos = () => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=Bastidor')
            .then(response => response.json())
            .then((data => setProductos(data.results)));
        }

        getProductos();
    }, []);

    return (
        <ul>
            {
                productos.map((productos => (
                    <img src={productos.thumbnail} alt="imagen" /> 

                )))
     
            }
        </ul>
        )

}