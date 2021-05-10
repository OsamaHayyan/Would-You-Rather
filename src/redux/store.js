import { createStore } from "redux";
import middleware from "./middleware";
import rootReducer from "./rootReducers";

const store = createStore(rootReducer, middleware);

export default store;
