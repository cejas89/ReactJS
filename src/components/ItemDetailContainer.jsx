import React from "react";


const ItemDetail = ({thumbnail, title, price, stock, description, rating}) => {


    return (
        <div className={style.card}>
        <img src={thumbnail} alt="Denim Jeans"/>
        <h1>{title}</h1>
        <p className={style.price}> $ {price} </p>
        <p>{description}</p>
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={rating} readOnly />
       
        </div>
      
        )
}