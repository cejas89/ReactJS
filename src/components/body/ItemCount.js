import React, { useState } from "react";


export const ItemsCounts = (props) => {

const {stock} = props;
const [count, setCount] = useState (0);

const decrement = () => {

    if (count < 0) {
        setCount(count - 1)
    }
}


const increment = () => {

    if (count < stock) {
        setCount (count + 1)
    }

}

return <>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>

</>



}