import styled from "styled-components";

export const TodoContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const TodoText = styled.span`
  flex: 1;
  font-size: 16px;
`;

export const DeleteButton = styled.span`
  font-size: 18px;
  cursor: pointer;
  color: #ff0000;
`;
