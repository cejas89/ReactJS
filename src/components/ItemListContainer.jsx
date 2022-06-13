import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import products from "../utilis/products";
import customFetch from "../utilis/customFetch";
import { ItemList } from "./ItemList";
import style from './ItemList.module.css'

export const ItemListContainer = () => {
const [items, setItems] = useState([]);

useEffect(()=>{
    customFetch(3000, products)
    .then(resp => setItems(resp))
},[items])

return (
    <div className={style.container}>
       {
        items?.length <= 0 ? <h1>Loading......</h1> : <ItemList products={items}/>
       }
        
    </div>
)

}