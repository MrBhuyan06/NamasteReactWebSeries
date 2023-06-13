import { useEffect, useState } from "react";

const useRestaurent = (resId) => {
  //1 create a state For Restaurent Menu

  const [restaurentInfo, setRestaurentInfo] = useState(null);

  //2 Will Do the Api Call to it And get THe data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.952083&lng=77.7079919&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurentInfo(json?.data);
  };

  //Return The restaurentminu Details
  return restaurentInfo;
};
export default useRestaurent;
