import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../component/Cart";
import { useCart } from "../component/Providers/CartProvider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const showCartModal = () => {
    setIsOpen((c) => !c);
  };
  return (
    <>
      <div className=" flex flex-row py-2 px-4 justify-between items-center border border-b-2 mb-7">
        <div>
          <NavLink to="/">
            <p className="font-bold cursor-pointer text-red-500">فروشگاه</p>
          </NavLink>
        </div>
        <div className="flex  gap-x-2">
          <div
            onClick={showCartModal}
            className="relative flex justify-center items-center cursor-pointer "
          >
            <span className="absolute text-sm flex justify-center items-center text-white pt-[3px] rounded-full w-5 h-5 bg-red-500 -top-1.5 -right-2">
              {cart.length}
            </span>
            <img
              src={require("../assets/icons/icons8-shopping-cart-32.png")}
              alt=""
            />
          </div>
          {
            <>
              {" "}
              <div
                onClick={showCartModal}
                className={`${
                  isOpen
                    ? "fixed inset-0 z-[999] opacity-80 lg:bg-slate-800"
                    : ""
                }`}
              ></div>
              <div
                className={` ${
                  isOpen
                    ? "fixed overflow-scroll top-0 right-0   h-full w-full sm:w-[360px] md:w-[400px] lg:w-[500px] z-[9999] transition-all duration-300 ease-in-out  bg-white"
                    : "fixed top-0 -right-full bg-white w-full  h-full transition-all duration-300 ease-in-out"
                }   `}
              >
                <div
                  className="flex  justify-between pt-4 px-4 pb-2 cursor-pointer border-solid border"
                  onClick={showCartModal}
                >
                  <span className="text-slate-800 font-medium">سبد خرید</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
               
                  <Cart />
                  
                
               
              </div> 
            </>
          }
          <div className="flex justify-between  text-sm items-center border-2 rounded-md py-1 px-2 font-medium text-slate-700">
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <div className="flex cursor-pointer">
              <span>ورود</span>
            </div>
            <span className="pr-1 pl-1 text-gray-300">|</span>
            <span className="cursor-pointer">ثبت نام</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
