import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Search from "./pages/Search/Search";
import Nav from "../src/pages/Nav/Nav";
import Footer from "./pages/Footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Search />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
