import styled from "styled-components";

export const TodoContainer = styled.li`
  display: flex;
  align-items: center;

  color: #fff;
  background-color: #202020;

  border-radius: 10px;
`;

export const TodoText = styled.span`
  display: flex;
  align-items: center;
  flex-grow: 1;

  height: 40px;
  padding: 10px;

  font-size: 19px;
  font-family: "Inter", sans-serif;
  line-height: 1.21;
`;

export const TrashBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px;
  margin: 0;

  color: #ff0000;
  background: rgb(153, 153, 153);
  border-radius: 10px;
  border: none;

  cursor: pointer;
`;
