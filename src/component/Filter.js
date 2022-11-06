import { useState } from "react";

const Filter = () => {
  const [isShow, setIsShow] = useState(false);
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [sizeRotate, setSizeRotate] = useState(0);
  const [priceRotate, setPriceRotate] = useState(0);

  const openFilterPageHandler = (e) => {
    setIsShow((current) => !current);
  };
  const openSizeOptions = () => {
    setIsOpenSize((current) => !current);
  };
  const sizeRotateHandler = () => {
    if (sizeRotate === 0 ? setSizeRotate(180) : setSizeRotate(0));
  };
  const priceRotateHandler = () => {
    if (priceRotate === 0 ? setPriceRotate(180) : setPriceRotate(0));
  };

  return (
    < >
      <div onClick={openFilterPageHandler} className="flex mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>

        <span>فیلترها</span>
      </div>
      {isShow && (
        <div className=" p-4  bg-white  fixed inset-0 ">
          <div className="flex justify-between items-start mb-6 font-medium">
            <p className="">فیلترها</p>

            <p className="text-red-500" onClick={openFilterPageHandler}>
              لغو فیلتر
            </p>
          </div>

          <div
            className="flex justify-between  border-b-2 mb-4"
            onClick={openSizeOptions}
          >
            <div className="mb-4 ">سایز</div>
            <div>
              <svg
                onClick={sizeRotateHandler}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-6 h-6 rotate-${sizeRotate} transition-all duration-500 `}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          {isOpenSize && (
            <div className="flex flex-col duration-300">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
            </div>
          )}
          <div
            className="flex justify-between border-b-2 mb-4"
            onClick={openSizeOptions}
          >
            <div className="mb-4 ">محدوده قیمت</div>
            <div>
              <svg
                onClick={priceRotateHandler}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-6 h-6 rotate-${priceRotate} transition-all duration-500 `}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

     
    </>
  );
};

export default Filter;
