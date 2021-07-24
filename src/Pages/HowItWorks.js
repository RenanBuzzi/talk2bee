import React from "react";
import Footer from "./Footer";
import "../Pages/HowItWorks.css";
import VideoTalk2Bee from "../Pages/VideoTalk2Bee.js";

const HowItWorks = () => {
  return (
    <>
      <div className="container">
        <div className="titles">How it works</div>
        <div className="paragraph">
          <b>Talk2bee is the conection between the Learner and Speaker.</b>
        </div>
        <div>
          <VideoTalk2Bee />
        </div>
        <div className="paragraph">
          We belong to an economic model that uses peer-to-peer activity that
          allows individuals to acquire and provide goods and services to one
          another. Complementary, our platform will provide support material
          such as relevant business vocabulary and uptodate articles to promote
          reading.
        </div>
        <div className="image1"></div>
        <div className="paragraph">
          <b>Customer Service Model</b>
        </div>
        <div className="paragraph">
          Talk2bee will provide all the techonologic software and support. As a
          Bee learner or Bee Speaker you just need to have a compatible device
          with internet, connect and enjoy the experience, that will be rich for
          both sides!
        </div>
        <div className="image2"></div>
        <div className="space"></div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
