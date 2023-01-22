import { useContext, useEffect, useRef, useState } from "react";
import Cart from "./Cart";

import Filter from "./Filter";
import NavBar from "./Navbar";

import { useSelector, useDispatch } from "react-redux";
import Sort from "./Sort";
import {
  addProductToCart,
  removeProductFromCart,
  saveToLocalStorage,
} from "../Features/CartSlice";

const HomePage = () => {
  let nf = new Intl.NumberFormat();
  const _products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [productCouter, setProductCounter] = useState({
    id: "",
    display: false,
  });

  const addProducttHandler = (prd) => {
    if (checkInCart(cart, prd)) {
      console.log(prd.id);
      setProductCounter({ id: prd.id, display: true });
    } else dispatch(addProductToCart(prd));
  };

  const reset = () => {
    setProductCounter({ id: "", display: false });
  };

  useEffect(() => {
    if (cart.length > 0) dispatch(saveToLocalStorage(cart));
  }, [cart]);

  // useEffect(()=>{
  //   setProductCounter({ id: "", display: false });
  // },[productCouter])

  const checkInCart = (cart, product) => {
    return cart.find((item) => item.id === product.id);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container   max-w-screen-xl m-auto w-full flex  justify-center items-start px-2 xl:px-0 gap-4">
        <section className=" border-solid border-2 rounded-sm min-h-screen hidden lg:block lg:w-1/4">
          <Filter />
        </section>
        <div className="flex flex-col w-full  lg:w-3/4 mb-4">
          <div className="flex ">
            <div className="lg:hidden">
              <Filter />
            </div>
            <Sort />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
            {_products.map((product) => {
              //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
              return (
                <div
                  className="flex w-full sm:flex-col   md:p-4 border-solid border lg:hover:shadow-[0_2px_8px_0_rgba(0,0,0,0.2)] cursor-pointer"
                  key={product.id}
                >
                  <div className="flex justify-center items-center w-36  xs:w-48 sm:w-full md:aspect-w-3 md:aspect-h-2">
                    <img
                      className="w-full h-auto object-cover "
                      src={require(`../assets/images/${product.image}`)}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 p-2 lg:p-0 flex-col  ">
                    <div className="font-medium text-right pt-2 mb-5">
                      <span className="font-bold text-slate-800 text-sm  md:text-base">
                        {product.name}
                      </span>
                    </div>
                    <div className="flex justify-end items-center mb-2">
                      <span>{product.score}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(250 204 21 )"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-yellow-400 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col  text-sm font-normal text-gray-700">
                      <span>سایز{product.size}</span>
                      <span>{product.brand}</span>
                    </div>
                    <div className="relative flex justify-between items-center  text-sm   font-medium text-slate-800">
                      <div className="">
                        <span> {nf.format(product.price)}</span>
                        <span>ریال</span>
                      </div>

                      {productCouter.id === product.id &&
                      productCouter.display ? (
                        <>
                          <div className="flex absolute left-0 -top-1 w-24 h-8 bg-white justify-between  items-center border-solid border  rounded-sm z-[1001]">
                            <span
                              onClick={() =>
                                dispatch(addProductToCart(product))
                              }
                            >
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
                            <span className="text-red-500">
                              {product.quantity}
                            </span>
                            <span
                              onClick={() =>
                                dispatch(removeProductFromCart(product))
                              }
                            >
                              {product.quantity > 1 ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="rgb(239 68 68)"
                                  className="w-6 h-6"
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
                          <div
                            onClick={reset}
                            className="fixed inset-0 z-[999]"
                          ></div>
                        </>
                      ) : (
                        ""
                      )}
                      <button
                        id={product.id}
                        onClick={() => addProducttHandler(product)}
                        className=" rounded-full w-6 h-6 flex items-center justify-center bg-red-500  text-white z-[1000]"
                      >
                        {checkInCart(cart, product) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 "

                            //onMouseLeave={() => setShow(false)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6   hover:rotate-180    transition-all duration-500 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        )}

                        {/* {checkInCart(cart,product)?"incart":"add"} */}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
