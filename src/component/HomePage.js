import { parse } from "postcss";
import * as data from "../data";

const HomePage = () => {
  return (
    <div className=" w-full flex flex-row-reverse justify-center items-start px-4 gap-4">
      <section className="bg-red-200 w-1/4 min-h-screen">sidebar</section>
      <div className="flex flex-col w-3/4">
        <section className="flex justify-end items-center  mb-4 ">
          <div>
            {" "}
            <ul className="flex ">
              <li className="pr-5 text-sm font-medium text-gray-500 ">ارزان ترین</li>
              <li className="pr-5 text-sm font-medium text-gray-500 ">گران ترین</li>
              <li className="pr-5 text-sm font-medium text-gray-500 ">پرفروش ترین</li>
              
            </ul>
          </div>
          <div className=" flex justify-center items-center">
            <span className=" text-sm font-medium">:مرتب سازی</span>
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
          </div>
        </section>
        <section className="grid grid-cols-3   ">
          {data.products.map((product) => {
            //console.log("img :",product.image);
         ;
            return (
              <div
                className="p-4 border-solid border hover:shadow-xl cursor-pointer"
                key={product.id}
              >
                <div>
                  <img className="w-full h-64" src={require(`../assets/images/${product.image}`)} alt="" />
                </div>
                <div className="font-medium text-right pt-3">
                  {" "}
                  <p>{product.name}</p>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <p> تومان {product.price}</p>
                  <button className="bg-blue-100 py-2 px-4">add to cart</button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
