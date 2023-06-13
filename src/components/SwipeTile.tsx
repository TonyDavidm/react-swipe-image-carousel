import { SwipeProps } from "../props/SwipeProps";
import { Swipe } from "./Swipe";

export function SwipeTile( props: SwipeProps ) {
  const { title, image, tags, description } = props;
  return (
    <Swipe image={image}>
      <Swipe.Title title={title} />
      <Swipe.Tags tags={tags} />
      <Swipe.Description description={description} />
    </Swipe>
  );
}
