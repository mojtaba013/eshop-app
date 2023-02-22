const Mobile = () => {
  return (
    <div>
      <ul className="flex flex-col flex-wrap h-[440px] content-start gap-x-10  ">
        {/* brand */}
        <div className="relative flex w-1/5 items-center text-slate-800 text-sm font-bold  gap-x-2 hover:text-red-500 cursor-pointer mb-3 ">
          <span className="text-red-500">|</span>
          <span className="">برندهای مختلف گوشی</span>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3 h-3 font-bold hover:text-red-500 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          اپل
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          سامسونگ
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          شیائومی
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          آنر
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          هواوی
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          نوکیا
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          جی پلاس
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          وان پلاس
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          جی ال ایکس
        </span>
        {/* price */}
        <div className="flex w-1/5 items-center text-slate-800 text-sm font-bold  gap-x-2 hover:text-red-500 cursor-pointer mb-3 ">
          <span className="text-red-500">|</span>
          <span className="">گوشی بر اساس قیمت</span>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3 h-3 font-bold hover:text-red-500 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </div>

        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی تا 2 میلیون تومان
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی تا 5 میلیون تومان
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی تا 7 میلیون تومان
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی تا 15 میلیون تومان
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی بالای 15 میلیون تومان
        </span>

        {/* memory */}
        <div className="flex w-1/5 items-center text-slate-800 text-sm font-bold  gap-x-2 hover:text-red-500 cursor-pointer mb-3 ">
          <span className="text-red-500">|</span>
          <span className="">گوشی بر اساس حافظه </span>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3 h-3 font-bold hover:text-red-500 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </div>

        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی تا 16 گیگ
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی تا 32 گیگ
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی تا 64 گیگ
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی تا 128 گیگ
        </span>

        {/* resulotion */}
        <div className="flex w-1/5 items-center text-slate-800 text-sm font-bold  gap-x-2 hover:text-red-500 cursor-pointer mb-3 ">
          <span className="text-red-500">|</span>
          <span className="">رزولوشن عکس</span>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3 h-3 font-bold hover:text-red-500 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </div>

        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer ">
          تا 13 مگاپیکسل
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          تا 16 مگاپیکسل
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          تا 48 مگاپیکسل
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          تا 64 مگاپیکسل
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          تا 108 مگاپیکسل
        </span>
        {/* base on user */}

        <div className="flex w-1/5 items-center text-slate-800 text-sm font-bold  gap-x-2 hover:text-red-500 cursor-pointer mb-3 ">
          <span className="text-red-500">|</span>
          <span className="">بر اساس کاربری</span>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3 h-3 font-bold hover:text-red-500 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </div>

        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer ">
          گوشی اقتصادی
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی میان رده
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی دانش آموزی
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی گیمینگ
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          گوشی پرچمدار
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          دو سیمکارت
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          اندروید
        </span>
        <span className="text-gray-500 text-xs w-1/5 mb-3 hover:text-red-500 cursor-pointer">
          ios
        </span>
      </ul>
    </div>
  );
};

export default Mobile;
