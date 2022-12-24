import { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import Chevron from "./Chevron";
import "react-input-range/lib/css/index.css";
import { useProductsActions } from "../Providers/ProductProvider";
import { object } from "yup";

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

  const removeFilters = () => {
    setFilterItems([{ price: 0 }]);
    dispatch({ type: "filter", event: "" });
    dispatch({ type: "sort", event: "cheap" });
    setIsShow((current) => !current);
  };

  const filterStateHandler = (e) => {
    const _value = e.currentTarget.value;
    const _section = e.target.id;
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

  const priceHandler = (e) => {
    setPriceValue(e.target.value);
  };

  useEffect(() => {
    setFilterItems([...filterItems, { price: 0 }]);
  }, []);

  useEffect(() => {
    setFilterItems((current) =>
      current.map((obj) => {
        return { ...obj, price: priceValue };
      })
    );
  }, [priceValue]);

  const filterHandler = () => {
    dispatch({ type: "filter", event: filterItems });
    dispatch({ type: "sort", event: "cheap" });
    setIsShow((current) => !current);
  };

  return (
    <>
      {/* mobile plan */}
      <div className="flex mb-4 lg:hidden">
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
          <div className=" p-4  bg-white  fixed overflow-scroll inset-0   w-full  ">
            <div className="flex justify-between items-start mb-6 font-medium ">
              <div className="flex items-center gap-x-1">
                <p className="">فیلترها</p>
                {filterItems.filter((obj, i) => i !== 0 || obj.price > 0)
                  .length > 0 && (
                  <span className="bg-red-600 w-5 h-5 rounded text-white flex items-center justify-center pt-[2px]">
                    {
                      filterItems.filter((obj, i) => i !== 0 || obj.price > 0)
                        .length
                    }
                  </span>
                )}
              </div>
              <p
                className="text-red-500 cursor-pointer"
                onClick={removeFilters}
              >
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
                  <div className="flex flex-col duration-300 text-sm">
                    <CheckBox
                      _onclick={filterStateHandler}
                      filterItems={filterItems}
                      _value={"38"}
                      id="size"
                    />
                    <CheckBox
                      _onclick={filterStateHandler}
                      filterItems={filterItems}
                      _value={"39"}
                      id="size"
                    />
                    <CheckBox
                      _onclick={filterStateHandler}
                      filterItems={filterItems}
                      _value={"40"}
                      id="size"
                    />
                    <CheckBox
                      _onclick={filterStateHandler}
                      filterItems={filterItems}
                      _value={"41"}
                      id="size"
                    />
                    <CheckBox
                      _onclick={filterStateHandler}
                      filterItems={filterItems}
                      _value={"42"}
                      id="size"
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
                  <div className="flex flex-col duration-300 text-sm">
                    <CheckBox
                      _onclick={filterStateHandler}
                      filterItems={filterItems}
                      _value={"Nike"}
                      id="brand"
                    />
                    <CheckBox
                      _onclick={filterStateHandler}
                      filterItems={filterItems}
                      _value={"Adidas"}
                      id="brand"
                    />
                    <CheckBox
                      _onclick={filterStateHandler}
                      filterItems={filterItems}
                      _value={"Puma"}
                      id="brand"
                    />
                    <CheckBox
                      _onclick={filterStateHandler}
                      filterItems={filterItems}
                      _value={"Fila"}
                      id="brand"
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
                className="bg-red-400 rounded-sm py-1 px-2 w-full text-white "
              >
                جستجو
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Desktop plan */}
      <div className="  hidden lg:flex lg:flex-col mb-4  p-2  ">
        <div className="flex justify-between items-start mb-6 font-medium ">
          <div className="flex items-center gap-x-1">
            <p className="">فیلترها</p>
            {filterItems.filter((obj, i) => i !== 0 || obj.price > 0).length >
              0 && (
              <span className="bg-red-600 w-5 h-5 rounded text-white flex items-center justify-center pt-[2px]">
                {
                  filterItems.filter((obj, i) => i !== 0 || obj.price > 0)
                    .length
                }
              </span>
            )}
          </div>
          <p className="text-red-500 cursor-pointer" onClick={removeFilters}>
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
              <div className="flex flex-col duration-300 text-sm">
                <CheckBox
                  _onclick={filterStateHandler}
                  filterItems={filterItems}
                  _value={"38"}
                  id="size"
                />
                <CheckBox
                  _onclick={filterStateHandler}
                  filterItems={filterItems}
                  _value={"39"}
                  id="size"
                />
                <CheckBox
                  _onclick={filterStateHandler}
                  filterItems={filterItems}
                  _value={"40"}
                  id="size"
                />
                <CheckBox
                  _onclick={filterStateHandler}
                  filterItems={filterItems}
                  _value={"41"}
                  id="size"
                />
                <CheckBox
                  _onclick={filterStateHandler}
                  filterItems={filterItems}
                  _value={"42"}
                  id="size"
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
              <div className="flex flex-col duration-300 text-sm">
                <CheckBox
                  _onclick={filterStateHandler}
                  filterItems={filterItems}
                  _value={"Nike"}
                  id="brand"
                />
                <CheckBox
                  _onclick={filterStateHandler}
                  filterItems={filterItems}
                  _value={"Adidas"}
                  id="brand"
                />
                <CheckBox
                  _onclick={filterStateHandler}
                  filterItems={filterItems}
                  _value={"Puma"}
                  id="brand"
                />
                <CheckBox
                  _onclick={filterStateHandler}
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
                    id="price"
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
            className="bg-red-400 rounded-sm py-1 px-2 w-full text-white "
          >
            مشاهده کالا
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
