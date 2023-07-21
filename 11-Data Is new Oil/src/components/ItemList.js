import React from "react";
import { IMG_CDN_URL } from "../contants.js";
const ItemList = ({ data }) => {
  return (
    <div className="flex gap-4 border-b-2 py-2 bg-gray-100 border-gray-700 mb-2 w-full">
      <div className="w-6/12 h-[100px] flex flex-col gap-3">
        <span>{data.name}</span>
        <span className="text-sm text-gray-500">{data.description}</span>
        <span>{data.price / 100}</span>
      </div>
      <div className="relative w-6/12">
        <img src={IMG_CDN_URL + data.imageId} alt="" />
        <button className="bg-black text-white p-2 rounded absolute bottom-0 left-28">
          - Add TO CART +
        </button>
      </div>
    </div>
  );
};

export default ItemList;
