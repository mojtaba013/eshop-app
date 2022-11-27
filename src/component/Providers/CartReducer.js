
const addProductToCart=(state,payload)=>{
  const updatedCart = [...state.cart];
console.log(payload);
  const index = updatedCart.findIndex(
    (item) => item.id === payload.id
  );

  if (index < 0) {
    // updatedCart.push({ ...payload, quantity: 1 });
    //console.log("porn",{...state,cart:[...state.cart,{...payload,quantity:1}]});
    return {...state,cart:[...state.cart,{...payload,quantity:1}],total:payload.price+state.total}
  } else {
    const updatedItem = { ...updatedCart[index] };
    updatedItem.quantity++;
    updatedCart[index] = updatedItem;
  }

  return {
    ...state,
    cart: updatedCart,
    total: state.total + payload.price,
  };
}

const removeProductFromCart=(state,payload)=>{
  const updatedCart = [...state.cart];

  const index = updatedCart.findIndex(
    (item) => item.id === payload.id
  );
  const updatedItem = { ...updatedCart[index] };
  if (updatedItem.quantity === 1) {
    const filteredCart = updatedCart.filter(
      (item) => item.id !== payload.id
    );
    return {
      ...state,
      cart: filteredCart,
      total: state.total - payload.price,
    };
  } else {
    updatedItem.quantity--;
    updatedCart[index] = updatedItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - payload.price,
    };
  }
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":      
      return addProductToCart(state,action.payload);
    case "REMOVE": 
    return removeProductFromCart(state,action.payload);
    default:
      return state;
  }
};

export default CartReducer;
