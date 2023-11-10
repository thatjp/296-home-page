import React, { useState } from "react";
import classnames from "tailwindcss-classnames"

import SliderButton from "../button/SldierButton";
import jeffPhoto from "../../../public/jeff.jpeg";
import bharatPhoto from "../../../public/bharat.jpg";
import noprofile from "../../../public/noprofile.png";

export const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const selectProfilePicture = (member) => {
    switch (member.name) {
      case "Jeff Kendal":
        return jeffPhoto.src;
      case "Bharat Gidwani":
        return bharatPhoto.src;
      case "Mike Yakubovich":
        return noprofile.src;
      default:
        break;
    }
  };
  return (
    <div className="md:hidden h-screen">
      <ul className="flex flex-row h-1/2">
        {data.map((member, idx) => {
          return (
            <div
              key={idx}
              className={classnames('slide',{ "slide active-anim" : slideIndex === idx + 1 })}
            >
              <div
                className="rounded-xl place-content-center"
                style={{
                  backgroundImage: `url(${selectProfilePicture(member)})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "70%",
                }}
              ></div>
              <div className="my-3">
                <h2 className="text-groupBlue text-2xl">{member.name}</h2>
                <p className="text-xl">{member.position}</p>
              </div>
            </div>
          );
        })}
      </ul>
      <div className="flex justify">
        <SliderButton moveSlide={nextSlide} direction={"next"} />
        <SliderButton moveSlide={prevSlide} direction={"prev"} />
      </div>
    </div>
  );
};

export default Slider;
