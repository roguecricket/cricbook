export default function currentover(state={}, action){
  switch(action.type){
    case 'NEW_OVER_TO_BOWL':
        return {...state,
                promptBowlerSelect: true}
    case 'BOWLER_SELECTED':
        return {...state,
                promptBowlerSelect: false,
                bowler: action.bowler}
    case 'CANCEL_BOWLING_PROMPT':
        return {...state, promptBowlerSelect: false}
    case 'WICKET_HAS_FALLEN':
        return {...state, promptBatsmanSelect: true}
    case 'BATSMAN_SELECTED':
        return {...state, promptBatsmanSelect: false}
    case 'CANCEL_BATSMAN_PROMPT':
        return {...state, promptBatsmanSelect: false}
    default:
        return state
  }
}
