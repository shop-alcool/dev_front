import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import UserCreate from "./components/UserCreate";
import UserLogin from "./components/UserLogin";
import Shop from "./pages/Shop";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/create-account" element={<UserCreate />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;