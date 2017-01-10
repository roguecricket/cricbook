export function newInnings(batting, bowling, innings){
  return {
    type: "NEW_INNINGS",
    batting: batting,
    bowling: bowling,
    innings: innings
  }
}

export function updateScore(runs){
  return {
    type: 'UPDATE_SCORE',
    runs: runs
  }
}

export function completeInnings(){
  return {
    type: 'COMPLETE_INNINGS'
  }
}
