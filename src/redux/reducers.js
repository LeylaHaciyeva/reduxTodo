import { DELETE } from './actions'
import { ADD_TODO } from './actions'
import { UPDATE } from './actions'


import { todos } from './state';
export const reducers = (state = todos, action) => {
    let newTodo
    switch (action.type) {
        case DELETE:
            return state.filter(todo => todo.id !== action.payload)
        case ADD_TODO:
            newTodo = action.payload
            return [...state, newTodo]
        case UPDATE:
            newTodo = [...state];
            let index = -1;
            for (let i = 0; i < newTodo.length; i++) {
                index++
                if (newTodo[i].id === action.payload.id) {
                    break;
                }
            }
            if (index !== -1) {
                newTodo[index] = action.payload
                return newTodo
            }
            break;
        default:
            return state
    }
};