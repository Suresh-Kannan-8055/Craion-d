import React, { useEffect, useState } from "react";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import CloseIcon from "@mui/icons-material/Close";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PrintIcon from "@mui/icons-material/Print";
import "./catalog.css";
import Buttons from "../button/button";
import Variants from "./variants";
import axios from "axios";

const CATALOG = (props) => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [selectedItem, setSelectedItem] = useState("all");
  const [nextvarientpage, setnextvarientpage] = useState(true);
  const [variantpassing, setvariantpassing] = useState({});
  const [products, setProducts] = useState([]);

  const handleVariantpage = (data) => {
    setvariantpassing(data);
    setnextvarientpage(false);
  };
  const handleItemClick = (item) => {
    props.onAddItem(item);
  };
  const menus = [
    { id: 1, label: "All" },
    { id: 2, label: "&#9734; Favourite" },
    { id: 3, label: "Nachos" },
    { id: 4, label: "Sandwich" },
    { id: 5, label: "Juice" },
    { id: 6, label: "Pizza" },
    { id: 7, label: "Fries" },
    { id: 8, label: "Brownie" },
    { id: 9, label: "Cake" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (selectedItem.toLowerCase() === "all") {
          response = await axios.get(
            "http://localhost:8000/get/getcatagory/all"
          );
        } else {
          // Fetch products based on the selected category
          response = await axios.get(
            `http://localhost:8000/get/getcatagory/${selectedMenu}`
          );
        }
        setProducts(response.data || []); // Ensure response.data is an array
      } catch (error) {
        console.error(
          `Error fetching category ${selectedItem} products:`,
          error
        );
      }
    };

    fetchProducts();
  }, [selectedItem]);

  return (
    <>
      {nextvarientpage ? (
        <div>
          <div style={{ marginLeft: "15px" }}>
            <div className="catalog-head">
              <h3 style={{ fontSize: "20px" }}>Catalog</h3>
              <div>
                <MoreVertRoundedIcon
                  style={{
                    fontSize: "32px",
                    color: "#222",
                    margin: "0px 10px 0 0",
                  }}
                />
                <CloseIcon
                  style={{
                    fontSize: "32px",
                    color: "#555",
                    margin: "0px 10px 0 0",
                    cursor: "pointer",
                  }}
                  onClick={props.onClick}
                />
              </div>
            </div>
            <div className="menu">
              {menus.map((menu) => (
                <div key={menu.id}>
                  <input
                    type="radio"
                    id={`menu-${menu.id}`}
                    name="menu_type"
                    value={menu.label}
                    checked={selectedMenu === menu.id} // Dynamically check the selected menu
                    onChange={() => {
                      setSelectedMenu(menu.id);
                      setSelectedItem(
                        menu.label === "&#9734; Favourite"
                          ? "Favourite"
                          : menu.label
                      );
                    }}
                  />
                  <label
                    htmlFor={`menu-${menu.id}`}
                    dangerouslySetInnerHTML={{ __html: menu.label }}
                  />
                </div>
              ))}
            </div>
          </div>
          {products.length > 0 ? (
            <div
              style={{
                height: "530px",
                margin: "15px 0 0 15px",
                overflowY: "scroll",
              }}
              className="scroll-container"
            >
              <div className="full-menu">
                {products.map((item) => (
                  <div
                    className="menu-cards"
                    key={item.id}
                    onClick={() => {
                      handleVariantpage(item);
                      // handleItemClick(item);
                    }}
                  >
                    <Card className="item-card">
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.img_url}
                        alt={item.name}
                        className="item-img"
                      />
                      <CardContent className="content">
                        <Typography className="item-name" component="div">
                          {item.name}
                        </Typography>
                        <Typography className="variant" color="textSecondary">
                          {item.variants.length > 0
                            ? `${item.variants.length} Variants`
                            : ""}
                        </Typography>
                        <IconButton
                          style={{
                            float: "right",
                            background: "#0006",
                            height: "29px",
                            width: "29px",
                            margin: "8px 8px 0 0",
                          }}
                        >
                          <InfoOutlinedIcon
                            style={{ fontSize: "23px", color: "#fff" }}
                          />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
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
                    src="/empty.png"
                    alt="No Cart"
                    style={{ marginBottom: "10px" }}
                  />
                  <h3>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: menus[selectedMenu - 1].label,
                      }}
                    ></span>{" "}
                    is empty
                  </h3>
                  <p style={{ color: "#888" }}>
                    Scan barcode or add items from catalog
                  </p>
                </div>
              </div>
            </>
          )}
          <div className="right-button">
            <div className="order-btns" style={{ borderTop: "none" }}>
              <Buttons
                icon={<PrintIcon />}
                text="Print bill"
                color="#1263df"
                border="1.5px solid #1263df"
                padding="10px 20px"
                fontWeight="600"
                fontSize="15px"
                height="50px"
                background="#fff"
                borderRadius="8px"
                onClick={""}
              />
              <Buttons
                text="Proceed to payment"
                color="#fff"
                border="none"
                padding="10px 20px"
                fontWeight="600"
                fontSize="15px"
                width="325px"
                height="50px"
                background="#1263df"
                borderRadius="8px"
                onClick={props.onClick}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Variants handleAddToCart={handleItemClick}
            Catalogpage={() => {
              setnextvarientpage(true);
            }}
            variantdata={variantpassing}
          />
        </>
      )}
    </>
  );
};

export default CATALOG;
