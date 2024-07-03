import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li key={id} className={s.contact_item}>
      <div>
        <p className={s.name}>
          <FaUser color="white" />
          &nbsp; &nbsp;
          {name}
        </p>
        <p>
          <FaPhoneAlt color="white" />
          &nbsp; &nbsp;
          {number}
        </p>
      </div>
      <button className={s.delete_btn} onClick={handleDelete}>
        delete
      </button>
    </li>
  );
};
export default Contact;
