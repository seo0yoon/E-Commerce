import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Search from "./Search/Search";
import NotFound from "./NotFound/NotFound";
import Footer from "./Footer/Footer";
import "./css/core.css";
import About from "./About/About";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Contacts from "./Contacts/Contacts";
import Journal from "./Journal/Journal";
import JournalInside from "./Journal/components/JournalInside";
import ShopInside from "./ShopInside/ShopInside";
import Cart from "./Cart/Cart";
import MyAccount from "./MyAccount/MyAccount";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function App() {
  return (
    <Router>
      <Header />
      <Search />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" exact component={About} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/journal" exact component={Journal} />
        <Route path="/journal/:id" exact component={JournalInside} />
        <Route path="/shop/:id" exact component={ShopInside} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/myaccount" exact component={MyAccount} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" component={NotFound} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
