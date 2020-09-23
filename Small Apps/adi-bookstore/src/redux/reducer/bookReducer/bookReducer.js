const initialState = {
  bookList: []
}
export default function BookReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD-BOOK':
      // After Post request I have To Update the State based on Response.
      return {
        ...state,
        bookList: state.bookList.concat(action.payload)
      }
    case 'INIT':
      // This is For After getApi Call I need to Update the State
      return {
        ...state
      }
    case 'SaveAll':
      return {
        ...state,
        bookList: [...action.payload]
      }
  }
  return state;
}