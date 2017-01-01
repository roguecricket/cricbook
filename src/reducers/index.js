import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import meta from './meta';
import playing from './playing';
import currentover from './currentover';


// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  meta,
  playing,
  currentover
});
