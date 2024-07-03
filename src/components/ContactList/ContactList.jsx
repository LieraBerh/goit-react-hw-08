import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.contact_list}>
      {contacts.map((contact) => (
        <Contact
          name={contact.name}
          id={contact.id}
          number={contact.number}
          key={contact.id}
        />
      ))}
    </ul>
  );
};
export default ContactList;
