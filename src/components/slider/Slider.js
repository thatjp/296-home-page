import React, { useState } from "react";
import classnames from "tailwindcss-classnames";

import Button from "../button/Button";
import SliderButton from "../button/SldierButton";
import jeffPhoto from "../../../public/jeff.jpeg";
import bharatPhoto from "../../../public/bharat.jpg";
import noprofile from "../../../public/noprofile.png";

export const Slider = ({ data, children, type, setIsModalVisible }) => {
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

  const [flipped, set] = useState(false);

  return (
    <>
      {type === "caseStudy" ? (
        <div className="h-screen">
          {
            <ul className="flex flex-row h-1/2">
              {data.map((study, idx) => {
                return (
                  <li key={idx}>
                    <div
                      className={classnames("slide", {
                        "slide active-anim": slideIndex === idx + 1,
                      })}
                      style={{ width: "100%" }}
                    >
                      <h3 className="text-groupBlack mb-3 font-semibold lg:text-3xl md:text-5xl max-sm:text-5xl">
                        {study.company}
                      </h3>
                      <p>{study.industry}</p>
                      <p className="my-10">{study.content}</p>
                      <p className="text-groupBlack font-semibold">
                        Technologies Used
                      </p>
                      <div className="flex">
                        {study.technologies.map((tech, idx) => {
                          return (
                            <li key={idx} className="w-[30%]">
                              <p>{tech}</p>
                            </li>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          }
          <div className="flex my-20 max-sm:my-2">
            <SliderButton moveSlide={nextSlide} direction={"next"} />
            <SliderButton moveSlide={prevSlide} direction={"prev"} />
          </div>
        </div>
      ) : (
        <div className="md:hidden h-screen">
          {
            <ul className="flex flex-row h-1/2">
              {data.map((member, idx) => {
                return (
                  <div
                    key={idx}
                    className={classnames("slide", {
                      "slide active-anim": slideIndex === idx + 1,
                    })}
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
                      onClick={() => setIsModalVisible(member)}
                    ></div>
                    <div className="my-3">
                      <h2 className="text-groupBlue text-2xl">{member.name}</h2>
                      <p className="text-xl">{member.position}</p>
                    </div>
                  </div>
                );
              })}
            </ul>
          }
          <div className="flex justify-between">
            <SliderButton moveSlide={nextSlide} direction={"next"} />
            <SliderButton moveSlide={prevSlide} direction={"prev"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
