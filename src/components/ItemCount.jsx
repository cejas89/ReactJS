import React from "react";
import { useState } from "react";
import "./ItemCount.css";
import Button from "@mui/material/Button";

export const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <Button variant="outlined" color="error" onClick={decrement}>
        -
      </Button>
      <span>{count}</span>
      <Button variant="contained" color="success" onClick={increment}>
        +
      </Button>
    </div>
  );
};
