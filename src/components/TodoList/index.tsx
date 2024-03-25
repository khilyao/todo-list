import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";
import { todosSelector } from "../../store/todos/todoSelectors";

const TodoList = () => {
  const todos = useSelector(todosSelector);

  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem key={id} id={id} text={text} completed={completed}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
