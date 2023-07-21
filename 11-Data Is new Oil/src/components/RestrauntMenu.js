import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestraunt from "../hooks/useRestraunt.js";
import useOnline from "../hooks/useOnline.js";
import RestaurentCategory from "./RestaurentCategory.js";
const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const restaurant = useRestraunt(resId);
  // console.log(restaurant);
  if (restaurant === null) {
    return <Shimmer />;
  }
  console.log(restaurant);

  const {
    name,
    city,
    area,
    cloudinaryImageId,
    costForTwoMessage,
    avgRatingString,
  } = restaurant?.cards[0]?.card?.card?.info;

  const { cards } = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  // console.log(
  //   typeof restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
  // );
  console.log(cards);
  const itemList = cards.filter(
    (c) =>
      c.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(itemList);

  return (
    <div className="menu">
      <div className="w-full text-center font-bold text-lg ">
        <span>Restaurent</span>
        <sapn>Restraunt id: {resId}</sapn>
      </div>

      <div className="w-6/12 mx-auto flex gap-2">
        <div className="w-full flex gap-2 text-center justify-center mt-4 bg-gray-300 p-5 rounded-lg">
          <span className="text-lg bold ">{name}</span>
          <span className="text-lg bold">{city}</span>
          <span className="text-lg bold">{area}</span>
        </div>
        {/* <div className="w-1/2">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
        </div> */}
      </div>

      <div>
        <div className="w-6/12 mx-auto mt-2 text-center bg-gray-200 p-2">
          <h1>Menu</h1>
        </div>
        <div className="w-full">
          {itemList.map((item) => (
            <RestaurentCategory {...item.card.card} />
          ))}
        </div>
        {/* <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
