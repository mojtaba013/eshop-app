import { useEffect, useRef, useState } from "react";
import CheckBox from "./CheckBox";
import Chevron from "./Chevron";
import "react-input-range/lib/css/index.css";
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
  const [priceValue, setPriceValue] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setScreenSize(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
      if (screenSize >= 1024) setIsShow(true);
    };
  }, []);

  const priceHandler = (e) => {
    console.log(e.target.value);
    setPriceValue(e.target.value);
    setFilterItems((current) =>
      current.map((obj) => {
        return { ...obj, price: e.target.value };
      })
    );
  };

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
    setFilterItems([]);
    dispatch({ type: "filter", event: "" });

    if (screenSize >= 1024) setIsShow(true);
    else setIsShow((current) => !current);
  };

  const inputChangeHandler = (e) => {
    const _value = e.currentTarget.value;
    const _section = e.target.parentElement.parentElement.id;
    let _filteredItems = [];
    if (filterItems.some((obj) => obj.brand === _value)) {
      _filteredItems = filterItems.filter((i) => i.brand !== _value);
      setFilterItems(_filteredItems);
    } else if (filterItems.some((obj) => obj.size === _value)) {
      _filteredItems = filterItems.filter((i) => i.size !== _value);
      setFilterItems(_filteredItems);
    } else
      setFilterItems([
        ...filterItems,
        { [_section]: _value, isChecked: true, price: priceValue },
      ]);
  };

  const filterHandler = () => {
    dispatch({ type: "filter", event: filterItems });
    if (screenSize >= 1024) setIsShow(true);
    else setIsShow(false);
  };

  return (
    <>
      <div className="flex mb-4 relative">
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

        <span onClick={openFilterPageHandler}>فیلترها</span>
        {isShow && (
          <div className=" p-4  bg-white  fixed overflow-scroll inset-0 lg:inset-auto lg:absolute w-full lg:overflow-auto  ">
            <div className="flex justify-between items-start mb-6 font-medium ">
              <div className="flex items-center gap-x-1">
                <p className="">فیلترها</p>
               {filterItems.length>0 &&( <span className="bg-red-600 w-5 h-5 rounded text-white flex items-center justify-center pt-[2px]">
                  {filterItems.length}
                </span>)}
              </div>
              <p className="text-red-500 cursor-pointer" onClick={cancelFilter}>
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
                onClick={chevronHandler}
                className="flex justify-between items-center mb-4 cursor-pointer"
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
                className="flex justify-between items-center mb-4 cursor-pointer"
              >
                <p>برند</p>
                <Chevron filterState={filterState} Section={"brand"} />
              </div>
              <div>
                {filterState.find((i) => i.id === "brand").isopen && (
                  <div
                    id="brand"
                    className="flex flex-col duration-300 text-sm"
                  >
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
              className={`flex flex-col ${
                filterState.find((i) => i.id === "price").isopen
                  ? "border-0"
                  : "border-b-2"
              }   mb-6`}
            >
              <div
                id="price"
                onClick={chevronHandler}
                className="flex justify-between items-center mb-4 cursor-pointer"
              >
                <p>محدوده قیمت</p>
                <Chevron filterState={filterState} Section={"price"} />
              </div>
              <div>
                {filterState.find((i) => i.id === "price").isopen && (
                  <div className="flex flex-col duration-300 text-sm ">
                    <div className="flex flex-col">
                      <input
                        className="w-full mt-6"
                        type="range"
                        min="0"
                        max="10000000"
                        step="1000000"
                        value={priceValue}
                        onChange={priceHandler}
                      />
                      <div className="flex justify-between items-center">
                        <p>از 0</p>
                        <p>تا {priceValue} ریال</p>
                      </div>
                    </div>
                  </div>
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
      </div>
    </>
  );
};

export default Filter;
