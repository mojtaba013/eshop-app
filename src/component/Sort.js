import { useState } from "react";

const Sort = () => {
  const [item, setItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sortBoxHandler = () => {
    setIsOpen((current) => !current);
  };

  const sortHandler = (e) => {
    setItem(e.target.value);
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
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
        />
      </svg>
      <span onClick={sortBoxHandler}> {item ? item : "ارزانترین"}</span>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="flex mb-4 border-b gap-x-2">
            <input type="radio" name="37" value="37" />
            <label> ارزانترین</label>
          </div>
          <div className="flex mb-4 border-b gap-x-2">
            <input type="radio" name="42" value="42" />
            <label> گرانترین</label>
          </div>
          <div className="flex mb-4 border-b gap-x-2">
            <input type="radio" name="30" value="30" />
            <label>پرفروشترین</label>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Sort;
