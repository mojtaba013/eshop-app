const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <>
      <input
        className="outline-none rounded-md  border-solid border-2 border-gray-200"
        id={name}
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </>
  );
};

export default Input;
