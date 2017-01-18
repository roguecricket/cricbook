import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import { reducers } from "./reducers/index";
import { sagas } from "./sagas/index";
import devToolsEnhancer, { composeWithDevTools }  from 'remote-redux-devtools';
import DevTools from './dev/devTool';
import {loadState, saveState} from './utils/localStore';

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
// if (process.env.NODE_ENV !== 'production') {
middlewares.push(freeze);
// }

// if(process.env.NODE_ENV == 'development'){
//   middlewares.push(DevTools.instrument());
// }

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// // add the redux dev tools
// if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
//   middleware = compose(middleware);
// }

// create the store
let enhancers;

if(process.env.NODE_ENV == 'production'){
  enhancers =  compose(middleware);
}
else{
  enhancers =  compose(middleware, DevTools.instrument());
}


let persistedState = loadState()
const store = createStore(reducers, persistedState, enhancers);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

store.subscribe(() => {
  saveState(store.getState());
})

// export
export { store, history };
