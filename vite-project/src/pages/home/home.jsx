import React, { useState } from "react";
import InputBox from '../../components/input/inputBox';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from "@mui/icons-material/Search";
import "./home.css";
import { border, borderRadius, margin } from "@mui/system";


function Home() {
  const[orderId,setorderId]=useState("000001")
  return (
    <div className="home-card">
      <div className="left-cards">
        <div className="head-search">
          <InputBox
            placeholder="Search ..."
            onSearchClick={() => console.log("Finding directions...")}
            icon={<SearchIcon />}
            style={{width:"90%",height:"45px",margin:"auto 0",border:"2px solid #555",borderRadius:"10px"}}
          />
          <button><MenuBookIcon style={{fontSize:"33px",color:"#07273d"}}/></button>
        </div>
        <div className="card-summary">
            <div className="card-cost">
              <h3>Cost Summery</h3>
              <p>Order Id : {orderId}</p>
            </div>
            <div className="card-menu">
            <button><MenuBookIcon style={{fontSize:"33px",color:"#000"}}/></button>
            <button><MenuBookIcon style={{fontSize:"33px",color:"#000"}}/></button>
            <button><MenuBookIcon style={{fontSize:"33px",color:"#000"}}/></button>
            </div>
        </div>
      </div>  
      <div className="right-cards"></div>
    </div>
  );
}

export default Home;
