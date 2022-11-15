const CheckBox = ({submitHandler,_onchange,filterItems,_value}) => {
  return (
    <div className="border-b mb-5 pb-1">
      <input
        onClick={submitHandler}
        onChange={_onchange}
        type="checkbox"
        name="chk"
        value={_value}
        checked={
          filterItems.find((i) => i.item === _value)
            ? filterItems.find((i) => i.item === _value).isChecked
            : false
        }
        className="rounded checked border-gray-300 focus:ring-blue-500"
      />{" "}
       {_value}
    </div>
  );
};

export default CheckBox;
