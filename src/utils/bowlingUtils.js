const RUN_MAP = {
  "WD": 1,
  "NB": 1,
}


export function getOvers(balls){
  const overs = parseInt(balls / 6);
  const bowled = parseInt(balls % 6);
  return `${overs}.${bowled}`;
}

export function getOverInfo(figures){
  const mappedFigurs = figures.map((fig) => fig.extras && fig.extras != "WICKET" ? {
    balls: fig.extras in RUN_MAP ? 0 : 1,
    runs: fig.runs + fig.extras in RUN_MAP ? 0 : 1
  } : {
    balls: 1,
    runs: fig.runs
  });

  return mappedFigurs.reduce(function(a, b){
    return {
      balls: a.balls + b.balls,
      runs: a.runs + b.runs
    }
  });
}
