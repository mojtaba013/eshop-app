import { createSlice } from "@reduxjs/toolkit";
import {productsData} from "../data";

const initialState = {
  value: 0,
  sex: "man",
  x: productsData,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      //console.log(state.x.filter((i) => i.id !== 5));
     
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    filterjoon:(state)=>{
      const newX=state.x.filter((i) => i.id !== 5);
      state.x=newX
      console.log(state.x);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,filterjoon } = counterSlice.actions;

export default counterSlice.reducer;
