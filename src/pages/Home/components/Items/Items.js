import React from "react";
import Item from "../Items/components/Item";

const Items = ({ item: { title, item } }) => {
  return (
    <div className="items-block">
      <div className="wrapper">
        <div className="context">
          <div className="title txt-bold">{title}</div>
          <div className="view-all">View All</div>
        </div>
        <div className="items">
          <div className="item">
            {item.map((item, idx) => {
              return <Item item={item} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
