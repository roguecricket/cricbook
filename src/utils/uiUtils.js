export function changeObjectsToSelectProps(objects, prop){
  return objects.map((obj) => ({
    text: obj[prop],
    value: obj[prop]
  }));
}
