import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import match from './match';


// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  match
});
