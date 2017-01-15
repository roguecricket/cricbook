export function selectBowler(bowler){
  return {
    type: 'BOWLER_SELECTED',
    bowler
  }
}

export function showPromptForBowler(){
  return {
    type: 'NEW_OVER_TO_BOWL'
  }
}

export function closeBowlingPrompt(){
  return {
    type: 'CANCEL_BOWLING_PROMPT'
  }
}

export function selectBatsman(batsman){
  return{
    type: 'BATSMAN_SELECTED',
    batsman
  }
}

export function showPromptForBatsman(){
  return {
    type: "WICKET_HAS_FALLEN"
  }
}

export function closeBattingPrompt(){
  return {
    type: "CANCEL_BATSMAN_PROMPT"
  }
}
