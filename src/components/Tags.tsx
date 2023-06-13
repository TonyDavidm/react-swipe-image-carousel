import { SwipeProps } from "../props/SwipeProps";
import { StyledTag } from "../styles/StyledTitle";

export default function Tags( { tags }: Pick<SwipeProps, "tags"> ) {
  return (
    <StyledTag>
      {tags.map( ( tag ) => (
        <span key={`tag-${ tag }`}>{tag}</span>
      ) )}
    </StyledTag>
  );
}
