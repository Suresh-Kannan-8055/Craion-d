import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Home from "./pages/home/home";
import About from "./pages/About/about";
import Content from "./pages/contact/contact";
import Login from "./pages/login/login";
import ProtectedRoute from "./router/privateRouter";
import VNav from "./components/navbar/nav";
import "./App.css"; // Import the CSS file

function App() {
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
        <VNav />
        <div className="main-content">
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/content" element={<Content />} />
              </Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
