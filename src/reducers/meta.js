export default function meta(state={}, action){
  switch(action.type){
     case 'NEW_MATCH':
        return Object.assign({}, state, {
          team1: action.team1,
          team2: action.team2,
          overs: action.overs
        })
     default:
        return state
      }
}
