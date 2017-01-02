export function changeStrike(){
  return {
    type: 'CHANGE_STRIKE'
  }
}

export function updateStrike(player){
  return {
    type: 'UPDATE_STRIKE',
    strike: player
  }
}

export function updateNonStrike(player){
  return {
    type: 'UPDATE_NONSTRIKE',
    nonstrike: player
  }
}

export function initOver(bowler, strike, nonstrike){
  return {
    type: "INIT_OVER",
    bowling: bowler,
    strike: strike,
    nonstrike: nonstrike
  }
}

export function updateWicketsAndBalls(runs, balls, wickets){
  return {
    type: "UPDATE_BALL_RUNS_WICKETS",
    runs,
    balls,
    wickets
  }
}
