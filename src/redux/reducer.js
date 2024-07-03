import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contactsSlice";
import { filtersReducer } from "../redux/filtersSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export default rootReducer;
