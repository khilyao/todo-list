import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: hidden;

  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    min-width: 90vw;
  }
`;
