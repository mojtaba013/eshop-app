import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {

  const savedCart=JSON.parse(localStorage.getItem("cart"))||initialState;
  const [cart, dispatch] = useReducer(CartReducer, savedCart);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartAction = () => useContext(CartContextDispatcher);
