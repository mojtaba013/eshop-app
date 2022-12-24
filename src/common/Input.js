const Input = ({ name, formik, type = "text" ,placeholder}) => {
  return (
    <>
      <input
        className=" focus:border-red-500 focus:outline-0 hover:transition-all hover:duration-500 rounded-md hover:border-red-500      border-2 border-gray-200"
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
