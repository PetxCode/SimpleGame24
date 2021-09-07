import React from "react";
import Carousel from "nuka-carousel";
import Slid from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import s1 from "./slider/dart.png";
import s2 from "./slider/electron.png";
import s3 from "./slider/tf.png";
import s4 from "./slider/react.png";
import s5 from "./slider/ht.png";
import s6 from "./slider/css.png";
import s7 from "./slider/firebase.png";
import s8 from "./slider/expo.png";
import s9 from "./slider/js.png";
import s10 from "./slider/python.png";
import s13 from "./slider/GT.png";
import s11 from "./slider/mod.jpg";
import s12 from "./slider/xd.svg";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
  };

  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    // dots: true,
  };

  return (
    <Container>
      <hr />
      <H2>Our Stack</H2>
      <Slid {...settings2}>
        <Wrapper>
          <Holder src={s1} />
        </Wrapper>
        <Wrapper>
          <Holder src={s2} />
        </Wrapper>
        <Wrapper>
          <Holder src={s3} />
        </Wrapper>
        <Wrapper>
          <Holder src={s4} />
        </Wrapper>
        <Wrapper>
          <Holder src={s5} />
        </Wrapper>
        <Wrapper>
          <Holder src={s6} />
        </Wrapper>
        <Wrapper>
          <Holder src={s7} />
        </Wrapper>
        <Wrapper>
          <Holder src={s8} />
        </Wrapper>
        <Wrapper>
          <Holder src={s9} />
        </Wrapper>
        <Wrapper>
          <Holder src={s10} />
        </Wrapper>
        <Wrapper>
          <Holder src={s11} />
        </Wrapper>
        <Wrapper>
          <Holder src={s12} />
        </Wrapper>
        <Wrapper>
          <Holder src={s13} />
        </Wrapper>
      </Slid>
    </Container>
  );
};

export default Slider;

const Wrapper = styled.div``;
const H2 = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 100px;
`;
const Holder = styled.img`
  margin: 20px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

const Container = styled.div`
  /* width: 50%;
  display: flex;
  justify-content: center; */
`;
