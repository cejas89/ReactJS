import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "./ItemList";
import axios from "axios";
import style from './ItemList.module.css'
import { CircularProgress } from "@mui/material";

export const ItemListContainer = () => {
const [items, setItems] = useState([]);

const limitSearch = 3;


useEffect (()=> {
    setTimeout(() => {

        const getItems = () => {
            axios.get('https://api.mercadolibre.com/sites/MLA/search?q=Bastidor')
            .then(({data}) => setItems(data.results.slice(0, limitSearch)));
        }        
        getItems();
    }, 2000);

    


}, []);

return (
    <div className={style.container}>
       {
        items?.length <= 0 ? <CircularProgress /> : <ItemList products={items}/>
       }
        
    </div>
)

}