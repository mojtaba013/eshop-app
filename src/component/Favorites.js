const Favorite = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  let priceFormat = new Intl.NumberFormat();
  
  return favorites.map((favorite) => {
    return (
      <div
        className="flex w-full sm:flex-col   md:p-4 border-solid border lg:hover:shadow-[0_2px_8px_0_rgba(0,0,0,0.2)] cursor-pointer"
        key={favorite.id}
      >
        <div className="flex justify-center items-center w-36  xs:w-48 sm:w-full md:aspect-w-3 md:aspect-h-2">
          <img
            className="w-full h-auto object-cover "
            src={require(`../assets/images/${favorite.image}`)}
            alt=""
          />
        </div>
        <div className="flex flex-1 p-2 lg:p-0 flex-col  ">
          <div className="font-medium text-right pt-2 mb-5">
            <span className="font-bold text-slate-800 text-sm  md:text-base">
              {favorite.name}
            </span>
          </div>
          <div className="flex justify-end items-center mb-2">
            <span>{favorite.score}</span>
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
            <span>سایز{favorite.size}</span>
            <span>{favorite.brand}</span>
          </div>
          <div className="relative flex justify-between items-center  text-sm   font-medium text-slate-800">
            <div className="">
              <span> {priceFormat.format(favorite.price)}</span>
              <span>ریال</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Favorite;
