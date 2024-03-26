import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";
import { ListContainer } from "./TodoList.styled";
import { todosSelector } from "../../store/todos/todoSelectors";

const TodoList = () => {
  const todos = useSelector(todosSelector);

  return (
    <ListContainer>
      {todos.map(({ id, text, completed }) => (
        <TodoItem key={id} id={id} text={text} completed={completed} />
      ))}
    </ListContainer>
  );
};

export default TodoList;
