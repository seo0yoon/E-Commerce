import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/pages/Header/Header";
import Search from "../src/pages/Search/Search";
import NotFound from "../src/pages/NotFound/NotFound";
import Footer from "../src/pages/Footer/Footer";
import About from "../src/pages/About/About";
import Home from "../src/pages/Home/Home";
import Shop from "../src/pages/Shop/Shop";
import Contacts from "../src/pages/Contacts/Contacts";
import Journal from "../src/pages/Journal/Journal";
import JournalInside from "../src/pages/Journal/components/JournalInside";
import ShopInside from "../src/pages/ShopInside/ShopInside";
import Cart from "../src/pages/Cart/Cart";
import MyAccount from "../src/pages/MyAccount/MyAccount";
import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
