import React from "react";
import { useState } from "react";
import './ItemCount.css'

export const ItemCount = ({stock}) => {
    const [count, setCount ] = useState (0)

    function increment () {
        if (count < stock) {
            setCount(count+1)
        }
    }

    function decrement () {
        if (count > 0) {
            setCount (count - 1)
        }
    }
    
    return (
        <div>
            <button className="button button3" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="button" onClick={increment}>+</button>
        </div>
    )

}