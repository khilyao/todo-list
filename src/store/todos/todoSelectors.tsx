import { RootState } from "../../store/configureStore";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const todosSelector = (state: RootState): Todo[] => state.todos.todos;
