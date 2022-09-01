import React from "react";
import Button from "../../Components/Button/Button";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="mainWrap">
        <div className="mainLine">
          <div className="main01">01</div>
          <div className="mainLineW">
            <div className="mainLineB"></div>
          </div>
        </div>

        <div className="textBox">
          <h3 className="mainText">Final Offer</h3>
          <p>
            Up to <span>50%</span> sale for all furniture items!
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Main;
