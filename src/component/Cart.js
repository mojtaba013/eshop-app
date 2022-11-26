import { useState } from "react";
import { useCart, useCartAction } from "./Providers/CartProvider";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      {cart.map((product) => {
        return (
          <div className=" px-4 ">
            <div className="flex items-center justify-between border-solid border-b w-full pb-4">
              <div className="flex jc items-center w-24 h-20">
                <img
                  className="w-full object-cover "
                  src={require(`../assets/images/${product.image}`)}
                  alt=""
                />
              </div>
              <div className="flex flex-1  flex-col text-sm md:text-base ">
                <p className="pt-6 pb-4">{product.name}</p>
                <div className="flex items-center justify-between">
                  <p>{product.price} ریال</p>
                  <div className="flex p-2 gap-x-8 justify-between  items-center border-solid border  rounded-sm">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </span>
                    <span>{product.quantity}</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
