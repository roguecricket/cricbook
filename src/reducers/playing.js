export default function playing(state={}, action){

    switch(action.type){
      case 'NEW_INNINGS':
          return Object.assign({}, state, {
            batting: action.batting,
            bowling: action.bowling,
            innings: action.innings,
            runs: 0,
            wickets: 0,
            overs: 0,
            is_complete: false
          });
     case 'UPDATE_SCORE':
         return Object.assign({}, state, {
           runs: state.runs + action.runs
         });
     case 'COMPLETE_INNINGS':
        return Object.assign({}, state, {
          is_complete: true
        });
     default:
       return state;
    }
}
