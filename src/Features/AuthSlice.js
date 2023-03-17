import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  email:"",
  userName:""
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userName=action.payload.name
      state.email=action.payload.email
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

export const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
  }
};

export const { login, logout,userInfo } =
  authSlice.actions;

export default authSlice.reducer;
