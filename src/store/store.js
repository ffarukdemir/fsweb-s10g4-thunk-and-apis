import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { myReducer } from "./reducers/reducers";
import thunk from "redux-thunk";

export const mystore = createStore(myReducer, applyMiddleware(thunk));
