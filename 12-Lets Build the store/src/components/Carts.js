import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector.js";
import ItemList from "./ItemList.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";
const Carts = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-screen ">
      <div className="w-10/12 mx-auto p-4 ">
        <h3 className=" text-xl text-center">Cart</h3>
        <p
          className="text-center  bg-black mx-auto px-2 py-2 rounded-lg text-white w-[100px] mb-2
            
        }"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          {" "}
          Clear Carts
        </p>
        <div>
          {cartItems.map((items) => (
            <ItemList data={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carts;
