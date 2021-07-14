import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
	counter: counterReducer, /* also like just, counterReducer */
	isLogged: loggedReducer
})

export default allReducers;