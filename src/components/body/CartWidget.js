import React from "react";
import './CartWidget.css';


export const Body = () => {

    return (
        <body>

        <section>

      <CartWidget
      titulo = {"Producto 1"}
      subtitulo = {"este es una card"}
      descripcion = {"lorem"}
      precio = "$1542"/>

      <CartWidget
      titulo = {"Producto 2"}
      subtitulo = {"este es otra card"}
      descripcion = {"lorem"}
      precio = "$402"/>

      <CartWidget
      titulo = {"Producto 3"}
      subtitulo = {"este es otra card"}
      descripcion = {"lorem"}
      precio = "$256"/>
      
            </section>
            
        </body>
    )



}

const CartWidget = (props) => {

    const {titulo, subtitulo, descripcion, precio} = props;


    return (
        <div className="cardContainer">
         <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <p>{descripcion}</p>
        <span>{precio}</span>
        </div>
    
    )
}