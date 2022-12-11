import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Navigate,
  NavLink,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth, useAuthAction } from "../Providers/AuthProvider";


const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  name: "",
  lastName:"",
  email: "",
  password: "",

  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("لطفا نام را وارد کنید"),
  lastName: Yup.string().required("لطفا نام خانوادگی را وارد کنید"),
  email: Yup.string().email("format invalid").required("ایمیل را وارد کنید"),
  
  password: Yup.string().required("رمز عبور را وارد کنید"),
  passwordConfirm: Yup.string()
    .required("رمز عبور را دباره وارد کنید")
    .oneOf([Yup.ref("password"), null], "رمز عبور وارد شده مطابقت ندارد"),
});

const Signup = () => {
  let navigate = useNavigate();
  const [searchParam] = useSearchParams();
  //const redirect = searchParam.get("redirect") || "/";
  const auth = useAuth();
  const setAuth = useAuthAction();

  // useEffect(() => {
    
  //   if (auth) navigate("/");
  // }, [auth]);

  const onSubmit =  (values) => {
    
    const { name, email, password,passwordConfirm} = values;  

    try {      
      setAuth(values);
      //localStorage.setItem("authState", JSON.stringify(values));
      toast.success("با موفقیت ثبت شد.");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(`${error.response.data.message}`);
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
    <section className="px-6">
      <div>
        <p className="font-bold text-xl text-slate-800">عضویت</p>
        <p className="text-slate-800 text-sm mb-8 mt-4">
          لطفا برای عضویت فرم زیر را تکمیل کنید..
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col ">
        <div className="mb-4 flex flex-col">
          <label className="text-slate-800 text-sm mb-1">نام</label>
          <Input name="name" type="text" formik={formik} />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-slate-800 text-sm mb-1">نام خانوادگی</label>
          <Input name="lastName" type="text" formik={formik} />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-slate-800 text-sm mb-1">
            آدرس ایمیل(نام کاربری)
          </label>
          <Input name="email" type="text" formik={formik} />
        </div>
        <div className=" flex flex-col mb-10">
          <label className="text-slate-800 text-sm mb-1">کلمه عبور</label>
          <Input name="password" type="password" formik={formik} />
        </div>
        <div className=" flex flex-col mb-10">
          <label className="text-slate-800 text-sm mb-1">تکرار کلمه عبور</label>
          <Input name="passwordConfirm" type="password" formik={formik} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <button
            type="submit"
            disabled={!formik.isValid}
            // className="bg-red-400  text-white rounded-lg py-2 mb-6 w-full sm:mb-0 sm:w-1/5"
            
            className={` ${formik.isValid?"bg-red-400":"bg-slate-400"}  text-white rounded-lg py-2 mb-6 w-full sm:mb-0 sm:w-1/5`}
          >
            ثبت نام{" "}
          </button>

          <NavLink to="">
            <p>حساب کاربری دارید؟ ورود</p>
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default Signup;
