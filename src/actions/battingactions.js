export function addBatsman(name, innings, strike) {
  return {
    type: 'ADD_NEW_BATSMAN',
    name,
    innings,
    strike
  }
}

export function addPlayer(name, innings) {
  return {
    type: 'ADD_NEW_PLAYER',
    name,
    innings
  }
}

export function toBat(name){
  return {
    type: 'UPDATE_BATTING_STATUS',
    name: name
  }
}

export function toogleStrike(innings){
  return {
    type: 'TOOGLE_STRIKE',
    innings: innings
  }
}

export function updateRuns(innings, runs, is_ball){
  return {
    type: "UPDATE_RUNS",
    innings,
    runs,
    is_ball
  }
}

export function wicket(){
  return {
    type: "WICKET"
  }
}

export function batsmanOut(name){
  return {
    type: "BATSMAN_OUT",
    name
  }
}
