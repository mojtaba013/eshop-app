import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Test = () => {
    const [priceValue, setPriceValue] = useState(0) 
    const [searchParams, setSearchParams] = useSearchParams({})
    let { search } = useLocation()

    const priceHandler = (e) => {
        setPriceValue(e.target.value);
       
      }

    const sizeHandler=(e)=>{
        setSearchParams({size:e.target.value});
    }

   

  return (
    <div className="flex flex-col w-24">
      <div>
        {" "}
        <input id="size" type="checkbox" value="38" onClick={sizeHandler} />
        38{" "}
      </div>
      <div>
        <input id="size" type="checkbox" value="39" onClick={sizeHandler} />
        39
      </div>
      <div>
        {" "}
        <input id="size" type="checkbox" value="40" onClick={sizeHandler} />
        40{" "}
      </div>

      <p className="font-bold">brand</p>
      <div>
       <div> <input id="brand" type="checkbox" value="addidas"  />
        addidas</div>
        <div><input id="brand" type="checkbox" value="nike"  />
        nike</div>
       <div> <input id="brand" type="checkbox" value="puma" />
        puma</div>
      </div>

      <p className="font-bold">price</p>
      <input
                        className="w-full mt-6"
                        type="range"
                        min="0"
                        max="10000000"
                        step="1000000"
                        value={priceValue}
                        onChange={priceHandler}
                      />

                      <button className="bg-blue-200">submit</button>
    </div>
  );
};

export default Test;
