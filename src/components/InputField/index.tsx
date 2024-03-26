import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputContainer, Label, Input, Button } from "./InputField.styled";
import { addTodo } from "../../store/todos/todoSlice";

const InputField = () => {
  const dispatch = useDispatch();
  const [todoTask, setTodoTask] = useState("");

  const handleSubmit = () => {
    dispatch(addTodo({ text: todoTask }));
  };

  return (
    <>
      <InputContainer>
        <Label htmlFor="todoTask">Enter task to be done</Label>
        <Input
          id="todoTask"
          name="todoTask"
          type="text"
          value={todoTask}
          onChange={(e) => {
            setTodoTask(e.target.value);
          }}
        />
        <Button type="submit" onClick={handleSubmit}>
          Add Todo
        </Button>
      </InputContainer>
    </>
  );
};

export default InputField;
