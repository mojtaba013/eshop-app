import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../component/Cart";
import Chevron from "../component/Chevron";

const Navigation = () => {
  const auth = localStorage.getItem("authstate") | false;
  const _navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [exitModal, setExitmodal] = useState(false);
  const [chevron, setChevron] = useState([]);
  const { cart } = useSelector((state) => state.cart);

  const showCartmodal = () => {
    setIsOpen((c) => !c);
  };

  const exitmodalHandler = () => {
    setExitmodal((c) => !c);
  };

  const exitAccountHandler = () => {
    //setAuth(false);
    setExitmodal((c) => !c);
    _navigate("/signup");
  };

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  const chevronHandler = (e) => {
    const id = e.currentTarget.id;
    const updateState = [...chevron];
    const index = chevron.findIndex((item) => item.id === id);
    console.log(index);
    if (index < 0) {
      setChevron((prev) => [...prev, { id, isopen: true }]);
    } else {
      const selectedItem = { ...chevron[index] };
      selectedItem.isopen = !selectedItem.isopen;
      updateState[index] = selectedItem;
      setChevron(updateState);
    }
  };

  const searchHandler = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className="sticky top-0 bg-white z-[1002] border-b-2   mb-7 ">
      {/* mobile mode */}
      <div className=" flex flex-col  py-2 px-2  justify-between items-center lg:hidden">
        <div className="flex items-center justify-between w-full mb-4 pt-1 border-b border-slate-200 pb-2">
          <div onClick={showMenuHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div
            onClick={showMenuHandler}
            className={`${
              showMenu
                ? "fixed inset-0 z-[1001] cursor-pointer opacity-80 bg-slate-800"
                : ""
            }`}
          ></div>
          <div
            className={` ${
              showMenu
                ? "fixed pt-4 overflow-y-auto overflow-x-hidden top-0 right-0 left-5   h-full w-[calc(100vw_-_10vw)]   z-[9999] transition-all duration-500 ease-in-out  bg-white"
                : "fixed pt-4 top-0 -right-full bg-white w-full  h-full transition-all duration-300 "
            }   `}
          >
            <div className="px-2 mb-4">
              <p className="border-b py-4 border-slate-300  font-bold">
                دسته بندی کالاها
              </p>
            </div>

            <ul className="flex flex-col gap-y-3 p-2 text-sm">
              <li
                id="mobile"
                onClick={chevronHandler}
                className="flex flex-col "
              >
                <div className="flex  justify-between items-center mb-4 cursor-pointer">
                  {" "}
                  <p>موبایل</p>
                  <Chevron filterState={chevron} Section={"mobile"} />
                </div>
                {chevron.some((i) => i.id === "mobile") &&
                chevron.find((i) => i.id === "mobile").isopen ? (
                  <div className="flex flex-col bg-gray-100 gap-y-4 py-4">
                    <NavLink to="/">اپل</NavLink>
                    <NavLink>سامسونگ</NavLink>
                    <NavLink>شیائومی</NavLink>
                    <NavLink>هواوی</NavLink>
                  </div>
                ) : (
                  ""
                )}
              </li>
              <li
                id="digitalProduct"
                onClick={chevronHandler}
                className="flex flex-col "
              >
                <div className="flex  justify-between items-center mb-4 cursor-pointer">
                  {" "}
                  <p>کالای دیجیتال</p>
                  <Chevron filterState={chevron} Section={"digitalProduct"} />
                </div>
                {chevron.some((i) => i.id === "digitalProduct") &&
                chevron.find((i) => i.id === "digitalProduct").isopen ? (
                  <div className="flex flex-col bg-gray-100 gap-y-4 py-4">
                    <NavLink to="/">تلویزیون</NavLink>
                    <NavLink>ساعت هوشمند</NavLink>
                    <NavLink>دوربین</NavLink>
                    <NavLink>لپ تاپ</NavLink>
                    <NavLink>هدفون هدست و هندزفری</NavLink>
                    <NavLink>هارد فلش و SSD</NavLink>
                  </div>
                ) : (
                  ""
                )}
              </li>
              <li
                id="behdasht"
                onClick={chevronHandler}
                className="flex flex-col "
              >
                <div className="flex  justify-between items-center mb-4 cursor-pointer">
                  {" "}
                  <p>موبایل</p>
                  <Chevron filterState={chevron} Section={"behdasht"} />
                </div>
                {chevron.some((i) => i.id === "behdasht") &&
                chevron.find((i) => i.id === "behdasht").isopen ? (
                  <div className="flex flex-col bg-gray-100 gap-y-4 py-4">
                    <NavLink to="/">لوازم آرایشی</NavLink>
                    <NavLink>مراقبت پوست و مو</NavLink>
                    <NavLink>عطر و ادکلن</NavLink>
                    <NavLink>لوازم بهداشتی</NavLink>
                  </div>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>

          <NavLink to="/">
            <p className="font-bold text-sm cursor-pointer text-red-500">
              فروشگاه
            </p>
          </NavLink>
        </div>

        <div className="flex justify-between items-center w-full gap-x-1">
          <div onClick={searchHandler} className="">
            {/* <input
              onClick={searchHandler}
              type="text"
              placeholder="جستجو"
              className="bg-gray-100 border-0 rounded-lg h-8 text-sm  w-3/4 outline-0"
            /> */}
            <span></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          {showSearch ? (
            <div className=" fixed  bg-white z-[100] bottom-0 right-0 left-0 p-4  h-full translate-y-0  duration-500">
              <div className="flex   items-center   justify-between border-b border-blue-400 py-2 gap-x-2 ">
                <p onClick={searchHandler} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-slate-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </p>
                <input type="text" placeholder="جستجو" className="text-sm border-none w-full" />
              </div>
            </div>
          ) : (
            <div className="fixed bg-white z-[100] bottom-0 right-0 left-0 h-0   translate-y-full  duration-500 "></div>
          )}
          <div className="flex ">
            <div
              onClick={showCartmodal}
              className="relative flex justify-center items-center cursor-pointer "
            >
              <span className="absolute text-sm flex justify-center items-center text-white pt-[3px] rounded-full w-5 h-5 bg-red-500 -top-1.5 -right-2">
                {cart.length}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-slate-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            {
              <>
                <div
                  onClick={showCartmodal}
                  className={`${
                    isOpen
                      ? "fixed inset-0 z-[1001] cursor-pointer opacity-80 sm:bg-slate-800"
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
                    onClick={showCartmodal}
                  >
                    <span className="text-slate-800 font-bold">سبد خرید</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      view="0 0 24 24"
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

                  <Cart onCloseCartModal={showCartmodal} />
                </div>
              </>
            }

            <div className="flex justify-between  text-sm items-center  py-1 px-2 font-medium text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                view="0 0 24 24"
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
              <div className="">
                <NavLink to="/login">
                  <span>ورود</span>
                </NavLink>
              </div>
            </div>

            {
              <>
                <div
                  onClick={exitmodalHandler}
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

                    <div
                      onClick={exitAccountHandler}
                      className="flex cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        view="0 0 24 24"
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
      </div>
      {/* desktop mode */}
      <div className=" hidden lg:flex lg:justify-between lg:items-center p-2 ">
        <div className="flex  items-center justify-between  gap-x-2">
          <div className="relative flex items-center justify-center gap-x-2">
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </NavLink>
            <div
              onClick={() => setShowMenu((prev) => !prev)}
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            {showMenu ? (
              <div className="fixed z-10 top-14 right-10 bottom-10 left-10  bg-red-300 transition-all ease-in-out duration-700">
                yes
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="جستجو"
              className="bg-gray-100 border-0 rounded-lg w-[400px]  outline-0"
            />
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex gap-x-3">
            <div
              onClick={showCartmodal}
              className="relative flex justify-center items-center cursor-pointer "
            >
              <span className="absolute text-sm flex justify-center items-center text-white pt-[3px] rounded-full w-5 h-5 bg-red-500 -top-1.5 -right-2">
                {cart.length}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-slate-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            {
              <>
                <div
                  onClick={showCartmodal}
                  className={`${
                    isOpen
                      ? "fixed inset-0 z-[1001] cursor-pointer opacity-80 sm:bg-slate-800"
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
                    onClick={showCartmodal}
                  >
                    <span className="text-slate-800 font-bold">سبد خرید</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      view="0 0 24 24"
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

                  <Cart onCloseCartModal={showCartmodal} />
                </div>
              </>
            }

            <div className="flex justify-between  text-sm items-center  py-1 px-2 font-medium text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                view="0 0 24 24"
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
              <div className="">
                <NavLink to="/login">
                  <span>ورود</span>
                </NavLink>
              </div>
            </div>

            {
              <>
                <div
                  onClick={exitmodalHandler}
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

                    <div
                      onClick={exitAccountHandler}
                      className="flex cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        view="0 0 24 24"
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
      </div>
    </div>
  );
};

export default Navigation;
