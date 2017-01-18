export const loadState = () => {
  try {
    const serialized = localStorage.getItem('state');
    console.log(serialized);
    if(serialized === null)
       return {};
    return JSON.parse(serialized);
  }
  catch(err){
    return undefined;
  }
}

export const saveState = (state) => {
  try{
    const serialized = JSON.stringify(state);
    console.log(serialized);
    localStorage.setItem('state', serialized);
  }
  catch(err){
    //ignore
  }
}
