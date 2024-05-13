import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../store/todos/todoSlice";
import { TodoContainer, TodoText, TrashBtn } from "./TodoItem.styled";

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

  // const handleChecked = () => {
  //   dispatch(toggleTodoComplete({ id }));
  // };

  return (
    <TodoContainer>
      {/* <input type="checkbox" checked={completed} onChange={handleChecked} /> */}
      <TodoText>{text}</TodoText>
      <TrashBtn onClick={handleRemoveTodo}>
        <svg
          width="29.000000"
          height="29.000000"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M23.79 5.98L4.2 5.98"
            stroke="#222222"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M11.32 11.32L11.32 18.45"
            stroke="#222222"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M16.67 11.32L16.67 18.45"
            stroke="#222222"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M22.01 5.98L22.01 22.9C22.01 23.14 21.92 23.36 21.75 23.53C21.58 23.7 21.36 23.79 21.12 23.79L6.87 23.79C6.63 23.79 6.41 23.7 6.24 23.53C6.07 23.36 5.98 23.14 5.98 22.9L5.98 5.98"
            stroke="#222222"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M18.45 5.98L18.45 4.2C18.45 3.73 18.26 3.27 17.93 2.94C17.59 2.6 17.14 2.42 16.67 2.42L11.32 2.42C10.85 2.42 10.4 2.6 10.06 2.94C9.73 3.27 9.54 3.73 9.54 4.2L9.54 5.98"
            stroke="#222222"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </TrashBtn>
    </TodoContainer>
  );
};

export default TodoItem;
