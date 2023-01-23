import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addProductToCart,
  removeProductFromCart,
  saveToLocalStorage,
} from "../Features/CartSlice";

const Cart = ({ onCloseCartModal }) => {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let priceFormat = new Intl.NumberFormat();

  useEffect(() => {
    dispatch(saveToLocalStorage(cart));
  }, [cart]);

  if (cart.length === 0)
    return <p className="text-center mt-4">سبد خرید شما خالی است</p>;

  const incrementHandler = (_product) => {
    dispatch(addProductToCart(_product));
  };

  const deleteHandler = (_product) => {
    dispatch(removeProductFromCart(_product));
  };

  return (
    <div className=" flex flex-col  justify-between ">
      {/* cart content */}
      <div className=" mb-[calc(100vh_-_75vh)]">
        {cart.map((product) => {
          return (
            <div className=" px-4  " key={product.id}>
              <div className="flex items-center justify-between  border-solid border-b w-full pb-4">
                <div className="flex jc items-center w-24 h-20">
                  <img
                    className="w-full object-cover "
                    src={require(`../assets/images/${product.image}`)}
                    alt=""
                  />
                </div>
                <div className="flex flex-1  flex-col text-sm md:text-base ">
                  <p className="pt-6 pb-4 font-medium text-sm">
                    {product.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">
                      {priceFormat.format(product.price)} ریال
                    </p>
                    <div className="flex p-2 gap-x-8 justify-between  items-center border-solid border  rounded-sm">
                      <span onClick={() => incrementHandler(product)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="rgb(239 68 68)"
                          className="w-6 h-6 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      </span>
                      <span className="text-red-500">{product.quantity}</span>
                      <span onClick={() => deleteHandler(product)}>
                        {product.quantity > 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="rgb(239 68 68)"
                            className="w-6 h-6 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M18 12H6"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="rgb(239 68 68)"
                            className="w-5 h-5 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* cart footer */}
      <div className=" fixed  bottom-0 pb-2 flex flex-col px-4  bg-white     w-full  border-solid sm:w-[360px] md:w-[400px] lg:w-[500px]">
        <div className="flex justify-between items-center border-t-2 pb-4 pt-4">
          <span>جمع کل خرید</span>
          <span>{priceFormat.format(total)} ریال</span>
        </div>
        <NavLink to="/login">
          <button
            onClick={onCloseCartModal}
            className="bg-red-500 w-full py-2 rounded-lg text-white "
          >
            ادامه خرید
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
