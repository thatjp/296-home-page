import React from "react";
import { useInView, animated } from "@react-spring/web";

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
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );

  const createHighlightedTitle = (title) => {
    const plainWords = title.split(" ").slice(0, -1).join(" ");
    const blueWord = title.split(" ").slice(-1)[0];

    return (
      <h2 className="text-groupBlack font-semibold lg:text-6xl md:text-5xl max-sm:text-5xl">
        {plainWords} <span className="text-groupBlue">{blueWord}</span>
      </h2>
    );
  };

  const handleMobileImage = (id) => {
    switch (id) {
      case "what_we_do":
        return (
          <div
            className={`w-[calc(60%)] h-full max-sm:w-full max-sm:bg-team-meeting-mobile sm:bg-team-meeting max-sm:relative rounded-xl`}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "",
              height: "100%",
            }}
          ></div>
        );
      case "our_focus":
        return (
          <div
            className={`w-[calc(60%)] h-full max-sm:w-full max-sm:bg-focus-mobile sm:bg-focus max-sm:relative rounded-xl`}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "",
              height: "100%",
            }}
          ></div>
        );
      case "industry_experience":
        return (
          <div
            className={`w-[calc(60%)] h-full max-sm:w-full max-sm:bg-team-top-down-mobile sm:bg-team-top-down max-sm:relative rounded-xl`}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "",
              height: "100%",
            }}
          ></div>
        );
      default:
        break;
    }
  };

  return (
    <Container>
      <div id={anchorId} className="anchor"></div>
      {imageSide === "left" ? (
        <animated.div
          ref={ref}
          style={springs}
          className="flex flex-row max-sm:flex-col h-[calc(100vh/1.6)] max-sm:h-screen relative my-24"
        >
          {handleMobileImage(anchorId)}
          <div className="flex flex-col max-sm:relative absolute right-0 top-2 max-sm:top-10 max-sm:items-end md:items-end">
            {createHighlightedTitle(title)}
            <span className="block w-1/2 border-y-2 border-gray-800 my-6"></span>
            <ul>
              {data.map((focus, idx) => {
                return (
                  <li key={idx} className="py-1">
                    <p className="text-3xl max-sm:text-2xl font-body text-groupBlack max-sm:text-end md:text-end">
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
          style={springs}
          className="flex flex-row max-sm:flex-col h-[calc(100vh/1.6)] max-sm:h-screen relative my-24"
        >
          <div className="w-1/2"></div>
          {isMobile ? handleMobileImage(anchorId) : null}
          <div className="flex flex-col max-sm:relative absolute top-10">
            {createHighlightedTitle(title)}
            <span className="block w-1/2 border-y-2 border-gray-800 my-6"></span>
            <ul>
              <ul>
                {data.map((service, idx) => {
                  return (
                    <li key={idx} className="py-1">
                      <p className="text-3xl max-sm:text-2xl font-body text-groupBlack">
                        {service}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </ul>
          </div>
          {!isMobile ? handleMobileImage(anchorId) : null}
        </animated.div>
      )}
    </Container>
  );
};

export default HalfImage;
