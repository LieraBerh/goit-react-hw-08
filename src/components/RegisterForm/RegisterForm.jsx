import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.label}>
          <label htmlFor="name">Username</label>
          <Field type="text" id="name" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.label}>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" className={css.input} />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>
        <div className={css.label}>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            className={css.input}
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>
        <button type="submit" className={css.submit__btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
