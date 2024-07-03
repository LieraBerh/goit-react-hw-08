import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <Field name="name" placeholder="Enter name" className={s.input} />
          <ErrorMessage name="name" component="span" className={s.error__msg} />
        </label>
        <label className={s.label}>
          <span>Number</span>
          <Field name="number" placeholder="Enter number" className={s.input} />
          <ErrorMessage
            name="number"
            component="span"
            className={s.error__msg}
          />
        </label>
        <button className={s.submit__btn} type="submit">
          add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
