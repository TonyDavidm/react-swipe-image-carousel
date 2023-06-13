import { BannerProps } from "./BannerProps";
import { Container, StyledDescription, StyledTag, StyledTitle } from "./StyledTitle";

function Title( { title }: Pick<BannerProps, "title"> ) {
  return (
    <StyledTitle>{title}</StyledTitle>
  );
}
const Tags = ( { tags }: Pick<BannerProps, "tags"> ) => {
  return (
    <StyledTag>
      {tags.map( ( tag ) => (
        <span key={`tag-${ tag }`}>{tag}</span>
      ) )}
    </StyledTag>
  );
};
function Description( { description }: Pick<BannerProps, "description"> ) {
  return (
    <StyledDescription>{description}</StyledDescription>
  );
}
export function Banner( props: any ) {
  return (
    <Container image={props.image}>
      <div>{props.children}</div>
    </Container>
  );
}
Banner.Title = Title;
Banner.Tags = Tags;
Banner.Description = Description;
