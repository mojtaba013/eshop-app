import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, userInfo } from "../Features/AuthSlice";
import axios, {isCancel, AxiosError} from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",

  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("لطفا نام را وارد کنید"),
  lastName: Yup.string().required("لطفا نام خانوادگی را وارد کنید"),
  email: Yup.string()
    .email("ایمیل معتبر نمی باشد")
    .required("ایمیل را وارد کنید"),

  password: Yup.string().required("رمز عبور را وارد کنید"),
  passwordConfirm: Yup.string()
    .required("رمز عبور را دباره وارد کنید")
    .oneOf([Yup.ref("password"), null], "رمز عبور وارد شده مطابقت ندارد"),
});

const Signup = () => {
  const navigate=useNavigate()
  const onSubmit = (values) => {
    try {
      //dispatch(login());
      axios.post('http://localhost:3001/users/', 
        values
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      formik.resetForm()
      toast.success(".با موفقیت ثبت شد");
      navigate('/')
    } catch (error) {
      console.log(error);
      toast.error("درحال حاضر برقراری ارتباط با سرور مقدور نمی باشد");
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
    <div className="flex justify-center items-center">
      <section className="container max-w-screen-xl px-4 md:px-8 lg:px-28 py-8 ">
        <div>
          <p className="font-bold text-xl lg:text-2xl text-slate-800">عضویت</p>
          <p className="text-slate-800 text-sm mb-8 mt-4">
            لطفا برای عضویت فرم زیر را تکمیل کنید..
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col ">
          <div className=" flex flex-col md:flex-row justify-between items-start gap-x-4 mb-10 ">
            <div className=" flex flex-col w-full md:flex-1 ">
              <label className="text-slate-800 text-sm mb-1">نام</label>
              <Input name="name" type="text" formik={formik} />
            </div>
            <div className=" flex flex-col w-full md:flex-1">
              <label className="text-slate-800 text-sm mb-1">
                نام خانوادگی
              </label>
              <Input name="lastName" type="text" formik={formik} />
            </div>
          </div>

          <div className=" flex flex-col mb-10">
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
            <Input name="password" type="password" formik={formik} />
          </div>
          <div className=" flex flex-col mb-10">
            <label className="text-slate-800 text-sm mb-1">
              تکرار کلمه عبور
            </label>
            <Input name="passwordConfirm" type="password" formik={formik} />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <button
              type="submit"
              disabled={!formik.isValid}
              // className="bg-red-400  text-white rounded-lg py-2 mb-6 w-full sm:mb-0 sm:w-1/5"

              className={` ${
                formik.isValid ? "bg-red-400" : "bg-slate-400"
              }  text-white rounded-lg py-2 mb-6 w-full sm:mb-0 sm:w-1/5`}
            >
              ثبت نام{" "}
            </button>

            <NavLink to="/login">
              <p className="text-sm">حساب کاربری دارید؟ ورود</p>
            </NavLink>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
