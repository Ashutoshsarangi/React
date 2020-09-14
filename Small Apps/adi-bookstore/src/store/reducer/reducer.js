const initialState = {
  loggedIn: false
}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'loggedIn':
      return {
        ...state,
        loggedIn: true
      }
    case 'loggedOut':
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state;
  }
}