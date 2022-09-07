import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/pages/Header/Header";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Journal from "./pages/Journal/Journal";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import MyAccount from "./pages/MyAccount/MyAccount";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
