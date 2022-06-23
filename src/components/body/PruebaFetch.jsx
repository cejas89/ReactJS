import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export const ConexionApi = () => {
    
    const [productos, setProductos] = useState([])
    
    useEffect (()=> {
        const getProductos = () => {
            axios.get('https://api.mercadolibre.com/sites/MLA/search?q=Bastidor')
            .then(({data}) => setProductos(data.results));
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