import React from "react";
import Button from "../../Components/Button/Button";
import Gauge from "../Main/Components/Gauge/Gauge";
import Sale from "./Components/Sale/Sale";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <div className="banner">
        <div className="wrapper">
          <Gauge />
          <Sale />
        </div>
      </div>

      <div className="vsualTxtBox">
        <h3 className="vsualTxt">Final Offer</h3>
        <p className="basicFont">
          Up to <span className="percent">50%</span> sale for all furniture items!
        </p>
        <Button backgroundColor={"#262626"} color={"#fff"} />
      </div>
    </main>
  );
};
export default Main;
