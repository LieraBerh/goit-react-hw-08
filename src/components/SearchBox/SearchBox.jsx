import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.search_box}>
      Find contacts by name
      <input
        type="text"
        onChange={handleFilter}
        className={s.search_box__input}
      />
    </div>
  );
};
export default SearchBox;
