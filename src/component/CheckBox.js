const CheckBox = ({_onclick,filterItems,_value}) => {
  return (
    <div className="border-b mb-5 pb-1">
      <input
        onClick={_onclick}       
        type="checkbox"
        name="chk"
        value={_value}
        defaultChecked={
          filterItems.find((i) => i.brand === _value||i.size===_value)
            ? filterItems.find((i) => i.brand === _value ||i.size===_value).isChecked
            : false
        }
        className="rounded checked border-gray-300 focus:ring-blue-500"
      />{" "}
       {_value}
    </div>
  );
};

export default CheckBox;
