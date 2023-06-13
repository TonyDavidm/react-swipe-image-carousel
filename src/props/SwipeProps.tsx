export type SwipeProps = {
  description: string;
  image: string;
  tags: string[];
  title: string;
};
export type SampleData = Pick<SwipeProps, "title" | "description"> & {
  cover_url: string;
  genres: string[];
};
