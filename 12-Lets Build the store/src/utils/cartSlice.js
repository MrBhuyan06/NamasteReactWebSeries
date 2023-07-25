import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //name of the Slice
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
//this slice will return a object with reducers and action
// {
//     // acions:{
//     //  addItems:()=>
//     // }
//     reducer
// }
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
