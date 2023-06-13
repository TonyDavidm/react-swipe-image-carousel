export type BannerProps = {
  description: string;
  image: string;
  tags: string[];
  title: string;
};
export type SampleData = Pick<BannerProps, "title" | "description"> & {
  cover_url: string;
  genres: string[];
};
