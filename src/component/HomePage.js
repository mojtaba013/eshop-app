import * as data from "../data";
import Filter from "./Filter";
import NavBar from "./Navbar";

const HomePage = () => {
  return (
    <div className=" w-full flex flex-row justify-center items-start px-4 gap-4">
      <section className="bg-red-200  min-h-screen hidden lg:block lg:w-1/4">
        sidebar
      </section>
      <div className="flex w-full flex-col lg:w-3/4 ">
        {/* Navbar */}
        <nav className="hidden  lg:flex justify-start items-center  mb-4 ">
          <div className=" flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>
            <span className=" text-sm font-medium">مرتب سازی:</span>
          </div>
          <div>
            <ul className="flex ">
              <li className="pr-5 text-sm font-medium text-gray-500 ">
                ارزان ترین
              </li>
              <li className="pr-5 text-sm font-medium text-gray-500 ">
                گران ترین
              </li>
              <li className="pr-5 text-sm font-medium text-gray-500 ">
                پرفروش ترین
              </li>
            </ul>
          </div>
        </nav>
        {<NavBar />}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {data.products.map((product) => {
            //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            return (
              <div
                className="flex w-full sm:flex-col  md:p-4 border-solid border hover:shadow-[0_2px_8px_0_rgba(0,0,0,0.2)] cursor-pointer"
                key={product.id}
              >
                <div className="w-40  h-auto sm:w-full sm:h-auto">
                  <img
                    className="w-full h-32 sm:h-auto"
                    src={require(`../assets/images/${product.image}`)}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col text-sm  md:text-base ">
                  <div className="font-medium text-right pt-2 mb-5">
                    <span>{product.name}</span>
                  </div>
                  <div className="flex justify-between items-center px-1 ">
                    <div className="flex flex-col ">
                      <span>قیمت به تومان</span>
                      <span> {product.price}</span>
                    </div>

                    <button className="bg-blue-100 py-1 px-2">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
