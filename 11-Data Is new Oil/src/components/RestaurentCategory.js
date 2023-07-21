import React, { useState } from "react";
import ItemList from "./ItemList.js";
const RestaurentCategory = ({ itemCards, title }) => {
  console.log(itemCards);
  const [show, setShow] = useState(false);
  return (
    <div className="w-6/12 mx-auto  mt-10 bg-gray-200 p-4 border-b-2 rounded-lg">
      <div className="flex justify-between mb-4 ">
        <span
          onClick={() => {
            setShow(!show);
          }}
          className="font-bold cursor-pointer"
        >
          {title}( {itemCards.length})
        </span>
        {show ? (
          <span
            onClick={() => {
              setShow(!show);
            }}
            className="font-bold cursor-pointer"
          >
            ⬆️
          </span>
        ) : (
          <span
            onClick={() => {
              setShow(!show);
            }}
            className="font-bold cursor-pointer"
          >
            ⬇️
          </span>
        )}
      </div>

      {show &&
        itemCards.map((item) => {
          return <ItemList data={item.card.info} />;
        })}
    </div>
  );
};

export default RestaurentCategory;
