import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/containers/App";
import ScoreBoard from './components/containers/Board';
import Meta from './components/containers/MetaComponent';
import Toss from './components/containers/Toss';
import TeamName from './components/containers/TeamName';
import BattingTable from './components/containers/BattingStats';
import BowlingTable from './components/containers/BowlingStats';

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={TeamName}/>
      <Route path="toss" component={Toss} />
      <Route path="batting" component={BattingTable}></Route>
      <Route path="bowling" component={BowlingTable}></Route>
      <Route path="board" component={ScoreBoard} />
    </Route>
  </Router>
);

// export
export { router };
