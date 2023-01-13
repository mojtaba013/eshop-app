import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data";
const initialState = {
    cart: [],
    total: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const updatedCart = [...state.cart]
      const index = updatedCart.findIndex((item) => item.id === action.payload.id);

      if (index < 0) {
        // updatedCart.push({ ...payload, quantity: 1 });
        //console.log("porn",{...state,cart:[...state.cart,{...payload,quantity:1}]});
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: action.payload.price + state.total,
        };
      } else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }

      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.price,
      };
    },

    removeProductFromCart: (state, action) => {
      const updatedCart = [...state.cart];

      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[index] };
      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total: state.total - action.payload.price,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[index] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.price,
        };
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer
