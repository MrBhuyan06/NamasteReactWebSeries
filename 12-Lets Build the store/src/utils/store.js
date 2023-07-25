import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
const store = configureStore({
  //this oject reducers basically respon for udate the whole store which store reducers of slices
  //this reducers is com bination of different app store
  reducer: {
    cart: cartReducer,
  },
});
export default store;
