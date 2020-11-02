const initialState = {
  counter: 0
}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCR':
      return { counter: state.counter + 1 };
    case 'DECR':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

export default Reducer;