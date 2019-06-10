import { START_TIMER_RED } from "./actionTypes";

export const startRedTimer = dispatch => redLightTime => {
  const theTimer = setInterval(()=>{
    if(redLightTime >= 0){
      dispatch({
        type: START_TIMER_RED,
        payload: redLightTime--
      });
    }else{
      clearInterval(theTimer);
    }
    
  },1000)
}