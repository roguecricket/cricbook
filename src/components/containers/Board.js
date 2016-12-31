import React, {Component, PropTypes} from 'react';

class Batting extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {name, onstrike, runs, ballsfaced} = this.props;
    return (<div>
            <span> name: {name} </span>
            <span> onstrike: {onstrike} </span>
            <span> runs: {runs} </span>
            <span> ballsfaced: {ballsfaced} </span>
           </div>)
  }
}

class Bowling extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {name, maidens, wickets, runs, overs} = this.props;
    return (<div>
            <span> name: {name} </span>
            <span> maidens: {maidens} </span>
            <span> runs: {runs} </span>
            <span> wickets: {wickets} </span>
            <span> overs: {overs} </span>
            </div>)
  }
}

class ScoreBoard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {runs, wickets, overs , batsmans, bowlers, team1, team2 } = this.props;

    return (<div className="">
      <h1> Team {team1} </h2>
      <h1> Runs {runs} / {wickets}</h1>
      <h2> Overs {overs} </h2>
      <h3>
      {
         batsmans.map(function(man){
           return <Batting name={man.name}
                           onstrike={man.onstrike}
                           runs={man.runs}
                           ballsfaced={man.ballsfaced}/>
         })
      }
      </h3>
      <h3>
      {
        bowlers.map(function(man){
          return <Bowling name={man.name}
                          maidens={man.maidens}
                          wickets={man.wickets}
                          runs={man.runs}
                          overs={man.overs}/>
        })
      }
      </h3>
    </div>)
  }
}

ScoreBoard.defaultProps = {
  batsmans: [],
  bowlers: [],
  runs: 0,
  overs: 0.0,
  wickets: 0,
  team1: "Team A",
  team2: "Team B"
}

export default ScoreBoard;
