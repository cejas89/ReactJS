import React from "react";

export const getProductos = () => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=11')
            .then((response => response.json))
            .then((data => console.log(data)))
        }
