const app_state = {
  meta: {
    team1: "",
    team2: "",
    overs: 20
  },
  playing: {
    batting: 'team name',
    bowling: 'team name',
    runs: 0,
    overs: 0,
    wickets: 0,
    is_complete: false
  },
  current_over: {
    strike: 'batman1',
    nonstrike: 'batman2',
    bowling: 'bowler',
    is_over_complete: false,
    balls: 0,
    runs: 0,
    wickets: 0
  },
  batting: [[]],
  bowling: [[]],
  falling: [[]],
  overs: [[]]
}
