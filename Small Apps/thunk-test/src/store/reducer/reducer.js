const initialState = {
  age: 0,
  loading: false
}

export default function Reducer(state = initialState, action) {

  switch (action.type) {
    case 'AGE_UP':
      return {
        ...state,
        age: state.age + action.payload.value,
        loading: false
      }
    case 'AGE_DOWN':
      return {
        ...state,
        age: state.age - action.payload.value
      }
    case 'LOADING_START':
      return {
        ...state,
        loading: true
      }
  }
  return state;
}