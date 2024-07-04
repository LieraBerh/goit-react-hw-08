import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import Navigation from "../Navigation/Navigation";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <Navigation />
      <div className={css.logout_wrapper}>
        <p className={css.username}>Welcome, {user?.name}</p>
        <button
          type="button"
          onClick={() => dispatch(logOut())}
          className={css.logout_btn}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default UserMenu;
