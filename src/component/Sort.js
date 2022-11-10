import { useState } from "react";

const Sort = () => {
  const [state, setState] = useState({ selectedItem: null, isChecked: false });
  const [isOpen, setIsOpen] = useState(false);

  const sortBoxHandler = () => {
    setIsOpen((current) => !current);
  };

  const sortHandler = (e) => {
    setState({ selectedItem: e.target.id, isChecked: true });    
    setIsOpen(false);
  };

  return (
    <div className="flex mr-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          stroke-linejoin="round"
          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
        />
      </svg>
      <span onClick={sortBoxHandler}>
        {" "}
        {state.isChecked ? state.selectedItem : "ارزانترین"}
      </span>
      {isOpen && (
        <div className="flex flex-col inset-0 fixed bg-white p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="font-medium ">مرتب سازی بر اساس :</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={sortBoxHandler}
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
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
              checked={state.selectedItem==="ارزانترین"}
            />
            <label> ارزانترین</label>
          </div>
          <div className="flex mb-4 border-b gap-x-2" onClick={sortHandler}>
            <input
              type="radio"
              name="sort"
              value="expensive"
              id="گرانترین"
              checked={state.selectedItem==="گرانترین"}
            />
            <label> گرانترین</label>
          </div>
          <div className="flex mb-4 border-b gap-x-2" onClick={sortHandler}>
            <input
              type="radio"
              name="sort"
              value="Bestselling"
              id="پرفروشترین"
              checked={state.selectedItem==="پرفروشترین"}
            />
            <label>پرفروشترین</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
