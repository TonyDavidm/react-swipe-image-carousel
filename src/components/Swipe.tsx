
import { Container } from "../styles/StyledTitle";
import Description from "./Description";
import { SwipeContainerProps } from "../props/SwipeContainerProps";
import Tags from "./Tags";
import Title from "./Title";

Swipe.Title = Title;
Swipe.Tags = Tags;
Swipe.Description = Description;

export function Swipe( props: SwipeContainerProps ) {
  return (
    <Container image={props.image}>
      <div>{props.children}</div>
    </Container>
  );
}

