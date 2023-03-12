import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { sort } from "../Features/ProductSlice";

const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const sortHandler = (e) => {
    searchParams.set("sort", e.target.id);
    setSearchParams(searchParams);
    //console.log(Object.fromEntries([...searchParams]));
    dispatch(sort(Object.fromEntries([...searchParams])));
    setIsOpen((c) => !c);
  };

  const selectedItem =
    Object.fromEntries([...searchParams]).sort || "cheap";

  const sortModalHandler = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    dispatch(sort(Object.fromEntries([...searchParams])));
  }, []);

  // useEffect(() => {
  //   if (notInitialRender.current) {
  //     //const _sortItem = searchParams.get("sort");
  //     // console.log("_sortItem=", _sortItem, "selectedItem=", selectedItem);

  //     searchParams.set("sort", selectedItem);
  //     setSearchParams(searchParams);
  //     dispatch(sort(Object.fromEntries([...searchParams])));
  //   } else {
  //     notInitialRender.current = true;
  //   }
  // }, [selectedItem]);

  return (
    <>
      {/* mobile mode */}
      <div className="flex mr-6 lg:hidden">
        <div className="flex" onClick={sortModalHandler}>
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
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
            />
          </svg>
          <span>{selectedItem}</span>
        </div>
        {
          <div
            className={`fixed bg-white  z-[1004] bottom-0 right-0 left-0 p-4 ${
              isOpen
                ? "h-full translate-y-0  duration-500"
                : "h-0   translate-y-full  duration-500"
            }  `}
          >
            <div className="flex justify-between items-center mb-8  ">
              <span className="font-medium ">مرتب سازی بر اساس :</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                onClick={sortModalHandler}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="flex mb-4 border-b gap-x-2" onClick={sortHandler}>
              <input
                type="radio"
                name="sort"
                value="cheap"
                id="ارزانترین"
                defaultChecked={selectedItem === "ارزانترین"}
              />
              <label> ارزانترین</label>
            </div>
            <div className="flex mb-4 border-b gap-x-2" onClick={sortHandler}>
              <input
                type="radio"
                name="sort"
                value="expensive"
                id="گرانترین"
                defaultChecked={selectedItem === "گرانترین"}
              />
              <label> گرانترین</label>
            </div>
            <div className="flex mb-4 border-b gap-x-2" onClick={sortHandler}>
              <input
                type="radio"
                name="sort"
                value="Bestselling"
                id="پرفروشترین"
                defaultChecked={selectedItem === "پرفروشترین"}
              />
              <label>پرفروشترین</label>
            </div>
          </div>
        }
      </div>
      {/* desktop mode */}
      <div className="lg:flex items-center justify-start">
        <nav className="hidden  lg:flex justify-center gap-x-3  mb-4  ">
          <div className=" flex justify-center items-center">
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
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>
            <span className=" text-sm font-bold text-slate-800">
              مرتب سازی:
            </span>
          </div>
          <div className="flex items-center  justify-center font-bold text-sm text-gray-500 gap-x-3">
            <div className="flex relative ">
              <input
                className="absolute opacity-0  w-full cursor-pointer"
                type="radio"
                name="sort"
                value="cheap"
                id="cheap"
                onClick={sortHandler}
              />
              <label
                className={` ${
                  selectedItem === "cheap" ? "text-red-500" : ""
                }`}
              >
                {" "}
                ارزانترین
              </label>
            </div>
            <div className="flex relative ">
              <input
                className="absolute opacity-0 w-full cursor-pointer"
                type="radio"
                name="sort"
                value="expensive"
                id="expensive"
                onClick={sortHandler}
              />
              <label
                className={` ${
                  selectedItem === "expensive" ? "text-red-500" : ""
                }`}
              >
                {" "}
                گرانترین
              </label>
            </div>
            <div className="flex relative ">
              <input
                className="absolute opacity-0 w-full cursor-pointer"
                type="radio"
                name="sort"
                value="Bestselling"
                id="پرفروشترین"
                onClick={sortModalHandler}
              />
              <label
                className={` ${
                  selectedItem === "Bestselling" ? "text-red-500" : ""
                }`}
              >
                پرفروشترین
              </label>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sort;
