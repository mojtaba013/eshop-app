import { useState } from "react";
import * as data from "../data";

const arr = [
  { id: "size", isopen: false },
  { id: "brand", isopen: false },
  { id: "price", isopen: false },
];
const Filter = () => {
  const [filterState, setFilterState] = useState(arr);
  const [isShow, setIsShow] = useState(false);

  const changeHandler = (e) => {
    const _id = e.currentTarget.id;
    const updateState = [...filterState];
    const index = filterState.findIndex((item) => item.id === _id);
    const selectedItem = { ...filterState[index] };
    selectedItem.isopen = !selectedItem.isopen;
    updateState[index] = selectedItem;
    setFilterState(updateState);
  };

  const openFilterPageHandler = () => {
    setIsShow((current) => !current);
  };

 

  return (
    <>
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
          {/* Size Menu */}
          <div
            className={`flex flex-col  ${
              filterState.find((i) => i.id === "size").isopen
                ? "border-0"
                : "border-b-2"
            }  mb-4`}
          >
            <div
              id="size"
              onClick={changeHandler}
              className="flex justify-between items-center mb-4"
            >
              <p>سایز</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${
                  filterState.find((i) => i.id === "size").isopen
                    ? "rotate-180"
                    : "rotate-0"
                }  transition-all duration-500 `}
              >
                at
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div>
              {filterState.find((i) => i.id === "size").isopen && (
                <div className="flex flex-col duration-300 text-sm">
                  <div className="border-b mb-5 pb-1">
                    <input
                      type="checkbox"
                      name="chk"
                      value="38"
                      className="rounded border-gray-300 focus:ring-blue-500"
                    />{" "}
                    سایز 38
                  </div>
                  <div className="border-b mb-5 pb-1">
                    <input
                      type="checkbox"
                      name="chk"
                      value="39"
                      className="rounded border-gray-300 focus:ring-blue-500"
                    />{" "}
                    سایز 39
                  </div>
                  <div className="border-b mb-5 pb-1">
                    <input
                      type="checkbox"
                      name="chk"
                      value="40"
                      className="rounded border-gray-300 focus:ring-blue-500"
                    />{" "}
                    سایز 40
                  </div>
                  <div className="border-b mb-5 pb-1">
                    <input
                      type="checkbox"
                      name="chk"
                      value="41"
                      className="rounded border-gray-300 focus:ring-blue-500"
                    />{" "}
                    سایز 41
                  </div>
                  <div className="border-b mb-5 pb-1">
                    <input
                      type="checkbox"
                      name="chk"
                      value="42"
                      className="rounded border-gray-300 focus:ring-blue-500"
                    />{" "}
                    سایز 42
                  </div>
                  <div className=" mb-5 pb-1">
                    <input
                      type="checkbox"
                      name="chk"
                      value="43"
                      className="rounded border-gray-300 focus:ring-blue-500"
                    />{" "}
                    سایز 43
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Brand menu */}
          <div
            className={`flex flex-col ${
              filterState.find((i) => i.id === "brand").isopen
                ? "border-0"
                : "border-b-2"
            }   mb-4`}
          >
            <div
              onClick={changeHandler}
              id="brand"
              className="flex justify-between items-center mb-4"
            >
              <p>برند</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${
                  filterState.find((i) => i.id === "brand").isopen
                    ? "rotate-180"
                    : "rotate-0"
                }  transition-all duration-500 `}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div>
              {filterState.find((i) => i.id === "brand").isopen && (
                <div className="flex flex-col duration-300 text-sm">
                  <div className="border-b mb-5 pb-1">
                    <input
                      type="checkbox"
                      name="chk"
                      value="38"
                      className="rounded border-gray-300 focus:ring-blue-500"
                    />{" "}
                    نایک
                  </div>
                  <div className="border-b mb-5 pb-1">
                    <input
                      type="checkbox"
                      name="chk"
                      value="39"
                      className="rounded border-gray-300 focus:ring-blue-500"
                    />{" "}
                    آدیداس
                  </div>
                  <div className="border-b mb-5 pb-1">
                    <input
                      type="checkbox"
                      name="chk"
                      value="40"
                      className="rounded border-gray-300 focus:ring-blue-500"
                    />{" "}
                    کفش ملی!
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Price menu */}
          <div
            id="price"
            onClick={changeHandler}
            className={`flex flex-col ${
              filterState.find((i) => i.id === "price").isopen
                ? "border-0"
                : "border-b-2"
            }   mb-4`}
          >
            <div className="flex justify-between items-center mb-4">
              <p>محدوده قیمت</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${
                  filterState.find((i) => i.id === "price").isopen
                    ? "rotate-180"
                    : "rotate-0"
                }  transition-all duration-500 `}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div>
              {filterState.find((i) => i.id === "price").isopen && (
                <div className="flex flex-col duration-300 text-sm"></div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
