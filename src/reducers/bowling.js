export default function bowling(state=[], action){
  switch(action.type){
    case 'ADD_BOWLER':
       return [...state, {
         name: action.name,
         overs: "0.0",
         maidens: 0,
         runs: 0,
         balls: 0,
         innings: action.innings
       }]
    default:
       return state;
  }
}
