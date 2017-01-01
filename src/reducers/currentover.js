export default function currentover(state={}, action){
  switch(action.type){
    case 'CHANGE_STRIKE':
       return Object.assign({}, state, {
         strike: state.nonstrike,
         nonstrike: state.strike
       })
    case 'UPDATE_STRIKE':
      return Object.assign({}, state, {
        strike: action.strike
      })
    case 'UPDATE_NONSTRIKE':
      return Object.assign({}, state, {
        nonstrike: action.nonstrike
      })
    case 'INIT_OVER':
      return Object.assign({}, state, {
        bowling: action.bowler,
        runs: 0,
        wickets: 0,
        runs: 0,
        strike: action.strike,
        nonstrike: action.nonstrike
      })
    case 'UPDATE_BALL_RUNS_WICKETS':
      return Object.assign({}, state, {
        runs: state.runs + action.runs,
        balls: state.balls + action.balls,
        wickets: state.wickets + action.wickets
      })
    default:
      return state;
  }
}
