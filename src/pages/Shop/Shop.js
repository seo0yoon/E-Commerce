import React from "react";
import PageMoving from "./components/PageMoving";
import ShopItems from "./components/ShopItems";
import Sort from "./components/Sort";
import Varietys from "./components/Varietys";
import { useSelector } from "react-redux";
import "./Shop.scss";

function Shop() {
  const categorySet = useSelector((state) => state.layouts.shop.category);
  const colorSet = useSelector((state) => state.layouts.shop.color);
  const brandSet = useSelector((state) => state.layouts.shop.brand);
  const priceSet = useSelector((state) => state.layouts.shop.price);

  return (
    <div className="shop">
      <div className="wrapper">
        <div className="title">
          <div className="context txt-bold"></div>
          <div className="path">Home &gt; Products</div>
        </div>

        <div className="main">
          <aside className="aside">
            <div className="block">
              <Varietys settings={categorySet} />
              <Varietys settings={colorSet} />
              <Varietys settings={brandSet} />
              <Varietys settings={priceSet} />
            </div>
          </aside>
          <section className="section">
            <Sort />
            <ShopItems />
            <PageMoving />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Shop;
