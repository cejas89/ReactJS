import React from "react";
import style from './Item.module.css'
import { ItemCount } from "./ItemCount";
import { Typography, Rating } from "@mui/material";

export const Item = ({thumbnail, title, price, stock, description, rating}) => {

return (
  <div className={style.card}>
  <img src={thumbnail} alt="Denim Jeans"/>
  <h1>{title}</h1>
  <p className={style.price}> $ {price} </p>
  <p>{description}</p>
  <Typography component="legend">Read only</Typography>
  <Rating name="read-only" value={rating} readOnly />
  <ItemCount stock={stock}/>
  </div>

  )

}