import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Shop from "./pages/Shop/shop";
import Dashboard from "./pages/Dashboard/dashboard";
import Content from "./pages/contact/contact";
import Login from "./pages/login/login";
import VNavbar from "./components/navbar/navbar";
import "./App.css";
import { useState } from "react";
function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <VNavbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        <div className="main-content">
          <Routes>
              <Route path="/login" element={<Login />} />
                <Route path="/dashBoard" element={<Dashboard />} />
                <Route path="/shop" element={<Shop isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>} />
                <Route path="/content" element={<Content />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
