import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import checkInCart from "../common/CheckInCart";
import { addProductToCart, removeProductFromCart } from "../Features/CartSlice";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;
  let priceFormat = new Intl.NumberFormat();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center top-[calc(100vh_-_5vh)] ">
      <div className=" flex  flex-col md:flex-row w-full max-w-screen-xl md:p-4 md:px-8 xl:px-10 gap-x-6 gap-y-4 mb-[calc(100vh_-_85vh)]  lg:mb-0">
        <div className="flex h-auto flex-col  md:w-3/4 w-full border-b-2 md:border-2 border-gray-200 md:rounded-lg">
          <div className="flex items-center justify-between p-4">
            <p className=" font-bold">{product.name}</p>
            <NavLink to="/">
              <p className="text-blue-400 text-sm">برگشت</p>
            </NavLink>
          </div>
          <div className="flex flex-col flex-grow-0 items-center justify-center  xm:flex-row ">
            <div className="flex justify-center items-center  w-[250px] h-auto ">
              <img
                className="w-full h-auto object-cover "
                src={require(`../assets/images/${product.image}`)}
                alt=""
              />
            </div>
            <div className=" w-full p-4 ">
              <div className="flex flex-col gap-y-2">
                <div>
                  <h3 className="font-bold text-slate-800">ویژگی ها</h3>
                </div>
                <div className="flex gap-x-1 ">
                  <p className="text-gray-400 text-sm">کفی :</p>
                  <p className="text-gray-800 text-sm font-bold">قابل تعویض</p>
                </div>
                <div className="flex gap-x-1">
                  <p className="text-gray-400 text-sm ">
                    نحوه بسته شدن کفش :{" "}
                    <span className="text-gray-800 text-sm font-bold">
                      یکسره
                    </span>
                  </p>
                </div>
                <div className="flex gap-x-1">
                  <p className="text-gray-400 text-sm ">
                    ویژگی‌های زیره :{" "}
                    <span className="text-gray-800 text-sm font-bold">
                      انعطاف پذیر، مقاوم در برابر سایش
                    </span>
                  </p>
                </div>
                <div className="flex gap-x-1 items-start ">
                  <p className="text-gray-400 text-sm ">
                    ویژگی‌های تخصصی کفش :{" "}
                    <span className="text-gray-800 text-sm font-bold">
                      قابلیت گردش هوا
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:border-2 border-gray-200 md:rounded-lg md:w-1/4 md:p-4 ">
          <div className="flex flex-col gap-y-2 md:gap-y-4 ">
            <div>
              <h2 className="font-bold">فروشنده : دیجی تایز</h2>
            </div>
            <div className="flex items-center gap-x-1 text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="icons"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"></path>
                <path d="M378.4 475.1a35.91 35.91 0 0 0-50.9 0 35.91 35.91 0 0 0 0 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7 378.4 475.1z"></path>
              </svg>
              <span>گارانتی سلامت فیزیکی کالا</span>
            </div>

            <div className="flex items-center gap-x-1 text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="icons"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 5c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.424c.618-.735 1-1.692 1-2.746V5zm-2 0v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1zM10 4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2V4zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831V5zm6 14v-3h4v3h-4zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.131c.254.067.517.111.787.125A3.988 3.988 0 0 0 9 10.643c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357a3.988 3.988 0 0 0 3.213 1.351c.271-.014.533-.058.787-.125V19h-3z"></path>
              </svg>
              <span>موجود در انبار</span>
            </div>
            <div className="flex items-center gap-x-1 text-sm  ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="icons purple"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                </g>
              </svg>
              <span>ارسال سریع</span>
            </div>
          </div>
          {/* Desktop mode */}
          <div className="hidden md:block ">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm">قیمت</span>
              <span>{priceFormat.format(product.price)} ریال</span>
            </div>

            {checkInCart(cart, product) ? (
              <button
                onClick={() => dispatch(removeProductFromCart(product))}
                className="bg-white border transition-all ease-in-out duration-300 font-bold border-red-500 w-full rounded-lg px-4 py-2 text-sm text-red-500"
              >
                {" "}
                حذف از سبد خرید{" "}
              </button>
            ) : (
              <button
                onClick={() => dispatch(addProductToCart(product))}
                className="bg-red-500 border transition-all ease-in-out duration-300 border-red-500 w-full rounded-lg px-4 py-2 text-sm text-white"
              >
                {" "}
                اضافه به سبد خرید{" "}
              </button>
            )}
          </div>
        </div>
      </div>{" "}
      {/* mobile Mode */}
      <div className="flex justify-between items-center bg-white z-10 fixed bottom-0 border-t-2 w-full p-4 md:hidden">
        {/* <button className="bg-red-500 rounded-lg px-4 py-2 text-sm text-white">
          اضافه به سبد خرید
        </button> */}
        {checkInCart(cart, product) ? (
          <button
            onClick={() => dispatch(removeProductFromCart(product))}
            className="bg-white border  border-red-500 transition-all ease-in-out duration-300 rounded-lg px-4 py-2 text-sm font-bold text-red-500"
          >
            {" "}
            حذف از سبد خرید{" "}
          </button>
        ) : (
          <button
            onClick={() => dispatch(addProductToCart(product))}
            className="bg-red-500 border border-red-500 transition-all ease-in-out duration-300 rounded-lg px-4 py-2 text-sm text-white "
          >
            {" "}
            اضافه به سبد خرید{" "}
          </button>
        )}
        <span>{priceFormat.format(product.price)} ریال</span>
      </div>
    </div>
  );
};

export default ProductDetail;
