import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Features/AuthSlice";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [users, setUsers] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    try {
      setError(null);
      let user = users.find(
        (items) =>
          items.email === values.email && items.password === values.password
      );
      if (user) {
        dispatch(login(user));
        navigate("/");
      } else {
        formik.resetForm();
        //setError("نام کاربری یا رمز عبور اشتباه است.");
        toast.error("نام کاربری یا رمز عبور اشتباه است");
      }
    } catch (error) {
      setError(error);
    }
  };

  const getUsers = async () => {
   const result= await axios
      .get("https://shop-mojtaba.netlify.app/.netlify/functions/mydata")
      setUsers(result)
      console.log(result);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
          <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
            <button
              type="submit"
              disabled={!formik.isValid}
              className="bg-red-400 text-white rounded-lg py-2 mb-6 w-full sm:mb-0 sm:w-1/5"
            >
              ورود
            </button>

            <NavLink to={`/signup`}>
              <p className="text-sm">حساب کاربری ندارید؟ ثبت نام</p>
            </NavLink>
          </div>
          {/* <div className="text-center">
            <p style={{ color: "red" }}>{error}</p>
          </div> */}
        </form>
      </section>
    </div>
  );
};

export default Login;
