import { createStore } from "redux";
import titleReducer from "../reducers/titleReducer";

const Store = createStore(titleReducer);

export default Store;
