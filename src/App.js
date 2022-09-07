import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/pages/Header/Header";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
