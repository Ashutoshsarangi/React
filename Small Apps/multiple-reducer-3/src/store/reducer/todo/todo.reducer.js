const initialState = {
  toDoList: [
    { name: 'Redux Basic', status: 'Done', id: 1 },
    { name: 'Redux Demo', status: 'Done', id: 2 },
    { name: 'Multiple reducer', status: 'Pending', id: 3 },
  ]
}

export default function ToDoReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        toDoList: state.toDoList.concat({ ...action.payload, id: Math.random() })
      }
    case 'UPDATE_TODO':
      return {
        ...state,
        toDoList: state.toDoList.map((item) => {
          return (
            item.id === action.payload.id ? { ...item, name: action.payload.name, status: action.payload.status } : item
          );
        })
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        toDoList: state.toDoList.filter((item) => item.id !== action.payload.id)
      }
  }
  return state;
}