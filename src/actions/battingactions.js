export function addBatsman(name, innings) {
  return {
    type: 'ADD_NEW_BATSMAN',
    name,
    innings
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
