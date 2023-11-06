import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import Kids from "./pages/kids/Kids";
import HomeAndKitchen from "./pages/homeAndkitchen/HomeAndKitchen";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Login from "../src/components/login/Login";
// import SignUp from "../src/components/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/home-kitchen" element={<HomeAndKitchen />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}

export default App;
