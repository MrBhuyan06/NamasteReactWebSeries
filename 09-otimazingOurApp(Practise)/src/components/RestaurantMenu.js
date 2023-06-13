import { useEffect, useState } from "react";
import { CND_URL } from "../utils/constants.js";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurent from "../utils/useRestaurent.js";
const ResTaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurent(resId);
  console.log(resInfo);

  if (resInfo === null) {
    console.log("log shimmer");
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRatingString,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img src={`${CND_URL}${cloudinaryImageId}`} alt="" />
      <h3>
        {cuisines.join(",")}-{costForTwoMessage}
      </h3>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, i) => {
          return (
            <li key={item.card.info.id}>{`${item.card.info.name} ${
              item.card.info.price / 100 || item.card.info.defaultPrice / 100
            }`}</li>
          );
        })}
      </ul>
    </div>
  );
};
export default ResTaurantMenu;
