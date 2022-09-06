import React from 'react';
import ShopItem from './components/ShopItem';
import { useSelector } from 'react-redux';

function ShopItems() {
  const contentsSet = useSelector((state) => state.layouts.contents);

  return (
    <div className="items">
      {contentsSet.map((contentsSet, idx) => {
        return <ShopItem contents={contentsSet} key={idx} />;
      })}
    </div>
  );
}

export default ShopItems;
