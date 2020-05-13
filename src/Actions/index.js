import { INCREMENT, DECREMENT, RESET, DELETE_TODO } from "./types";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function reset() {
  return { type: RESET };
}

export function deleteTodo(payload) {
  return { type: DELETE_TODO, payload };
}
