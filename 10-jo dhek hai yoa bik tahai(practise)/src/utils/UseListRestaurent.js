import { useState, useEffect } from "react";

const useListRestaurent = () => {
  const [listofRestaurents, setListOfRestaurent] = useState([]);
  const [filerlistofRestaurents, setFilterListOfRestaurent] = useState([]);
  // const [fileravglistofRestaurents, setFilterAvgListOfRestaurent] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.952083&lng=77.7079919&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurent(json?.data.cards[2]?.data?.data?.cards);
    setFilterListOfRestaurent(json?.data.cards[2]?.data?.data?.cards);
  }

  return [listofRestaurents, filerlistofRestaurents];
};
export default useListRestaurent;
