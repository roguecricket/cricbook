export default function overs(state = [], action) {
  switch (action.type) {
    case "NEXT_OVER":
      return [...state, {
        innings: action.innings,
        over: action.over,
        bowler: action.bowler,
        runs: 0,
        figures: []
      }]
    case "NEW_BALL":
      return state.map((over) => over.over == action.over && over.innings == action.innings ? { ...over,
        figures: [...over.figures, action.run]
      } : over)
    default:
      return state
  }
}
