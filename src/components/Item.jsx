import React from "react";
import style from './Item.module.css'
import { ItemCount } from "./ItemCount";

export const Item = ({image, name, price, stock, description}) => {

return (
  <div className={style.card}>
  <img src={image} alt="Denim Jeans"/>
  <h1>{name}</h1>
  <p className={style.price}> $ {price} </p>
  <p>{description}</p>
  <ItemCount stock={stock}/>
  </div>

  )

}