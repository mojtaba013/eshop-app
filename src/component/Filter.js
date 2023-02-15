import { useState, useEffect, useRef } from "react";
import CheckBox from "./CheckBox";
import Chevron from "./Chevron";
import "react-input-range/lib/css/index.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  displayAllProducts,
  filterProducts,
  sort,
} from "../Features/ProductSlice";

const initialState = [
  { id: "size", isopen: false },
  { id: "brand", isopen: false },
  { id: "price", isopen: false },
];

const Filter = () => {
  let priceFormat = new Intl.NumberFormat();
  const [filterState, setFilterState] = useState(initialState);
  const [isShow, setIsShow] = useState(false);
  const [size, setSize] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const renderSize = useRef(false);
  const renderBrand = useRef(false);
  const renderPrice = useRef(false);

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
    setSize([]);
    setBrand([]);
    if (price === 0) {
      searchParams.delete("price");
    } else {
      setPrice(0);
    }
    dispatch(displayAllProducts());
    searchParams.delete("sort");
    setSearchParams(searchParams);
    setIsShow((current) => !current);
  };

  const sizeHandler = (e) => {
    const _size = e.currentTarget.value;
    const item = size.findIndex((i) => i === _size);
    let newSize = [];
    if (item === -1) {
      newSize = [...size, _size];
    } else {
      newSize = size.filter((i) => i !== _size);
    }
    setSize(newSize);
  };

  const brandHandler = (e) => {
    const _brand = e.currentTarget.value;
    const item = brand.findIndex((i) => i === _brand);
    let newBrand = [];
    if (item === -1) {
      newBrand = [...brand, _brand];
    } else {
      newBrand = brand.filter((i) => i !== _brand);
    }
    setBrand(newBrand);
  };

  const priceHandler = (e) => {
    const price = e.target.value;
    setPrice(price);
  };

  useEffect(() => {
    if (renderSize.current) {
      if (size.length === 0) {
        searchParams.delete("size", size);
        setSearchParams(searchParams);
      } else {
        searchParams.set("size", size);
        setSearchParams(searchParams);
      }
    } else {
      renderSize.current = true;
    }
  }, [size]);

  useEffect(() => {
    if (renderBrand.current) {
      if (brand.length === 0) {
        searchParams.delete("brand", brand);
        setSearchParams(searchParams);
      } else {
        searchParams.set("brand", brand);
        setSearchParams(searchParams);
      }
    } else {
      renderBrand.current = true;
    }
  }, [brand]);

  useEffect(() => {
    if (renderPrice.current) {
      if (price > 0) {
        searchParams.set("price", price);
        setSearchParams(searchParams);
      } else if (price <= 0) {
        searchParams.delete("price");
        setSearchParams(searchParams);
      }
    } else {
      renderPrice.current = true;
    }
  }, [price]);

  useEffect(() => {
    if (Object.keys(filters).length !== 0) dispatch(filterProducts(filters));
  }, []);

  const filters = Object.fromEntries([...searchParams]);

  const filterHandler = () => {
    console.log("clicked",filters);
    const sortBy = searchParams.get("sort") || "ارزانترین";
    dispatch(filterProducts(filters));
    //dispatch(sort({ sort: sortBy }));
    setIsShow((current) => !current);
  };

 

  return (
    <>
      {/* mobile plan */}
      <div className="flex mb-4  lg:hidden">
     <div className="flex" onClick={openFilterPageHandler}>
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

        <span >فیلترها</span>
     </div>
     
        {
          <div
            className={`fixed bg-white  z-[1004] bottom-0 right-0 left-0 p-4 ${
              isShow
                ? "h-full translate-y-0  duration-500"
                : "h-0   translate-y-full  duration-700"
            }  `}
          >
            <div className="flex justify-between items-start mb-6 font-medium ">
              <div className="flex items-center gap-x-1">
                <p className="">فیلترها</p>
                {size.length + brand.length + (price > 0 ? 1 : 0) > 0 && (
                  <span className="bg-red-600 w-5 h-5 rounded text-white flex items-center justify-center pt-[2px]">
                    {size.length + brand.length + (price > 0 ? 1 : 0)}
                  </span>
                )}
              </div>
              <p
                className="text-red-500 cursor-pointer"
                onClick={removeFilters}
              >
                حذف فیلترها
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
                      _onclick={sizeHandler}
                      filters={filters}
                      _value={"38"}
                      id="size"
                    />
                    <CheckBox
                      _onclick={sizeHandler}
                      filters={filters}
                      _value={"39"}
                      id="size"
                    />
                    <CheckBox
                      _onclick={sizeHandler}
                      filters={filters}
                      _value={"40"}
                      id="size"
                    />
                    <CheckBox
                      _onclick={sizeHandler}
                      filters={filters}
                      _value={"41"}
                      id="size"
                    />
                    <CheckBox
                      _onclick={sizeHandler}
                      filters={filters}
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
                      _onclick={brandHandler}
                      filters={filters}
                      _value={"Nike"}
                      id="brand"
                    />
                    <CheckBox
                      _onclick={brandHandler}
                      filters={filters}
                      _value={"Adidas"}
                      id="brand"
                    />
                    <CheckBox
                      _onclick={brandHandler}
                      filters={filters}
                      _value={"Puma"}
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
                        value={price}
                        onChange={priceHandler}
                      />
                      <div className="flex justify-between items-center">
                        <p>از 0</p>
                        <p>تا {price} ریال</p>
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
        }
      </div>
      {/* Desktop plan */}
      <div className="    hidden lg:flex lg:flex-col mb-4  p-2  ">
        <div className="flex justify-between items-start mb-6 font-medium ">
          <div className="flex items-center gap-x-1">
            <p className="">فیلترها</p>
            {size.length + brand.length + (price > 0 ? 1 : 0) > 0 && (
              <span className="bg-red-600 w-5 h-5 rounded text-white flex items-center justify-center pt-[2px]">
                {size.length + brand.length + (price > 0 ? 1 : 0)}
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
                  _onclick={sizeHandler}
                  filters={filters}
                  _value={"38"}
                  id="size"
                />
                <CheckBox
                  _onclick={sizeHandler}
                  filters={filters}
                  _value={"39"}
                  id="size"
                />
                <CheckBox
                  _onclick={sizeHandler}
                  filters={filters}
                  _value={"40"}
                  id="size"
                />
                <CheckBox
                  _onclick={sizeHandler}
                  filters={filters}
                  _value={"41"}
                  id="size"
                />
                <CheckBox
                  _onclick={sizeHandler}
                  filters={filters}
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
                  _onclick={brandHandler}
                  filters={filters}
                  _value={"Nike"}
                  id="brand"
                />
                <CheckBox
                  _onclick={brandHandler}
                  filters={filters}
                  _value={"Adidas"}
                  id="brand"
                />
                <CheckBox
                  _onclick={brandHandler}
                  filters={filters}
                  _value={"Puma"}
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
                    id="price"
                    className="w-full mt-6"
                    type="range"
                    min="0"
                    max="10000000"
                    step="1000000"
                    value={price}
                    onChange={priceHandler}
                  />
                  <div className="flex justify-between items-center">
                    <p>از 0</p>
                    <p>تا {priceFormat.format(price)} ریال</p>
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
