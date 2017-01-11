import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import meta from './meta';
import playing from './playing';
import currentover from './currentover';
import batting from './batting';
import bowling from './bowling';


// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  meta,
  playing,
  currentover,
  batting,
  bowling
});
