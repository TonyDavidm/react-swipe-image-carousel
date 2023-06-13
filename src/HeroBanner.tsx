import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { Banner } from "./Banner";
import { BannerProps, SampleData } from "./BannerProps";
import { StyledSwiper } from "./StyledTitle";
import sampleData from "./data/fakedata.json";

function BannerTile( props: BannerProps ) {
  const { title, image, tags, description } = props;
  return (
    <Banner image={image}>
      <Banner.Title title={title} />
      <Banner.Tags tags={tags} />
      <Banner.Description description={description} />
    </Banner>
  );
}
export function HeroBanner() {
  return (
    <StyledSwiper navigation modules={[ Navigation ]} slidesPerView={1}>
      {sampleData.data.map( ( item: SampleData, index: number ) => (
        <SwiperSlide key={`key-${ item.title }-${ index }`}>
          <BannerTile
            title={item.title}
            tags={item.genres}
            image={item.cover_url}
            description={item.description} />
        </SwiperSlide>
      ) )}
    </StyledSwiper>
  );
}
