import React from "react";
import { IMG_CDN_URL } from "../contants.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";
const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    //dispatch an action
    dispatch(addItem(data));
  };
  return (
    <div className="flex gap-4 border-b-2 py-2 bg-gray-100 border-gray-700 mb-2 w-full">
      <div className="w-9/12 h-[100px] flex flex-col gap-3">
        <span>{data.name}</span>
        <span className="text-sm text-gray-500">{data.description}</span>
        <span>{data.price / 100}</span>
      </div>
      <div className="relative w-3/12">
        <img src={IMG_CDN_URL + data.imageId} className="w-full" alt="" />
        <button
          onClick={handleClick}
          className="w-12/12 bg-black py-1 text-white rounded absolute bottom-0 left-4 "
        >
          - Add TO CART +
        </button>
      </div>
    </div>
  );
};

export default ItemList;
