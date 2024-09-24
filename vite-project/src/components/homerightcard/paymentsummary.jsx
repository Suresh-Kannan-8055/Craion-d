import React from "react";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PrintIcon from "@mui/icons-material/Print";
import "./paymentsummary.css";
import Buttons from "../button/button";

const PAYMENTSUMMARY = (props) => {
  console.log(props.items);

  const submitCartItems = async () => {
    try {
      const response = await fetch("http://localhost:8000/get/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.items),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Cart items inserted successfully!", result);
      } else {
        console.error("Failed to insert cart items", response.statusText);
      }
    } catch (error) {
      console.error("Error inserting cart items: ", error);
    }
    props.setItems([]);
  };

  return (
    <>
      <div>
        <div style={{ marginLeft: "15px" }}>
          <div className="right-head">
            <h3 style={{ fontSize: "20px" }}>Payment summary</h3>
            <div>
              <ReceiptLongOutlinedIcon
                style={{
                  fontSize: "22px",
                  color: "#888",
                  margin: "5px 10px 0 0",
                }}
              />{" "}
              <p style={{ color: "#888" }}>Suresh</p>
            </div>
          </div>
          <div className="bill-total">
            <div className="bill-display">
              <div style={{ color: "#888" }}>Sub total</div>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#222",
                }}
              >
                SAR {props.calculateTotal}
              </div>
            </div>
            <div className="bill-display">
              <div style={{ color: "#888" }}>Taxable amount</div>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#222",
                }}
              >
                SAR {props.TaxTotal}
              </div>
            </div>
            <div className="bill-display">
              <div style={{ color: "#888" }}>Total tax</div>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#222",
                }}
              >
                SAR {props.Tax}
              </div>
            </div>
            <div
              style={{
                borderTop: "2px solid #ddd",
                marginTop: "20px",
                paddingTop: "20px",
              }}
              className="bill-display"
            >
              <div style={{ color: "#888" }}>Grand Total</div>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "22px",
                  display: "flex",
                }}
              >
                SAR{" "}
                <div
                  style={{
                    fontSize: "25px",
                    lineHeight: "30px",
                    marginLeft: "10px",
                    fontWeight: "600",
                  }}
                >
                  {props.calculateTotal}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-button">
          <div className="add-notes">
            <div>
              <BorderColorOutlinedIcon
                style={{ fontSize: "23px", color: "#555" }}
              />
              <span style={{ paddingBottom: "10px", marginLeft: "5px" }}>
                {" "}
                Add notes
              </span>
            </div>
          </div>
          <div className="payment-btns">
            <Buttons
              icon={<AccountBoxOutlinedIcon />}
              text="Customer"
              color="#000"
              border="1.5px solid black"
              padding="10px 28px"
              fontWeight="600"
              fontSize="15px"
              height="50px"
              background="#fff"
              borderRadius="8px"
              onClick={""}
            />
            <Buttons
              icon={<ConfirmationNumberIcon />}
              text="Coupon"
              color="#000"
              border="1.5px solid black"
              padding="10px 28px"
              fontWeight="600"
              fontSize="15px"
              height="50px"
              background="#fff"
              borderRadius="8px"
              onClick={""}
            />
            <Buttons
              icon={<PercentOutlinedIcon />}
              text="Discount"
              color="#000"
              border="1.5px solid black"
              padding="10px 28px"
              fontWeight="600"
              fontSize="15px"
              height="50px"
              background="#fff"
              borderRadius="8px"
              onClick={""}
            />
          </div>
          <div className="order-btns">
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
              onClick={submitCartItems}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PAYMENTSUMMARY;
