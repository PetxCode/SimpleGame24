import React, { useContext } from "react";
import styled from "styled-components";
import LastComp from "../TheComp/LastComp";
import MixChange from "../TheComp/MixChange";
import TopBody from "../TheComp/TopBody";
import TopPart from "../TheComp/TopPart";
import BottomHeader from "./BottomHeader";
import Header from "./Header";
import img1 from "./img/a1.png";
import img2 from "./img/a2.png";
import img3 from "./img/a3.png";

import img4 from "./img/a4.svg";
import img5 from "./img/a5.svg";
import img6 from "./img/a6.svg";

import vid from "./Course.mp4";
import Slider from "../Peter/Slider";
import Slick from "../Slick/Slick";

const HomeScreen = () => {
  return (
    <Container>
      {/* <TopBody /> */}
      <BottomHeader />
      <SlickHolder>
        <Slick />
      </SlickHolder>
      <NewFlex>
        <MixChange
          text="Attribute commits with collaborators easily"
          sub="Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, and see the co-authors on github.com"
          img={img1}
          chg
        />
        <MixChange
          text="Checkout branches with pull requests and view CI statuses"
          sub="See all open pull requests for your repositories and check them out as if they were a local branch, even if they're from upstream branches or forks. See which pull requests pass commit status checks, too!"
          img={img2}
        />
        <MixChange
          text="Syntax highlighted diffs"
          sub="The new GitHub Desktop supports syntax highlighting when viewing diffs for a variety of different languages."
          img={img3}
          chg
        />
      </NewFlex>
      <VideoFile src={vid} loop muted playsInline autoPlay />
      <NewFlex>
        <LastComp
          text="Expanded image diff support"
          sub="Asily compare changed images. See the before and after, swipe or fade between the two, or look at just the changed parts."
          img={img4}
        />
        <LastComp
          text="Extensive editor & shell integrations"
          sub="Open your favorite editor or shell from the app, or jump back to GitHub Desktop from your shell. GitHub Desktop is your springboard for work."
          img={img5}
        />
        <LastComp
          text="Community supported"
          sub="A GitHub Desktop is open source now! Check out our roadmap, contribute, and help us make collaboration even easier."
          img={img6}
        />
      </NewFlex>
      <MySlider>
        <Slider />
      </MySlider>
    </Container>
  );
};

export default HomeScreen;

const MySlider = styled.div`
  width: 90%;
  margin: auto;
`;

const NewFlex = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const VideoFile = styled.video`
  width: 100%;
  height: 50vh;
  object-fit: contain;
  margin: 30px 0;
  background-color: black;
  /* border: solid black;
  border-width: 50px 0px; */
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  background-color: red;
  /* width: 100%; */
  flex-wrap: wrap;
`;

const Holder = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  background-color: rgb(24, 24, 24);
  flex-wrap: wrap;
`;
const Container = styled.div`
  background-color: rgb(24, 24, 24);
  width: 100%;
  height: 100vh;
`;

const SlickHolder = styled.div`
  width: 80%;
  margin: auto;
`;
