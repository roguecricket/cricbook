import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/containers/App";
import ScoreBoard from './components/containers/Board';
import Meta from './components/containers/MetaComponent';


// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Meta}/>
      <Route path="board" component={ScoreBoard} />
    </Route>
  </Router>
);

// export
export { router };
