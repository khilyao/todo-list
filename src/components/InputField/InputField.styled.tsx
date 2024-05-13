import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledTopTodo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  &:first-child {
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  padding: 0 20px;

  font-size: 11vw;
  font-family: "Racing Sans One";

  color: #fff;
  text-transform: uppercase;

  @media screen and (min-width: 460px) {
    font-size: 10vw;
  }

  @media screen and (min-width: 768px) {
    font-size: 8vw;
  }

  @media screen and (min-width: 1200px) {
    font-size: 6vw;
  }
`;

export const StyledIcon = styled.svg`
  margin: 0 32px;
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledField = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
`;

export const Input = styled.input`
  height: 100%;
  flex-grow: 1;
  padding: 0px 70px 0px 15px;

  font-size: 20px;
  font-family: "Inter";

  background: rgb(217, 217, 217);
  border-radius: 20px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: -5px;

  height: 100%;
  min-width: 140px;
  padding: 8px 16px;

  font-size: 25px;
  font-family: "Racing Sans One", sans-serif;
  line-height: 1.28;

  color: #fff;
  border-radius: 20px;
  background: rgb(37, 34, 34);
  border: none;

  cursor: pointer;
  z-index: 1;
  transition: background 150ms ease;

  &:hover {
    background: #310261;
  }
`;
