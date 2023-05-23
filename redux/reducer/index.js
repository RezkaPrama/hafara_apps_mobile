import { combineReducers } from "redux";
import {registerReducer} from './auth';
import {globalReducer} from './global';
import { signinReducer } from "./auth";

const reducer = combineReducers({registerReducer, globalReducer, signinReducer});

export default reducer;