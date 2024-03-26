import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../store/todos/todoSlice";
import { TodoContainer, TodoText, DeleteButton } from "./TodoItem.styled";

type TodoItemProps = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoItem = ({ id, text, completed }: TodoItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo({ id }));
  };

  const handleChecked = () => {
    dispatch(toggleTodoComplete({ id }));
  };

  return (
    <TodoContainer>
      <input type="checkbox" checked={completed} onChange={handleChecked} />
      <TodoText>{text}</TodoText>
      <DeleteButton onClick={handleRemoveTodo}>&times;</DeleteButton>
    </TodoContainer>
  );
};

export default TodoItem;
