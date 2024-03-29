import styled from "styled-components";

interface StyledLineProps {
  size?: number;
  $bgcolor?: string;
}

export const StyledLine = styled.div<StyledLineProps>`
  height: 2px;
  width: ${({ size }) => `${size}px`};

  background-color: ${({ $bgcolor }) => `${$bgcolor}`};
`;
