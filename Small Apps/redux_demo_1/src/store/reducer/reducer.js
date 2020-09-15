import * as Action from '../action/actionType';

const initialState = {
  age: 21
}

export default function Reducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case Action.AGE_UP:
      newState.age++;
      break;
    case Action.AGE_DOWN:
      newState.age--;
      break;
  }
  return newState;
}