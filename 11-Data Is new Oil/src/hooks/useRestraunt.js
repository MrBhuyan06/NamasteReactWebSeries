import { useState, useEffect } from "react";

const useRestraunt = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.952083&lng=77.7079919&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }

  return restaurant;
};
export default useRestraunt;
