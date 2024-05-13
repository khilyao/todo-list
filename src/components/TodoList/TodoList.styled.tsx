import styled from "styled-components";

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 30px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }

  @media screen and (min-width: 1024px) {
    width: 560px;
  }
`;
