export function addBowler(name, innings){
  return {
    type: "ADD_BOWLER",
    name,
    innings
  }
}
