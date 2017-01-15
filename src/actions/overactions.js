export function nextOver(innings, over, bowler){
  return {
    type: "NEXT_OVER",
    bowler,
    over,
    innings
  }
}
