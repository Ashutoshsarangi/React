const initialState = {
  authCredential: {
    userName: '',
    access_token: '',
    role: '',
    loggedIn: false
  }
}
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CREDENTIAL':
      return {
        ...state,
        authCredential: {
          ...state.authCredential,
          ...action.payload
        }
      }
    case 'UPDATE_TOKEN':
      return {
        ...state,
        authCredential: {
          ...state.authCredential,
          access_token: action.payload.access_token
        }
      }
    case 'LOGOUT':
      return state;
  }
  return state;
}