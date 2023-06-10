//Config Driven UI
import RestaurentCard from "./RestaurentCard.js";
import { restrautList } from "../utils/mockdata.js";
import { useState } from "react";

const Body = () => {
  //   const listOfRestaurentsjs = [
  //     {
  //       data: {
  //         type: "F",
  //         id: "73011",
  //         name: "KFC",
  //         uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
  //         city: "22",
  //         lastMileTravelString: "23km",
  //         totalRatingsString: "5000+ ratings",
  //         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //         cuisines: ["American", "Snacks", "Biryani"],
  //         avgRating: "4.5",
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //         deliveryTime: 31,
  //         minDeliveryTime: 31,
  //         maxDeliveryTime: 31,
  //       },
  //     },
  //     {
  //       data: {
  //         type: "F",
  //         id: "7301",
  //         name: "Go Foodtion",
  //         uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
  //         city: "22",
  //         lastMileTravelString: "23km",
  //         totalRatingsString: "5000+ ratings",
  //         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //         cuisines: ["American", "Snacks", "Biryani"],
  //         avgRating: "3",
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //         deliveryTime: 31,
  //         minDeliveryTime: 31,
  //         maxDeliveryTime: 31,
  //       },
  //     },
  //     {
  //       data: {
  //         type: "F",
  //         id: "7301233",
  //         name: "MD",
  //         uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
  //         city: "22",
  //         lastMileTravelString: "23km",
  //         totalRatingsString: "5000+ ratings",
  //         cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //         cuisines: ["American", "Snacks", "Biryani"],
  //         avgRating: "4.8",
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //         deliveryTime: 31,
  //         minDeliveryTime: 31,
  //         maxDeliveryTime: 31,
  //       },
  //     },
  //   ];
  //State Variable Super Powerful Variable
  const [listofRestaurents, setListOfRestaurent] = useState(restrautList);

  return (
    <div className="body">
      <div className="search ">
        <input type="text" />
        <button
          onDoubleClick={() => {
            setListOfRestaurent(restrautList);
          }}
          className="filter-btn"
          onClick={() => {
            console.log("btn click");
            // Filter logic here
            const filetrAvg = listofRestaurents.filter((res) => {
              return res.data.avgRating > 4;
            });
            // console.log(listOfRestaurents);
            setListOfRestaurent(filetrAvg);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listofRestaurents.map((res, index) => {
          return <RestaurentCard {...res.data} key={res.data.id} />;
        })}
        {/* <RestaurentCard resData={restrautList[0]} />
          <RestaurentCard resData={restrautList[1]} />
          <RestaurentCard resData={restrautList[2]} />
          <RestaurentCard resData={restrautList[3]} />
          <RestaurentCard resData={restrautList[4]} />
          <RestaurentCard resData={restrautList[5]} /> */}
        {/* <RestaurentCard resData={restrautList[6]} /> */}
        {/* <RestaurentCard resData={restrautList[7]} /> */}
      </div>
    </div>
  );
};
export default Body;
