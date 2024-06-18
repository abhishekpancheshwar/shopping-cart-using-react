import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
