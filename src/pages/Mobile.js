const Mobile = () => {
  return (
    <div className="">
      <ul className="flex flex-col h-[440px] flex-wrap ">
        <li className="w-1/5">
          <div className="flex items-center text-slate-800 text-sm font-bold  gap-x-2 hover:text-red-500 mb-2">
            <span className="text-red-500">|</span>
            <span className="">برندهای مختلف گوشی</span>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3 font-bold hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <ul className="flex flex-col text-gray-500 text-sm gap-y-2">
            <li>اپل</li>
            <li>سامسونگ</li>
            <li>شیائومی</li>
          </ul>
        </li>
      
      

      </ul>
    </div>
  );
};

export default Mobile;
