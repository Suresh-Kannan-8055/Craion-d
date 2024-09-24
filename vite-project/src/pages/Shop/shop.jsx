import React, { useState } from "react";
import InputBox from "../../components/input/inputBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import LinearScaleRoundedIcon from "@mui/icons-material/LinearScaleRounded";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./shop.css";
import Counter from "../../components/input/counterinput";
import PAYMENTSUMMARY from "../../components/homerightcard/paymentsummary";
import CATALOG from "../../components/homerightcard/catalog";
import Variants from "../../components/homerightcard/variants";

function Shop({ isCollapsed, setIsCollapsed }) {
  const [orderId, setOrderId] = useState(1);
  const [selectedCard, setSelectedCard] = useState(0);
  const [RigthCard, setRigthCard] = useState(true);
  const [Catalog, setCatalog] = useState(true);

  const [items, setItems] = useState([]);
  const addItemToCart = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, { ...item }];
    });
  };


  const calculateTotal = () => {
    return items.reduce(
      (total, item) =>
        total + item.quantity * item.total_price + item.quantity * 10,
      0
    );
  };
  const TaxTotal = () => {
    return items.reduce(
      (total, item) => total + item.quantity * item.total_price,
      0
    );
  };
  const Tax = () => {
    return items.reduce((total, item) => total + item.quantity * 10, 0);
  };

  const handleIncrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="home-card">
      <div
        className="left-cards"
        style={{ width: !isCollapsed ? "58%" : "63%" }}
      >
        <div className="head-search">
          <InputBox
            placeholder="Search ..."
            onSearchClick={() => console.log("Finding directions...")}
            icon={<SearchIcon />}
            style={{
              width: "92%",
              height: "45px",
              margin: "auto 0",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          />
          <button
            onClick={() => {
              setRigthCard(false);
            }}
            style={{
              background: !RigthCard ? "#2b85fb" : "#fff",
              cursor: "pointer",
            }}
          >
            <MenuBookIcon
              style={{
                fontSize: "25px",
                color: !RigthCard ? "#fff" : "#2b85fb",
                cursor: "pointer",
              }}
            />
          </button>
        </div>

        <div className="card-summary">
          <div className="card-cost">
            <h3 style={{ fontWeight: "800" }}>Cart summary</h3>
            <p>
              Order ID:{" "}
              <span style={{ color: "#000", fontWeight: "600" }}>
                {orderId.toString().padStart(6, "0")}
              </span>
            </p>
          </div>

          <div className="card-menu">
            <button>
              <LinearScaleRoundedIcon
                style={{
                  fontSize: "23px",
                  color: "#444",
                  transform: "rotate(-90deg)",
                }}
              />
            </button>
            <button>
              <TableRestaurantOutlinedIcon
                style={{ fontSize: "25px", color: "#444", fontWeight: "100" }}
              />
            </button>
            <button>
              <MoreVertRoundedIcon
                style={{ fontSize: "23px", color: "#444" }}
              />
            </button>
          </div>
        </div>
        <div className="table-head">
          <div style={{ marginLeft: "10px" }}>Item</div>
          <div style={{ marginLeft: "320px" }}>Qty</div>
          <div style={{ marginRight: "80px" }}>Amount (SAR)</div>
        </div>
        {items.length > 0 ? (
          <div
            style={{ overflowY: "scroll", height: "500px" }}
            className="scroll-container"
          >
            <TableContainer component={Paper}>
              <Table aria-label="cart items">
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="item-name">
                        <Typography className="name">{item.name}</Typography>
                        <Typography
                          className="description"
                          color="textSecondary"
                        >
                          {item.variant}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Counter
                          itemid={item.id}
                          itemqty={item.quantity}
                          setItems={setItems}
                          style={{ marginLeft: "70px" }}
                        />
                      </TableCell>
                      <TableCell
                        align="left"
                        className="price-display"
                        style={{ fontSize: "16px", fontWeight: "900" }}
                      >
                        {Number(item.quantity * item.total_price).toFixed(2)}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={() => handleDelete(item.id)}
                          aria-label="delete"
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <>
            <div
              style={{
                height: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "center", lineHeight: "15px" }}>
                <img
                  src="/shopping-cart.png"
                  alt="No Cart"
                  style={{ marginBottom: "10px" }}
                />
                <h3>Cart is empty</h3>
                <p style={{ color: "#888" }}>
                  Scan barcode or add items from catalog
                </p>
              </div>
            </div>
          </>
        )}
        {RigthCard ? null : (
          <div className="total-div">
            <div className="items-count">0 Items</div>
            <div className="total">
              <p style={{ fontWeight: "lighter" }}>Total</p>
              <span>
                SAR{" "}
                <span style={{ fontWeight: "600", fontSize: "28px" }}>
                  {calculateTotal().toFixed(2)}
                </span>
              </span>
            </div>
          </div>
        )}
      </div>

      <div
        className="right-cards"
        style={{ width: !isCollapsed ? "42%" : "37%" }}
      >
        {RigthCard ? (
          <>
            <PAYMENTSUMMARY
              calculateTotal={calculateTotal().toFixed(2)}
              TaxTotal={TaxTotal().toFixed(2)}
              Tax={Tax().toFixed(2)}
              items={items}
              setItems={setItems}
            />
          </>
        ) : (
          <>
            <CATALOG
              onAddItem={addItemToCart}
              onClick={() => {
                setRigthCard(true);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Shop;
