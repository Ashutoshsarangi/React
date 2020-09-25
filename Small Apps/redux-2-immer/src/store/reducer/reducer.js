import { produce } from 'immer';

const initialState = {
    favItem: ['chicken', 'Fish', 'Prawn'],
    toDoItem: [
        { name: 'Redux and Immer Demo', status: 'inProgress', id: 1 },
        { name: 'Redux With Multi Reducer', status: 'Pending', id: 2 }
    ]
}

export const Reducer = (state = initialState, action) => {
    console.log('inside');
    const newState = JSON.parse(JSON.stringify(state));
    // const newSate = produce(state, draft => {
    switch (action.type) {
        case 'ADD':
            console.log('add');
            return {
                ...state,
                toDoItem: state.toDoItem.concat({ ...action.payload, id: Math.random() })
            }
        case 'REMOVE':
            console.log('remove');
            return {
                ...state,
                toDoItem: state.toDoItem.filter((item) => item.id !== action.payload.id)
            }
        // draft.toDoItem.filter((item) => item.id !== action.payload.id);
        case 'UPDATE':
            console.log('Update');
            const temp = state.toDoItem.filter((item) => item.id === action.payload.id);
            console.log(temp);
            if (temp) {
                temp.name = action.payload.name;
                temp.status = action.payload.status;
            }
            return {
                ...state,
                toDoItem: state.toDoItem.map((item) =>
                    item.id === action.payload.id ?
                        { ...item, name: action.payload.name, status: action.payload.status }
                        : item
                )

            }
    }
    // })
    console.log('inside reducer Before Return', newState);
    return newState;
}
