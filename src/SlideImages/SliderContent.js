import React from "react";
import sliderImage from "./SliderImages";

function SliderContent(props) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === props.activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <p className="slide-text">{slide.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
