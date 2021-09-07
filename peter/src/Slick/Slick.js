import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import img from "./img/10.jpg";
import img0 from "./img/p1.jpg";
import img1 from "./img/p2.jpg";
import img2 from "./img/p3.jpg";
import img3 from "./img/p4.jpg";
import img4 from "./img/p5.jpg";
import img5 from "./img/p6.jpg";

const Slick = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings1 = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerPadding: "60px",
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings1}>
        <Wrapper>
          <Image src={img0} />
        </Wrapper>
        <Wrapper>
          <Image src={img1} />
        </Wrapper>
        <Wrapper>
          <Image src={img2} />
        </Wrapper>
        <Wrapper>
          <Image src={img3} />
        </Wrapper>
        <Wrapper>
          <Image src={img4} />
        </Wrapper>
        <Wrapper>
          <Image src={img5} />
        </Wrapper>
        <Wrapper>
          <Image src={img} />
        </Wrapper>
      </Slider>
    </div>
  );
};

export default Slick;

const Wrapper = styled.div`
  margin: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  /* background-color: white; */
  border-radius: 10px;
  object-fit: cover;
  box-shadow: rgb(255, 255, 255 / 69%) 0px 26px 30px -10px,
    rgb(255, 255, 255 / 73%) 0px 16px 10px -10px;
  margin: 0 20px;
`;
