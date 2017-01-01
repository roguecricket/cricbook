export function newMatch(team1, team2, overs){
  return {
    type: 'NEW_MATCH',
    team1: team1,
    team2: team2,
    overs: overs
  }
}
