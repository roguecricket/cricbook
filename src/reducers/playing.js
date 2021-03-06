export default function playing(state={innings: 1, runs: 0, wickets: 0, overs: 0, balls: 0}, action){

    switch(action.type){
      case 'NEW_INNINGS':
          return Object.assign({}, state, {
            batting: action.batting,
            bowling: action.bowling,
            innings: action.innings,
            runs: 0,
            wickets: 0,
            overs: 0,
            balls:0,
            is_complete: false
          });
     case 'UPDATE_SCORE':
         return Object.assign({}, state, {
           runs: state.runs + parseInt(action.runs),
           balls: state.balls + parseInt(action.balls)
         });
     case 'COMPLETE_INNINGS':
        return Object.assign({}, state, {
          is_complete: true
        });
    case 'UPDATE_OVER':
       return Object.assign({}, state, {
         overs: action.over
       })
    case 'ADD_WICKET':
       return Object.assign({}, state, {
         wickets: state.wickets + 1
       })

     default:
       return state;
    }
}
