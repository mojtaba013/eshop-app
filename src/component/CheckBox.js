const CheckBox = ({ _onclick, filters, _value, id }) => {
  let isChecked=false;  
  if(filters)
  isChecked= Object.values(filters).some((i) =>
          i.split(",").some((x) => x === _value)
        )
        else isChecked=false
  return (
    <div className="border-b mb-5 flex items-center gap-x-1 ">
      <input
        id={id}
        onChange={_onclick}
        type="checkbox"
        name="chk"
        value={_value}
        checked={isChecked}
        className="rounded checked border-gray-300 focus:ring-blue-500"
      />
      <p >{_value}</p>
    </div>
  );
};

export default CheckBox;
