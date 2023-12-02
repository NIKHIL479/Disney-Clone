import styled from "styled-components";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export const ImgSlider = () => {
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  )
}
const Carousel = styled(Slider)`
  margin-top: 20px;

  .slick-dots {
    /* Styles for the dot container */
    position: absolute;
    bottom: -25px; /* Adjust as needed */
    display: flex !important;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .slick-dots li {
    /* Styles for individual dots */
    margin: 0 5px;
    display: inline-block;

    button {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: black;
      border: none;
      padding: 0;
      cursor: pointer;

      &:hover {
        background-color: #fff;
      }
    }

    &.slick-active button {
      background-color: #fff; /* Active dot color */
    }
}
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a{
    border-radius: 4px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider
