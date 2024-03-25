import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todos/todoSlice";

const InputField = () => {
  const dispatch = useDispatch();
  const [todoTask, setTodoTask] = useState("");

  const handleSubmit = () => {
    dispatch(addTodo({ text: todoTask }));
  };

  return (
    <>
      <label htmlFor="todoTask">Введите задание для выполнения</label>
      <input
        id="todoTask"
        name="todoTask"
        type="text"
        value={todoTask}
        onChange={(e) => {
          setTodoTask(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </>
  );
};

export default InputField;
