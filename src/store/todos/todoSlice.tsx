import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [{ id: "1", text: "Create the first task!", completed: false }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ text: string }>) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<{ id: string }>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
