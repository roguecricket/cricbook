export default function batting(state = [], action) {
  switch (action.type) {
    case 'ADD_NEW_PLAYER':
      return [...state, {
        innings: action.innings,
        name: action.name,
        runs: 0,
        balls: 0,
        isOut: false,
        inPavilion: true,
        remarks: "",
        strike: false
      }]

    case 'ADD_NEW_BATSMAN':

      return [...state, {
        name: action.name,
        innings: action.innings,
        runs: 0,
        balls: 0,
        isOut: false,
        inPavilion: false,
        strike: action.strike,
        remarks: ""
      }]

    case 'WICKET':
      return state.map((bat) => bat.strike == true
                                && !bat.inPavilion
                                && !bat.isOut ? { ...bat,
        remarks: action.remarks,
        isOut: true
      } : bat)

    case 'UPDATE_BATTING_STATUS':
      return state.map((bat) => bat.name == action.name ? { ...bat,
        inPavilion: false
      } : bat)

    case 'TOOGLE_STRIKE':
      return state.map((bat) => bat.innings == action.innings
                                 && !bat.inPavilion
                                 && !bat.isOut?
        { ...bat,
          strike: !bat.strike
        } : bat)

    case 'UPDATE_RUNS':
      return state.map((bat) => bat.innings == action.innings && bat.strike ? {
        ...bat,
        runs: bat.runs + action.runs,
        balls: bat.balls + (action.is_ball ? 1 : 0)
      } : bat)

    default:
      return state;
  }
}
