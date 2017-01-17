export function nextOver(innings, over, bowler){
  return {
    type: "NEXT_OVER",
    bowler,
    over,
    innings
  }
}

export function nextBall(run, over, innings){
  return {
    type: "NEXT_BALL",
    run: run,
    over: over,
    innings: innings
  }
}
