
const Navigation = () => {
  return (
    <div className=" flex flex-row py-2 px-4 justify-between items-center border border-b-2 mb-7">
      <div>
        <p className="font-bold cursor-pointer text-red-500">فروشگاه</p>
      </div>
      <div className="flex gap-5">
        <div className="relative flex justify-center items-center ">
          <span className="absolute flex justify-center items-center text-white pt-[3px] rounded-full w-5 h-5 bg-red-500 -top-1.5 -right-2">
            0
          </span>
          <img
            src={require("../assets/icons/icons8-shopping-cart-32.png")}
            alt=""
          />
        </div>
        <div className="flex justify-between  text-sm items-center border-2 rounded-md py-1 px-2 font-medium text-slate-700">
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          <div className="flex cursor-pointer">
            <span>ورود</span>
          </div>
          <span className="pr-1 pl-1 text-gray-300">|</span>
          <span className="cursor-pointer">ثبت نام</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
