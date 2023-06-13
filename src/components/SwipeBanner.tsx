import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";

import { StyledSwiper } from "../styles/StyledTitle";
import { SwipeTile } from "./SwipeTile";

import sampleData from "../data/fakedata.json";

import { SampleData } from "../props/SwipeProps";

export default function SwipeBanner() {
  return (
    <StyledSwiper navigation modules={[ Navigation ]} slidesPerView={1}>
      {sampleData.data.map( ( item: SampleData, index: number ) => (
        <SwiperSlide key={`key-${ item.title }-${ index }`}>
          <SwipeTile
            title={item.title}
            tags={item.genres}
            image={item.cover_url}
            description={item.description} />
        </SwiperSlide>
      ) )}
    </StyledSwiper>
  );
}
