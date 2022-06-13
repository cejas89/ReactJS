import React from "react";
import { Item } from "./Item";


export const ItemList = ({products}) => {
    return (
        products.map (p =>
            <Item
            key={p.id}
            {...p}          
            />
           )
    )


}