import React, { useState } from "react";
import "./variants.css";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import {
  Box,
  Card,
  CardMedia,
  FormControlLabel,
  FormControl,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Buttons from "../button/button";
import Counter from "../input/counterinput";

const Variants = (props) => {
  const [Selected, setSelected] = useState("");
  const [count, setCount] = useState(1);
  const [Price, setPrice] = useState(0);

  const addToCart = () => {
    if (Selected) {
      const cartItem = {
        id: props.variantdata.id,
        name: props.variantdata.name,
        variant:Selected,
        product_id: props.variantdata.id,
        category_id: props.variantdata.category_id,
        quantity: count,
        total_price: Price,
      };
      props.handleAddToCart(cartItem);  // Pass the item to the handler
    }
  };

  const handleChange = (event) => {
    const selectedVariant = props.variantdata.variants.find(
      (variant) => variant.name === event.target.value
    );
    setSelected(event.target.value);
    setPrice(selectedVariant ? parseFloat(selectedVariant.price) : 0);
  };

  const pizzaOptions = [
    { value: "large", label: "Pizza (Large)", price: "800.00" },
    { value: "medium", label: "Pizza (Medium)", price: "500.00" },
    { value: "small", label: "Pizza (Small)", price: "300.00" },
  ];
  const handleIncrement = (id) => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (id) => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  return (
    <>
      <div>
        <div style={{ marginLeft: "15px" }}>
          <div className="variants-head">
            <h3 style={{ fontSize: "20px" }}>Variants & Add-ons</h3>
            <div>
              <KeyboardArrowRightSharpIcon
                style={{
                  fontSize: "32px",
                  color: "#555",
                  margin: "0px 10px 0 0",
                  border: "3px solid #555",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={props.Catalogpage}
              />
            </div>
          </div>
          <div className="variants-display">
            <Card className="variants-card">
              <Card className="variants-img" style={{ borderRadius: "10px" }}>
                <CardMedia
                  component="img"
                  height="500"
                  image={props.variantdata.img_url}
                  alt="item"
                  className="img"
                />
                <Typography className="variant-number">
                  {props.variantdata.variants.length}
                </Typography>
                <IconButton
                  style={{
                    float: "right",
                    background: "#0006",
                    height: "25px",
                    width: "25px",
                    margin: "5px 5px 0 0",
                  }}
                  className="i-icon"
                >
                  <InfoOutlinedIcon
                    style={{ fontSize: "19px", color: "#fff" }}
                  />
                </IconButton>
              </Card>
              <Typography className="variant-name">
                {props.variantdata.name}
              </Typography>
            </Card>
          </div>
          <div class="slide-btn">
            <input
              type="radio"
              id="variants"
              name="option"
              style={{ display: "none" }}
              checked
            />
            <label for="variants">
              Variants ({props.variantdata.variants.length})
            </label>

            <input
              type="radio"
              id="addons"
              name="option"
              style={{ display: "none" }}
            />
            <label for="addons">Add-ons</label>
          </div>
          <div>
            <Box style={{ padding: "10px" }}>
              <Typography
                style={{ fontSize: "21px", fontWeight: "600", margin: "0" }}
              >
                Quantity
              </Typography>
              <RadioGroup value={Selected} onChange={handleChange}>
                {props.variantdata.variants.map((variant) => (
                  <Box key={variant.id} className="radio-option">
                    <FormControlLabel
                      value={variant.name}
                      control={
                        <Radio
                          style={{
                            color:
                              Selected === variant.name ? "#1263df" : "#ccc",
                          }}
                        />
                      }
                      label={
                        <Typography
                          style={{
                            fontWeight:
                              Selected === variant.name ? "bold" : "normal",
                          }}
                        >
                          {variant.name}
                        </Typography>
                      }
                    />
                    <Typography
                      style={{
                        fontWeight: "600",
                        color: Selected === variant.name ? "#1263df" : "#000",
                      }}
                    >
                      SAR {variant.price}
                    </Typography>
                  </Box>
                ))}
              </RadioGroup>
            </Box>
          </div>
        </div>
        <div className="variant-btn">
          <div className="variant-bottom-btn">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "5px 20px",
              }}
            >
              <div style={{ color: "#888" }}>Grand Total</div>
              <div style={{ fontWeight: "800", fontSize: "15px" }}>
                SAR {(Price * count).toFixed(2)}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "20px 20px",
              }}
            >
              <div
                style={{
                  height: "50px",
                  width: "150px",
                  padding: "8px 10px",
                  border: "2px solid #ccc",
                  borderRadius: "8px",
                  background: "#fff",
                }}
              >
                <IconButton
                  style={{
                    marginRight: "25px",
                    color: "#555",
                    background: "",
                    height: "30px",
                    width: "30px",
                  }}
                  onClick={handleDecrement}
                  aria-label="decrease quantity"
                >
                  <RemoveIcon />
                </IconButton>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: "5px",
                  }}
                >
                  {count}
                </span>
                <IconButton
                  style={{
                    marginLeft: "20px",
                    color: "#555",
                    height: "30px",
                    width: "30px",
                  }}
                  onClick={handleIncrement}
                  aria-label="increase quantity"
                >
                  <AddIcon />
                </IconButton>
              </div>
              <Buttons
                text="Add to order"
                color="#fff"
                border="none"
                padding="10px 20px"
                fontWeight="600"
                fontSize="15px"
                width="315px"
                height="50px"
                margin="0 0 0 20px"
                background="#1263df"
                borderRadius="8px"
                onClick={() => {
                  addToCart();
                  props.Catalogpage();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variants;
