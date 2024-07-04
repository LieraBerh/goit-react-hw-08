import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
