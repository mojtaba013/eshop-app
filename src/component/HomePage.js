import { useContext } from "react";

import Filter from "./Filter";
import NavBar from "./Navbar";
import { useProducts } from "./Providers/ProductProvider";
import Sort from "./Sort";

const HomePage = () => {
  let nf = new Intl.NumberFormat();

  const _Products = useProducts();

  return (
    <div className=" w-full flex flex-row justify-center items-start px-4 gap-4">
      <section className=" border-solid border-2 rounded-sm min-h-screen hidden lg:block lg:w-1/4">
        <Filter />
      </section>
      <div className="flex flex-col w-full  lg:w-3/4 ">
        <div className="flex ">
          <div className="lg:hidden">
            <Filter />
          </div>
          <Sort />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {_Products.map((product) => {
            //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            return (
              <div
                className="flex w-full sm:flex-col  md:p-4 border-solid border lg:hover:shadow-[0_2px_8px_0_rgba(0,0,0,0.2)] cursor-pointer"
                key={product.id}
              >
                <div className="w-40  sm:w-full sm:h-auto">
                  <img
                    className="w-full object-cover "
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
                      <span>سایز{product.size}</span>
                      <span>برند{product.brand}</span>
                      <span> {nf.format(product.price)}</span>
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
