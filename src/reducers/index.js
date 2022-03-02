import { titleReducer } from "./titleReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  titleState: titleReducer,
});
