export default function batting(state=[], action){
  console.log("State is", state)
  switch(action.type){
    case 'ADD_NEW_PLAYER':
       return [...state, {
           innings: action.innings,
           name: action.name,
           runs: 0,
           balls: 0,
           isOut: false,
           inPavilion: true,
           remarks: ""
         }]

    case 'ADD_NEW_BATSMAN':
       return [...state, {
           name: action.name,
           innings: action.innings,
           runs: 0,
           balls: 0,
           isOut: false,
           inPavilion: false,
           remarks: ""
         }]

    case 'WICKET':
      return state.map((bat) => bat.name == action.name ? {...bat, remarks: action.remarks, isOut: true} : bat)

    case 'UPDATE_BATTING_STATUS':
      return state.map((bat) => bat.name == action.name ? {...bat, inPavilion: false}: bat)

    default:
       return state;
  }
}
