export function getUnplayedBatsman(players){
  return players.filter((men) => (men.inPavilion));
}

export function getPlayedBatsman(players){
  return players.filter((men) => (!men.inPavilion));
}

export function getActiveBatsman(players){
  return players.filter((men) => (men.isActive));
}
