export default function(state=null, action){
  if(action.type === "SOLN_SET"){
    return action.payload;
  }
  return state;
}
