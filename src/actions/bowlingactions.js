export function addBowler(name, innings){
  return {
    type: "ADD_BOWLER",
    name,
    innings
  }
}

export function updateBowler(name, is_ball, runs, innings){
  return {
    type: "UPDATE_BOWLER",
    name: name,
    is_ball: is_ball,
    runs: runs,
    innings: innings
  }
}
