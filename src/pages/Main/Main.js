import React from "react";
import Button from "../../Components/Button/Button";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <section className="vsual">
        <div className="vsualBox">
          <div className="line">
            <div className="line01">01</div>
            <div className="lineW">
              <div className="lineB"></div>
            </div>
          </div>
          <div className="vsualTxtBox">
            <h3 className="vsualTxt">Final Offer</h3>
            <p>
              Up to <span className="percent">50%</span> sale for all furniture items!
            </p>
            <Button backgroundColor={"#262626"} color={"#fff"} />
          </div>
        </div>
      </section>

      <nav className="mainNav">
        <div className="mainNavWrap">
          <div className="txtWrap">
            <img src="/images/그룹 38.png" alt="Two years warranty" />
            <div className="txt">Two years warranty</div>
          </div>
          <div className="txtWrap">
            <img src="/images/그룹 39.png" alt="Free shipping" />
            <div className="txt">Free shipping</div>
          </div>
          <div className="txtWrap">
            <img src="/images/그룹 40.png" alt="Return policy in 30 days" />
            <div className="txt">Return policy in 30 days</div>
          </div>
        </div>
      </nav>

      <section className="saleContents">
        <div className="saleContentsWrap">
          <div className="saleLeft txtBox">
            <h3 className="txtSize">Phones Sale</h3>
            <p>
              Up to <span className="percent">30%</span> sale for all phones
            </p>
            <Button />
          </div>
          <div className="column">
            <div className="saleColumn txtBox">
              <h3 className="txtSize">Electronics Sale</h3>
              <p>
                Up to <span className="percent">70%</span> Electronics Sale
              </p>
              <Button />
            </div>
            <div className="saleColumn txtBox">
              <h3 className="txtSize">Furniture Offer</h3>
              <p>
                Up to <span className="percent">50%</span> sale for all furniture items!
              </p>
              <Button />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
