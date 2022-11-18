import { useEffect, useRef, useState } from "react";
import CheckBox from "./CheckBox";
import Chevron from "./Chevron";

import { useProductsActions } from "./Providers/ProductProvider";

const initialState = [
  { id: "size", isopen: false },
  { id: "brand", isopen: false },
  { id: "price", isopen: false },
];
const Filter = () => {
  const dispatch = useProductsActions();

  const [filterState, setFilterState] = useState(initialState);
  const [isShow, setIsShow] = useState(false);
  const [filterItems, setFilterItems] = useState([]);

  const chevronHandler = (e) => {
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

  const cancelFilter = () => {
    setIsShow((current) => !current);
    dispatch({ type: "filter", event: "" });
    setFilterItems([]);
  };

  const inputChangeHandler = (e) => {
    // console.log( sizeRef.current.id);
    // console.log(brandRef.current.id);

    // const _value = e.currentTarget.value;
    // if (filterItems.some((x) => x.item === _value)) {
    //   const _filteredItems = filterItems.filter((i) => i.item !== _value);
    //   setFilterItems(_filteredItems);
    // } else setFilterItems([...filterItems, { item: _value, isChecked: true }]);

    const _value = e.currentTarget.value;
    const _section = e.target.parentElement.parentElement.id;
    //console.log(_section);
    let _filteredItems = [];

    if (filterItems.some((obj) => obj.brand === _value)) {
      _filteredItems = filterItems.filter((i) => i.brand !== _value);
      setFilterItems(_filteredItems);
    } else if (filterItems.some((obj) => obj.size === _value)) {
      _filteredItems = filterItems.filter((i) => i.size !== _value);
      setFilterItems(_filteredItems);
    }

    else

      setFilterItems([...filterItems, { [_section]: _value, isChecked: true }]);
  };

  const filterHandler = () => {
    dispatch({ type: "filter", event: filterItems });
    setIsShow(false);
  };

  return (
    <>
      <div onClick={openFilterPageHandler} className="flex mb-4">
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>

        <span>فیلترها</span>
      </div>
      {isShow && (
        <div className=" p-4  bg-white  fixed overflow-scroll inset-0 ">
          <div className="flex justify-between items-start mb-6 font-medium">
            <p className="">فیلترها</p>

            <p className="text-red-500" onClick={cancelFilter}>
              لغو فیلتر
            </p>
            {/* <p className="text-blue-500" onClick={openFilterPageHandler}>بازگشت</p> */}
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
              onClick={chevronHandler}
              className="flex justify-between items-center mb-4"
            >
              <p>سایز</p>
              <Chevron filterState={filterState} Section={"size"} />
            </div>
            <div>
              {filterState.find((i) => i.id === "size").isopen && (
                <div id="size" className="flex flex-col duration-300 text-sm">
                  <CheckBox
                    _onclick={inputChangeHandler}
                    filterItems={filterItems}
                    _value={"38"}
                  />
                  <CheckBox
                    _onclick={inputChangeHandler}
                    filterItems={filterItems}
                    _value={"39"}
                  />
                  <CheckBox
                    _onclick={inputChangeHandler}
                    filterItems={filterItems}
                    _value={"40"}
                  />
                  <CheckBox
                    _onclick={inputChangeHandler}
                    filterItems={filterItems}
                    _value={"41"}
                  />
                  <CheckBox
                    _onclick={inputChangeHandler}
                    filterItems={filterItems}
                    _value={"42"}
                  />
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
              id="brand"
              onClick={chevronHandler}
              className="flex justify-between items-center mb-4"
            >
              <p>برند</p>
              <Chevron filterState={filterState} Section={"brand"} />
            </div>
            <div>
              {filterState.find((i) => i.id === "brand").isopen && (
                <div id="brand" className="flex flex-col duration-300 text-sm">
                  <CheckBox
                    _onclick={inputChangeHandler}
                    filterItems={filterItems}
                    _value={"Nike"}
                  />
                  <CheckBox
                    _onclick={inputChangeHandler}
                    filterItems={filterItems}
                    _value={"Adidas"}
                  />
                  <CheckBox
                    _onclick={inputChangeHandler}
                    filterItems={filterItems}
                    _value={"Puma"}
                  />
                  <CheckBox
                    _onclick={inputChangeHandler}
                    filterItems={filterItems}
                    _value={"Fila"}
                  />
                </div>
              )}
            </div>
          </div>
          {/* Price menu */}
          <div
            id="price"
            onClick={chevronHandler}
            className={`flex flex-col ${
              filterState.find((i) => i.id === "price").isopen
                ? "border-0"
                : "border-b-2"
            }   mb-6`}
          >
            <div className="flex justify-between items-center mb-4">
              <p>محدوده قیمت</p>
              <Chevron filterState={filterState} Section={"price"} />
            </div>
            <div>
              {filterState.find((i) => i.id === "price").isopen && (
                <div className="flex flex-col duration-300 text-sm"></div>
              )}
            </div>
          </div>
          <div>
            <button
              onClick={filterHandler}
              className="bg-blue-400 rounded-sm py-1 px-2"
            >
              جستجو
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
