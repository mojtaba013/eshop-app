import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../component/Cart";
import { useAuth, useAuthAction } from "../Providers/AuthProvider";
import { useCart } from "../Providers/CartProvider";

const Navigation = () => {
  const auth = useAuth();
  const setAuth=useAuthAction();
  const _navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [exitModal, setExitModal] = useState(false);
  const { cart } = useCart();
  const showCartModal = () => {
    setIsOpen((c) => !c);
  };

  const exitModalHandler = () => {
    setExitModal((c) => !c);
  }

  const exitAccountHandler=()=>{
    setAuth(false);
    setExitModal((c) => !c);
    _navigate("/signup");
  }

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
                    ? "fixed inset-0 z-[999] opacity-80 sm:bg-slate-800"
                    : ""
                }`}
              ></div>
              <div
                className={` ${
                  isOpen
                    ? "fixed overflow-y-auto overflow-x-hidden top-0 right-0   h-full w-full sm:w-[360px] md:w-[400px] lg:w-[500px] z-[9999] transition-all duration-300 ease-in-out  bg-white"
                    : "fixed top-0 -right-full bg-white w-full  h-full transition-all duration-300 "
                }   `}
              >
                <div
                  className="flex sticky top-0 bg-white justify-between pt-4 px-4 pb-4 cursor-pointer border-solid border-b-2"
                  onClick={showCartModal}
                >
                  <span className="text-slate-800 font-bold">سبد خرید</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewModal="0 0 24 24"
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

                <Cart onCloseCartModal={() => setIsOpen((c) => !c)} />
              </div>
            </>
          }
          {auth ? (
            <div onClick={exitModalHandler} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewModal="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          ) : (
            <div className="flex justify-between  text-sm items-center border-2 rounded-md py-1 px-2 font-medium text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewModal="0 0 24 24"
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
                <NavLink to="/login">
                  <span>ورود</span>
                </NavLink>
              </div>
              <span className="pr-1 pl-1 text-gray-300">|</span>
              <NavLink to="/signup">
                <span className="cursor-pointer">ثبت نام</span>
              </NavLink>
            </div>
          )}
          {
            <>
              <div
                onClick={exitModalHandler}
                className={
                  exitModal
                    ? "absolute inset-0 opacity-50 z-10  bg-gray-600"
                    : "hidden"
                }
              ></div>
              <div
                className={`absolute w-72 h-48   z-20 top-10 left-5 rounded-md transform ${
                  exitModal ? "scale-100" : "scale-0"
                } transition duration-500 bg-white`}
              >
                <div className="flex flex-col p-6 text-slate-500">
                  <div className="flex justify-center items-center gap-x-2 border-b pb-2 mb-2">
                    <img
                      alt="account"
                      className="w-8 h-8 rounded-full"
                      src={require("../assets/images/account.png")}
                    />
                    <div>
                      {" "}
                      <div>{auth.name}</div>
                      <div>{auth.email}</div>
                    </div>
                  </div>

                  <div onClick={exitAccountHandler} className="flex cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewModal="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>

                    <p>خروج</p>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Navigation;
