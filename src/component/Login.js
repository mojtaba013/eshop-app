import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAuth, useAuthAction } from "../Providers/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("format invalid").required("ایمیل را وارد کنید"),
  password: Yup.string().required("رمزعبور را وارد کنید"),
});

const Login = () => {
  const [error, setError] = useState("");
  const setAuth = useAuthAction();
  let navigate = useNavigate();
  const [searchParam] = useSearchParams();
  //const redirect = searchParam.get("redirect") || "/";
  const auth = useAuth();

  // useEffect(()=>{
  //   if(auth) navigate(`${redirect}`);
  // },[redirect,auth]);

  const onSubmit = (values) => {
    try {
      //setAuth(data);
      // localStorage.setItem('authState',JSON.stringify(data));
      setError(null);
      console.log(values.email, auth.email);
      if (values.email === auth.email && values.password === auth.password)
        navigate("/checkout");
      else setError("نام کاربری یا رمز عبور اشتباه است.");
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="flex justify-center">
      <section className="container max-w-screen-xl px-4 md:px-8 lg:px-28 py-8">
        <div>
          <p className="font-bold text-xl lg:text-2xl text-slate-800">ورود</p>
          <p className="text-slate-800 text-sm mb-8 mt-4">
            لطفا نام کاربری و رمز عبور خود راوارد نمایید.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col ">
          <div className="mb-4 flex flex-col">
            <label className="text-slate-800 text-sm mb-1">
              آدرس ایمیل(نام کاربری)
            </label>
            <Input
              name="email"
              type="text"
              formik={formik}
              placeholder={"example@gmail.com"}
            />
          </div>
          <div className=" flex flex-col mb-10">
            <label className="text-slate-800 text-sm mb-1">کلمه عبور</label>
            <Input name="password" type="text" formik={formik} />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <button
              type="submit"
              disabled={!formik.isValid}
              className="bg-red-400 text-white rounded-lg py-2 mb-6 w-full sm:mb-0 sm:w-1/5"
            >
              ورود
            </button>

            <NavLink to={`/signup`}>
              <p>حساب کاربری ندارید؟ ثبت نام</p>
            </NavLink>
          </div>
          <div className="text-center">
            <p style={{ color: "red" }}>{error}</p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
