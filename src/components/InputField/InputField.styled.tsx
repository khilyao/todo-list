import styled from "styled-components";

export const InputContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  margin-bottom: 20px; */
`;

export const StyledTopTodo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-bottom: 80px;
`;

export const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 15px;
  padding: 0 20px;

  font-family: "Racing Sans One";
  font-weight: 400px;
  font-size: 64px;

  color: #fff;
  text-transform: uppercase;
`;

export const StyledIcon = styled.svg`
  margin: 0 32px;
`;

export const Input = styled.input`
  /* margin-bottom: 20px;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc; */
`;

export const Button = styled.button`
  /* padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer; */

  &:hover {
    background-color: #0056b3;
  }
`;
