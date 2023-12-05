import React from "react";
import { useInView, animated, useSpring } from "@react-spring/web";

import Container from "../container/Container";

const HalfImage = ({
  anchorId,
  imageSide,
  imageSrc,
  mobileImageSrc,
  data,
  title = "",
  isMobile,
}) => {
  const [ref, springs] = useInView(() => ({
    from: {
      y: 100,
    },
    to: {
      y: 0,
    },
  }));

  const [titleRightRef, titleRightSprings] = useInView(() => ({
    from: {
      x: 100,
    },
    to: {
      x: 0,
      delay: 200,
    },
    config: {
      mass: 5,
      friction: 150,
      tension: 600,
    },
  }));

  const createHighlightedTitle = (title, isAlignedRight) => {
    const plainWords = title.split(" ").slice(0, -1).join(" ");
    const blueWord = title.split(" ").slice(-1)[0];

    return (
      <h2
        className={
          isAlignedRight
            ? "text-right text-groupBlack font-semibold lg:text-6xl md:text-5xl max-sm:text-4xl"
            : "text-groupBlack font-semibold lg:text-6xl md:text-5xl max-sm:text-5xl"
        }
      >
        {plainWords} <span className="text-groupBlue">{blueWord}</span>
      </h2>
    );
  };

  const handleMobileImage = (id) => {
    switch (id) {
      case "what_we_do":
        return (
          <div
            className={`w-[calc(50%)] h-full max-sm:w-full max-sm:bg-team-meeting-mobile sm:bg-team-meeting max-sm:relative rounded-xl`}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "30%",
              height: isMobile === true ? "30%" : "100%",
            }}
          ></div>
        );
      case "our_focus":
        return (
          <div
            className={`w-[calc(50%)] h-full max-sm:w-full max-sm:bg-focus-mobile sm:bg-focus max-sm:relative rounded-xl`}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "30%",
              height: isMobile ? "23%" : "100%",
            }}
          ></div>
        );
      case "industry_experience":
        return (
          <div
            className={`w-[calc(50%)] h-full max-sm:w-full max-sm:bg-team-top-down-mobile sm:bg-team-top-down max-sm:relative rounded-xl`}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "30%",
              height: isMobile ? "30%" : "100%",
            }}
          ></div>
        );
      default:
        break;
    }
  };

  return (
    <Container>
      <div
        id={anchorId}
        className="anchor"
        style={{ height: isMobile ? "30px" : "60px" }}
      ></div>
      {imageSide === "left" ? (
        <animated.div
          ref={ref}
          style={springs}
          className="flex flex-row max-sm:flex-col h-[calc(65vh)] max-sm:h-full relative bg-groupWhite"
        >
          {handleMobileImage(anchorId)}
          <div
            className="justify-center flex flex-col overflow-x-hidden max-sm:relative absolute right-0 max-sm:top-10 max-sm:items-end md:items-end h-full lg:w-1/2"
            style={{ top: isMobile ? "-15%" : "none" }}
          >
            <animated.div
              ref={titleRightRef}
              style={titleRightSprings}
              className="w-fit"
            >
              {createHighlightedTitle(title, true)}
              <span className="block border-y-[1px] border-gray-800 my-6"></span>
            </animated.div>
            <ul>
              {data.map((focus, idx) => {
                return (
                  <li key={idx} className="py-1">
                    <p className="text-2xl max-sm:text-xl font-body text-groupBlack max-sm:text-end md:text-end">
                      {focus}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </animated.div>
      ) : (
        <animated.div
          ref={ref}
          style={{ ...springs }}
          className="flex flex-row max-sm:flex-col-reverse max-sm:justify-end h-[calc(65vh)] max-sm:h-full relative bg-groupWhite"
        >
          <div className="w-1/2"></div>
          {!isMobile ? (
            handleMobileImage(anchorId)
          ) : (
            <div className="hidden"></div>
          )}
          <div className="justify-center overflow-x-hidden max-sm:z-10 max-sm:items-start flex flex-col max-sm:relative absolute max-sm:top-[-50px]">
            <animated.div
              ref={titleRightRef}
              style={titleRightSprings}
              className="w-fit"
            >
              {createHighlightedTitle(title, true)}
              <span className="block border-y-[1px] border-gray-800 my-6"></span>
            </animated.div>
              <ul>
                {data.map((service, idx) => {
                  return (
                    <li key={idx} className="py-1">
                      <p className="text-3xl max-sm:text-xl font-body text-groupBlack">
                        {service}
                      </p>
                    </li>
                  );
                })}
              </ul>
          </div>
          {isMobile ? (
            handleMobileImage(anchorId)
          ) : (
            <div className="hidden"></div>
          )}
        </animated.div>
      )}
    </Container>
  );
};

export default HalfImage;
