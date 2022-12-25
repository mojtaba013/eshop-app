const Input = ({ name, formik, type = "text" ,placeholder}) => {
  return (
    <>
      <input
        className="hover:border-red-500 border-2 outline-none focus:ring-0  focus:border-2 focus:outline-none  border-gray-200  focus:border-red-500  hover:transition-all hover:duration-500 rounded-md "
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600 text-sm">{formik.errors[name]}</div>
      )}
    </>
  );
};

export default Input;
