import { START_TIMER_RED } from "../actions/actionTypes";

export default (
  state = {
    redLightTimer: 0,
    yellowLightTimer: 0,
    greenLightTimer: 0
  }, action)=>{
  switch(action.type){
    case START_TIMER_RED:
      return {
        ...state,
        redLightTimer: action.payload
      }
    default: return state;
  }
}