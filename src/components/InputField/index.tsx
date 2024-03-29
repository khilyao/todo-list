import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  InputContainer,
  Label,
  Input,
  Button,
  StyledTopTodo,
  StyledIcon,
  StyledWrapper,
} from "./InputField.styled";
import { addTodo } from "../../store/todos/todoSlice";
import Line from "../Line";

const InputField = () => {
  const dispatch = useDispatch();
  const [todoTask, setTodoTask] = useState("");

  const handleSubmit = () => {
    if (todoTask !== "") {
      dispatch(addTodo({ text: todoTask }));
    }

    setTodoTask("");
  };

  return (
    <>
      <InputContainer>
        <StyledTopTodo>
          <StyledWrapper>
            <Line />
            <Label htmlFor="todoTask">To-do now</Label>
            <Line />
          </StyledWrapper>
          <StyledWrapper>
            <Line size={240} />
            <StyledIcon
              width="32.000000"
              height="32.000000"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                d="M11.51 19.42L11.51 15.42L23.51 3.42L27.51 7.42L15.51 19.42L11.51 19.42Z"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
              />
              <path
                d="M20.51 6.42L24.51 "
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                d="M26.51 14.42L26.51 25.42C26.51 25.69 26.4 25.94 26.22 26.13C26.03 26.32 25.77 26.42 25.51 26.42L5.51 26.42C5.24 26.42 4.99 26.32 4.8 26.13C4.61 25.94 4.51 25.69 4.51 25.42L4.51 5.42C4.51 5.16 4.61 4.9 4.8 4.71C4.99 4.53 5.24 4.42 5.51 4.42L16.51 "
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </StyledIcon>
            <Line size={240} />
          </StyledWrapper>
        </StyledTopTodo>
        <div>
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
        </div>
      </InputContainer>
    </>
  );
};

export default InputField;
