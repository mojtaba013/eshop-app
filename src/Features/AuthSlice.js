import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { productsData } from "../data";


const LOCAL_STORAGE_AUTH_KEY = "authState";




export const cartSlice = createSlice({
  name: "cart",
  initialState:false,
  reducers: { 
  
  },

  

}


);

export const { addProductToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer
