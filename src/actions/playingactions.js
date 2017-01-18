export function newInnings(batting, bowling, innings){
  return {
    type: "NEW_INNINGS",
    batting: batting,
    bowling: bowling,
    innings: innings
  }
}

export function updateScore(runs, balls){
  return {
    type: 'UPDATE_SCORE',
    runs: runs,
    balls
  }
}

export function completeInnings(){
  return {
    type: 'COMPLETE_INNINGS'
  }
}

export function updateOver(over){
  return {
    type: "UPDATE_OVER",
    over: over
  }
}

export function addTeamName(name){
  return {
    type: 'NEW_INNINGS',
    batting: name,
    bowling: undefined,
    innings: 1
  }
}

export function addWicket(){
  return {
    type: 'ADD_WICKET'
  }
}
