import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";

import Filter from "./Filter";
import NavBar from "./Navbar";

import { useSelector, useDispatch } from "react-redux";
import Sort from "./Sort";
import { addProductToCart, saveToLocalStorage } from "../Features/CartSlice";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  let nf = new Intl.NumberFormat();
  // const _products = useProducts();
  // const dispatch = useCartAction();
  const _products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  //const { cart } = useCart();
  const { cart } = useSelector((state) => state.cart);

  const addProducttHandler = (prd) => {
    // toast.success(`${_product.name} به سبد خرید شما اضافه شد`);
    //dispatch({ type: "ADD_TO_CART", payload: _product });
    dispatch(addProductToCart(prd));
    //dispatch(saveToLocalStorage(cart))
    //localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(()=>{
  if(cart.length>0)
    //localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(saveToLocalStorage(cart))
  },[cart])

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
                    <div className="flex justify-between items-center  text-sm   font-medium text-slate-800">
                      <div className="">
                        <span> {nf.format(product.price)}</span>
                        <span>ریال</span>
                      </div>

                      <button
                        id={product.id}
                        onClick={() => addProducttHandler(product)}
                        className="rounded-full w-6 h-6 flex items-center justify-center bg-red-500  text-white"
                      >
                        {checkInCart(cart, product) ? (
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
                            className="w-6 h-6  hover:rotate-180 transition-all duration-500"
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
