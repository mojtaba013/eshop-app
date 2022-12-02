import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import {
  Navigate,
  NavLink,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { signupUser } from "../../services/signupService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth, useAuthAction } from "../../Providers/AuthProvider";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("format invalid").required("email is required"),
  phoneNumber: Yup.string()
    .required("phoneNumber is required")
    .matches(phoneRegExp, "Phone number is not valid")
    .nullable(),
  password: Yup.string().required("password required"),
  passwordConfirm: Yup.string()
    .required("reenter password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  let navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const redirect = searchParam.get("redirect") || "/";
 const auth=useAuth();
  const setAuth = useAuthAction();

useEffect(()=>{
  if(auth) navigate(`/${redirect}`);
},[redirect,auth]);

  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      password,
      phoneNumber,
    };

    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      toast.success("با موفقیت ثبت شد.");
      navigate(redirect);
    } catch (error) {
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
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit} className="formControl">
        <Input name="name" type="text" label="Name" formik={formik} />
        <Input name="email" type="text" label="Email" formik={formik} />
        <Input
          name="phoneNumber"
          type="tel"
          label="Phone Number"
          formik={formik}
        />
        <Input name="password" type="text" label="Password" formik={formik} />
        <Input
          name="passwordConfirm"
          type="text"
          label="ConfirmPassword"
          formik={formik}
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn primary"
        >
          Signup
        </button>

        <NavLink to={`/login?redirect=${redirect}`}>
          <p>Are you Register?</p>
        </NavLink>
      </form>
    </div>
  );
};

export default Signup;
