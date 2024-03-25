import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../store/todos/todoSlice";

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
    <li>
      <input checked={completed} onChange={handleChecked} type="checkbox" />
      <span>{text}</span>
      <span className="delete" onClick={handleRemoveTodo}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
