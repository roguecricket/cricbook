export function getOvers(balls){
  const overs = parseInt(balls / 6);
  const bowled = parseInt(balls % 6);
  return `${overs}.${bowled}`;
}
