import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, Route, useNavigate } from "react-router-dom";
import Cart from "../component/Cart";
import Chevron from "../component/Chevron";
import DigitalProducts from "../pages/DigitalProducts";
import Mobile from "../pages/Mobile";
import SuperMarket from "../pages/SuperMarket";
import {
  getUserData,
  logout,
  removeAuth,
  saveUserData,
} from "../Features/AuthSlice";

const Navigation = () => {
  const _navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [subMenu, setSubMenu] = useState({ id: "", value: "" });
  const [showSearch, setShowSearch] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [chevron, setChevron] = useState([]);
  const { cart } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const showCartmodal = () => {
    setIsOpen((c) => !c);
  };

  const closeAccountModal = () => {
    setCloseModal((c) => !c);
  };

  const exitAccountHandler = () => {
    setCloseModal((c) => !c);
    dispatch(logout());
  };

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  const chevronHandler = (e) => {
    const id = e.currentTarget.id;
    const updateState = [...chevron];
    const index = chevron.findIndex((item) => item.id === id);
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
    setBackdrop(true);
  };

  const subMenuHnadler = (e) => {
    const id = e.currentTarget.id;
    const value = e.target.innerText;
    setSubMenu({ id, value });
  };

  useEffect(() => {
    if (!showSearch) setTimeout(() => setBackdrop(false), 500);
  }, [showSearch]);

  useEffect(() => {
    renderComponent(subMenu.id);
  }, [subMenu]);

  const renderComponent = (id) => {
    switch (id) {
      case "mobile":
        return <Mobile />;
      case "digitalProduct":
        return <DigitalProducts />;
      case "superMarket":
        return <SuperMarket />;
      default:
        break;
    }
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
              <p className="border-b py-4 border-slate-300  font-bold text-slate-800">
                دسته بندی کالاها
              </p>
            </div>

            <ul className="flex flex-col gap-y-3  text-sm text-slate-700">
              <li
                id="mobile"
                onClick={chevronHandler}
                className="flex flex-col "
              >
                <div className="flex  justify-between items-center mb-4 cursor-pointer px-4">
                  {" "}
                  <p
                    className={`${
                      chevron.some((i) => i.id === "mobile") &&
                      chevron.find((i) => i.id === "mobile").isopen
                        ? "text-red-500 font-bold"
                        : "font-bold"
                    }`}
                  >
                    موبایل
                  </p>
                  <Chevron filterState={chevron} Section={"mobile"} />
                </div>
                {chevron.some((i) => i.id === "mobile") &&
                chevron.find((i) => i.id === "mobile").isopen ? (
                  <div className="flex flex-col bg-gray-100 gap-y-4 py-4 px-4">
                    <div className="flex items-center text-gray-400 gap-x-1 text-xs">
                      <p>همه موارد این دسته</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </div>

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
                <div className="flex  justify-between items-center mb-4 cursor-pointer px-4">
                  {" "}
                  <p
                    className={`${
                      chevron.some((i) => i.id === "digitalProduct") &&
                      chevron.find((i) => i.id === "digitalProduct").isopen
                        ? "text-red-500 font-bold"
                        : "font-bold"
                    }`}
                  >
                    کالای دیجیتال
                  </p>
                  <Chevron filterState={chevron} Section={"digitalProduct"} />
                </div>
                {chevron.some((i) => i.id === "digitalProduct") &&
                chevron.find((i) => i.id === "digitalProduct").isopen ? (
                  <div className="flex flex-col bg-gray-100 gap-y-4 py-4 px-4">
                    <div className="flex items-center text-gray-400 gap-x-1 text-xs">
                      <p>همه موارد این دسته</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </div>
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
                id="superMarket"
                onClick={chevronHandler}
                className="flex flex-col "
              >
                <div className="flex  justify-between items-center mb-4 cursor-pointer px-4">
                  {" "}
                  <p
                    className={`${
                      chevron.some((i) => i.id === "superMarket") &&
                      chevron.find((i) => i.id === "superMarket").isopen
                        ? "text-red-500 font-bold"
                        : "font-bold"
                    }`}
                  >
                    کالاهای سوپرمارکتی
                  </p>
                  <Chevron filterState={chevron} Section={"superMarket"} />
                </div>
                {chevron.some((i) => i.id === "superMarket") &&
                chevron.find((i) => i.id === "superMarket").isopen ? (
                  <div className="flex flex-col bg-gray-100 gap-y-4 py-4 px-4">
                    <div className="flex items-center text-gray-400 gap-x-1 text-xs">
                      <p>همه موارد این دسته</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </div>
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
            <div className=" fixed bg-white  z-[100] bottom-0 right-0 left-0 p-4  h-full translate-y-0  duration-300">
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
                <input
                  type="text"
                  placeholder="جستجو"
                  className="text-sm border-none w-full"
                />
              </div>
            </div>
          ) : (
            <div className="fixed bg-white z-[100] bottom-0 right-0 left-0 h-0   translate-y-full  duration-500 "></div>
          )}
          {backdrop ? (
            <div className="fixed z-[99] bg-slate-600 opacity-50 bottom-0 right-0 left-0 h-full  "></div>
          ) : (
            ""
          )}
          <div className="flex justify-between gap-x-4">
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

            {auth.isAuthenticated ? (
              <div
                onClick={closeAccountModal}
                className="flex gap-x-1 items-center cursor-pointer text-slate-700"
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            ) : (
              <NavLink to="/login">
                <div className="flex justify-between cursor-pointer text-sm items-center  rounded-md py-1 px-2 font-medium text-slate-700">
                  {" "}
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
                  <span>ورود</span>
                </div>
              </NavLink>
            )}

            {
              <>
                <div
                  onClick={closeAccountModal}
                  className={
                    closeModal
                      ? "fixed inset-0 opacity-50 z-10  bg-gray-600"
                      : "hidden"
                  }
                ></div>
                <div
                  className={`absolute w-72 h-48   z-20 top-10 left-5 rounded-md transform ${
                    closeModal ? "scale-100" : "scale-0"
                  } transition duration-[400ms] bg-white`}
                >
                  <div className="flex flex-col  p-6 text-slate-500">
                    <div className="flex  items-center gap-x-2 border-b pb-2 mb-3">
                      <img
                        alt="account"
                        className="w-8 h-8 rounded-full"
                        src={require("../assets/images/account.png")}
                      />
                      <div>
                        {" "}
                        <div>{auth.userName}</div>
                        <div>{auth.email}</div>
                      </div>
                    </div>
                    <div className="flex cursor-pointer gap-x-1 mb-4 ">
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                      <span>لیست علاقه مندیها</span>
                    </div>
                    <div
                      onClick={exitAccountHandler}
                      className="flex cursor-pointer  gap-x-1"
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
      <div className=" hidden lg:flex lg:justify-between lg:items-center lg:px-4 px-2 pt-3 ">
        <div className="flex  items-center justify-between  gap-x-2">
          <div className="relative flex items-center justify-center gap-x-2">
            <NavLink to="/">
              <span className="font-bold text-red-500 text-xl ">Shop</span>
            </NavLink>
          </div>
          {/* search  */}
          <div className="w-full">
            <input
              type="text"
              placeholder="جستجو"
              className="bg-gray-100 border-0 rounded-lg w-[400px]  outline-0  focus:ring-0"
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
            {auth.isAuthenticated ? (
              <div
                onClick={closeAccountModal}
                className="flex gap-x-1 items-center cursor-pointer text-slate-700"
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            ) : (
              <NavLink to="/login">
                {" "}
                <div className="flex justify-between cursor-pointer text-sm items-center  rounded-md py-1 px-2 font-medium text-slate-700">
                  {" "}
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
                  <span>ورود</span>
                </div>{" "}
              </NavLink>
            )}
            {
              <>
                <div
                  onClick={closeAccountModal}
                  className={
                    closeModal
                      ? "fixed inset-0 opacity-50 z-[10]  bg-gray-600"
                      : "hidden"
                  }
                ></div>
                <div
                  className={`absolute w-72 h-48   z-20 top-10 left-5 rounded-md transform ${
                    closeModal ? "scale-100" : "scale-0"
                  } transition duration-[400ms] bg-white`}
                >
                  <div className="flex flex-col p-6 text-slate-500">
                    <div className="flex  items-center gap-x-2 border-b pb-2 mb-3">
                      <img
                        alt="account"
                        className="w-8 h-8 rounded-full"
                        src={require("../assets/images/account.png")}
                      />
                      <div>
                        {" "}
                        <div>{auth.userName}</div>
                        <div>{auth.email}</div>
                      </div>
                    </div>

                    <div className="flex cursor-pointer gap-x-1 mb-4 ">
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                      <span>لیست علاقه مندیها</span>
                    </div>
                    <div
                      onClick={exitAccountHandler}
                      className="flex cursor-pointer  gap-x-1"
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
      <div className="hidden lg:block lg:px-4 p-2">
        {/* backdrop */}
        {showMenu && (
          <div
            onClick={showMenuHandler}
            className="fixed top-[106px] right-0 left-0 bottom-0 bg-slate-600 opacity-50 "
          ></div>
        )}
        <div className="flex items-center gap-x-1 ">
          <ul className="flex items-center ">
            <li
              onClick={() => setShowMenu((prev) => !prev)}
              className="flex items-center cursor-pointer"
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
              <span className="text-sm font-bold text-slate-800 cursor-pointer">
                دسته بندی کالاها
              </span>
            </li>
            <span className="text-slate-500 mr-5">|</span>

            <li className="text-sm text-slate-500 hover:bg-gray-100 p-2 rounded-md w-[125px] text-center cursor-pointer">
              سوپرمارکت
            </li>
            <li className="text-sm text-slate-500 hover:bg-gray-100 p-2 rounded-md w-[125px] text-center cursor-pointer">
              شگفت انگیزها
            </li>
            <li className="text-sm text-slate-500 hover:bg-gray-100 p-2 rounded-md w-[125px] text-center cursor-pointer">
              پرفروش ترین ها
            </li>
            <li className="text-sm text-slate-500 hover:bg-gray-100 p-2 rounded-md w-[125px] text-center cursor-pointer">
              تماس با ما
            </li>
          </ul>
        </div>
        {showMenu && (
          <div className="flex justify-between fixed z-10   top-[106px] right-8 bottom-20 left-8 rounded-b-lg   bg-white ">
            {/* menu */}
            <div className="w-2/12 overflow-x-hidden overflow-y-auto">
              <ul className="flex flex-col text-sm text-slate-800 font-bold  ">
                <li
                  id="mobile"
                  onMouseOver={subMenuHnadler}
                  className="flex items-center gap-x-2 hover:bg-slate-100 px-2 py-4 w-full cursor-pointer  hover:text-red-500"
                >
                  موبایل
                </li>
                <li
                  id="digitalProduct"
                  onMouseOver={subMenuHnadler}
                  className=" hover:bg-slate-100 px-2 py-4 w-full cursor-pointer  hover:text-red-500"
                >
                  کالای دیجیتال
                </li>
                <li
                  id="superMarket"
                  onMouseOver={subMenuHnadler}
                  className=" hover:bg-slate-100 px-2 py-4 w-full cursor-pointer  hover:text-red-500"
                >
                  کالاهای سوپرمارکتی
                </li>
              </ul>
            </div>
            {/* subMenu */}
            <div className="w-10/12  border-r-2 border-slate-200 overflow-x-hidden overflow-y-auto px-5 pt-5">
              <div className="text-xs font-bold mb-5">
                همه محصولات {subMenu.value}
              </div>
              {renderComponent(subMenu.id)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
