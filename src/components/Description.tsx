import { SwipeProps } from "../props/SwipeProps";
import { StyledDescription } from "../styles/StyledTitle";

export default function Description( { description }: Pick<SwipeProps, "description"> ) {
  return (
    <StyledDescription>{description}</StyledDescription>
  );
}
