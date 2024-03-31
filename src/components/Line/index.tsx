import { StyledLine } from "./Line.styled";

type LineProps = {
  size?: number;
  bgcolor?: string;
};

const Line = ({ size = 20, bgcolor = "white" }: LineProps) => {
  return <StyledLine $bgcolor={bgcolor} size={size}></StyledLine>;
};

export default Line;
