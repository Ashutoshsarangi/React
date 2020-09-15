import * as action from './actionType';


export function ageUp() {
  return {
    type: action.AGE_UP,
    payload: {}
  };
}

export function ageDown() {
  return {
    type: action.AGE_DOWN,
    payload: {}
  };
}