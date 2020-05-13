import { INCREMENT, DECREMENT, RESET, DELETE_TODO } from "../Actions/types";
const initialState = {
  counterValue: 0,
  todos: [
    { id: 1, description: "listen music" },
    { id: 2, description: "do swimming" },
    { id: 3, description: "eat dinner" }
  ]
};
export function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.counterValue + 1;
    case DECREMENT:
      return state.counterValue - 1;
    case RESET:
      return (state.counterValue = 0);
    case DELETE_TODO:
      console.log("payload in reducer", action.payload);
      return state.todos.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
