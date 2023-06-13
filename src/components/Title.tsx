import { SwipeProps } from "../props/SwipeProps";
import { StyledTitle } from "../styles/StyledTitle";

export default function Title( { title }: Pick<SwipeProps, "title"> ) {
  return (
    <StyledTitle>{title}</StyledTitle>
  );
}
