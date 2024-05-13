import styled from "styled-components";

interface StyledLineProps {
  size?: number;
  $bgcolor?: string;
}

export const StyledLine = styled.div<StyledLineProps>`
  height: 2px;
  width: ${({ size }) => `${size}px`};
  max-width: 100%;
  background-color: ${({ $bgcolor }) => `${$bgcolor}`};

  @media screen and (min-width: 1200px) {
  }
`;
