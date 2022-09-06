import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Search from "../src/components/Search/Search";
import NotFound from "../src/components/NotFound/NotFound";
import Footer from "../src/components/Footer/Footer";
import About from "../src/components/About/About";
import Home from "../src/components/Home/Home";
import Shop from "../src/components/Shop/Shop";
import Contacts from "../src/components/Contacts/Contacts";
import Journal from "../src/components/Journal/Journal";
import JournalInside from "../src/components/Journal/components/JournalInside";
import ShopInside from "../src/components/ShopInside/ShopInside";
import Cart from "../src/components/Cart/Cart";
import MyAccount from "../src/components/MyAccount/MyAccount";
import Login from "../src/components/Login/Login";
import Signup from "../src/components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
