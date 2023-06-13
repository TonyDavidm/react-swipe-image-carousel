import styled from "styled-components";
import { Swiper } from "swiper/react";
import { BannerProps } from "./BannerProps";

export const StyledSwiper = styled( Swiper )`
  & .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;
export const StyledTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: white;
`;
export const StyledTag = styled.div`
  padding: 0.5rem 0;

  & span {
    margin-right: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const StyledDescription = styled.div`
  text-align: start;
  color: rgba(255, 255, 255, 0.8);
  display: -webkit-box;
  max-width: 50%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const Container = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 60%, transparent),
    url(${ ( props: Pick<BannerProps, "image"> ) => props.image });
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
  }
`;
