const initialState = {
  bookList: [
    {
      bookName: '',
      bookDescription: '',
      bookPic: '',
      bookAttachment: ''
    }
  ]
}
export default function BookReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD-BOOK':
      // After Post request I have To Update the State based on Response.
      return {
        ...state,
      }
    case 'INIT':
      // This is For After getApi Call I need to Update the State
      return {
        ...state
      }
  }
  return state;
}