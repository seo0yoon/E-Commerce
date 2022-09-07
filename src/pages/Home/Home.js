import React from "react";
import Sale from "./components/Sale/Sale";
import { useSelector } from "react-redux";
import Items from "./components/Items/Items";
import Gauge from "./components/Gauge/Gauge";
import ToJournal from "./components/ToJournal/ToJournal";
import "./Home.scss";

const Home = () => {
  const finalOfferSet = useSelector((state) => state.layouts.home.finalOffer);
  const arrivalsSet = useSelector((state) => state.layouts.home.contents.newArrivals);
  const bestSellersSet = useSelector((state) => state.layouts.home.contents.bestSellers);
  const offersSet = useSelector((state) => state.layouts.home.contents.offers);
  const phonesSet = useSelector((state) => state.layouts.phones);
  const salesSet = useSelector((state) => state.layouts.sales);
  const journalLink = useSelector((state) => state.layouts.home.journal);

  return (
    <div className="home">
      <div className="banner">
        <div className="wrapper">
          <Gauge />
          <Sale sales={finalOfferSet} />
        </div>
      </div>

      <div className="refer">
        <div className="wrapper">
          <div className="block">
            <div className="icon">
              <img src="/assets/Home/warranty-icon.svg" alt="2" />
            </div>
            <div className="context">Two years warranty</div>
          </div>
          <div className="block">
            <div className="icon">
              <img src="/assets/Home/shipping-icon.svg" alt="배송비 무료" />
            </div>
            <div className="context">Free shipping</div>
          </div>
          <div className="block">
            <div className="icon">
              <img src="/assets/Home/return-icon.svg" alt="30일 반품" />
            </div>
            <div className="context">Return policy in 30 days</div>
          </div>
        </div>
      </div>

      <div className="sales">
        <div className="wrapper">
          <div className="left">
            <Sale sales={phonesSet} />
          </div>
          <div className="right">
            {salesSet.map((salesSet, idx) => {
              return <Sale sales={salesSet} key={idx} />;
            })}
          </div>
        </div>
      </div>

      <Items item={arrivalsSet} />
      <Items item={bestSellersSet} />

      <div className="to-phone">
        <div className="title txt-bold">Phone of the Year</div>
        <div className="context">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..
        </div>
        <div className="btn txt-bold">Shop Now</div>
      </div>

      <Items item={offersSet} />

      <div className="brands">
        <div className="wrapper">
          <div className="title txt-bold">Brands We Love</div>
          <div className="context">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore tempor sed do magna aliqua.
          </div>
          <ul className="contents">
            <li className="content">
              <div></div>
            </li>
            <li className="content">
              <div></div>
            </li>
            <li className="content">
              <div></div>
            </li>
            <li className="content">
              <div></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="journal">
        <div className="wrapper">
          <div className="context txt-bold">
            <div className="title">Journal</div>
            <div className="view-all">View all</div>
          </div>
          <div className="contents">
            {journalLink.map((journalLink, id) => {
              return <ToJournal link={journalLink} key={id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
