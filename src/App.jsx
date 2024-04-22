import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
