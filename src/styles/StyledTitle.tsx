import styled from "styled-components";
import { Swiper } from "swiper/react";
import { SwipeProps } from "../props/SwipeProps";

export const StyledSwiper = styled( Swiper )`
  & .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;

export const StyledTitle = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 600;
`;

export const StyledTag = styled.div`
  padding: 0.5rem 0;

  & span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    font-weight: 500;
    margin-right: 0.5rem;
  }
`;

export const StyledDescription = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: rgba(255, 255, 255, 0.8);
  display: -webkit-box;
  max-width: 50%;
  overflow: hidden;
  text-align: start;
`;

export const Container = styled.div`
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 60%, transparent),
    url(${ ( props: Pick<SwipeProps, "image"> ) => props.image });
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  height: 400px;
  width: 100%;

  & > div {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  }
`;
