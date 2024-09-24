import { IconButton, TableCell } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import "./counterbtn.css";

const Counter = (props) => {

  const handleIncrement = (id) => {
    props.setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    props.setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  return (
    <div style={{ width: "200px", }}>
      <div align="center" className="counter-btn" style={{...props.style}}>
        <IconButton
          style={{ marginRight: "25px", color: "#555",background:"",height:"30px",width:"30px" }}
          onClick={() => handleDecrement(props.itemid)}
          aria-label="decrease quantity"
        >
          <RemoveIcon />
        </IconButton>
        <span style={{ fontSize: "17px", fontWeight: "600",marginTop:"5px" }}>{props.itemqty}</span>
        <IconButton
          style={{ marginLeft: "20px", color: "#555",height:"30px",width:"30px" }}
          onClick={() => handleIncrement(props.itemid)}
          aria-label="increase quantity"
        >
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Counter;
