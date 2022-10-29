import * as data from "../data";
const HomePage = () => {

  return (
    <div className=" w-full flex flex-row-reverse justify-center items-start px-4 gap-4">
      <section className="bg-red-200 w-1/4 min-h-screen">sidebar</section>
      <section className="grid grid-cols-3  w-3/4 ">
        {data.products.map((product) => {
          return (
              <div className="p-4 border-solid border hover:shadow-xl cursor-pointer" key={product.id}>
                <div >
                  <img className="w-full h-64" src={product.image} alt="" />
                </div>
                
                <div className="flex justify-between items-center">
                  <p>{product.price}</p>
                  <p>{product.name}</p>
                </div>
              </div>

          );
        })}
      </section>
    </div>
  );
};

export default HomePage;
