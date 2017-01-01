export function newInnings(batting, bowling){
  return {
    type: "NEW_INNINGS",
    batting: batting,
    bowling: bowling
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
