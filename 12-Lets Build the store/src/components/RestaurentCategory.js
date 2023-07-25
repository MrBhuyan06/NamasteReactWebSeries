import React, { useState } from "react";
import ItemList from "./ItemList.js";
const RestaurentCategory = ({
  itemCards,
  title,
  showIndex,
  setShowIndex,
  logtest,
}) => {
  //   console.log(itemCards);

  return (
    <div className="w-6/12 mx-auto  mt-10 bg-gray-200 shadow-xl p-4 border-b-2 rounded-lg">
      <div className="flex justify-between mb-4 ">
        <span
          onClick={() => {
            setShowIndex();
            logtest();
          }}
          className="font-bold cursor-pointer"
        >
          {title}( {itemCards.length})
        </span>
        {showIndex ? (
          <span
            onClick={() => {
              setShowIndex();
            }}
            className="font-bold cursor-pointer"
          >
            ⬆️
          </span>
        ) : (
          <span
            onClick={() => {
              setShowIndex;
            }}
            className="font-bold cursor-pointer"
          >
            ⬇️
          </span>
        )}
      </div>

      {showIndex &&
        itemCards.map((item) => {
          return <ItemList key={item.card.info.id} data={item.card.info} />;
        })}
    </div>
  );
};

export default RestaurentCategory;
