import { useState } from "react";

const Test = () => {
  const [isShow, setIsShow] = useState(false);
  const reset = () => {
    setIsShow(false);
    console.log("object");
  };
  return (
    <div onClick={reset} className="flex flex-col inset-0 bg-red-50 absolute">
      <div className="bg-red-50 w-20 h-10">div1</div>
      <div>
        {isShow ? <h1>mojtaba</h1> : ""}
        <button onClick={() => setIsShow(c=>!c)} className="bg-blue-50 w-20 h-10">
          show
        </button>
        
      </div>
    </div>
  );
};

export default Test;
