import React from "react";
import { useInView, animated } from "@react-spring/web";

import Container from "../container/Container";

const HalfImage = ({ anchorId, imageSide, imageSrc, data, title = "" }) => {
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

  const blueTitle = (title) => {
    const plainWords = title.split(" ").slice(0, -1).join(" ");
    const blueWord = title.split(" ").slice(-1)[0];
    return (
      <h2 className="text-groupBlack font-semibold lg:text-6xl md:text-5xl max-sm:text-5xl">
        {plainWords} <span className="text-groupBlue">{blueWord}</span>
      </h2>
    );
  };

  return (
    <Container>
      <div id={anchorId} className="anchor"></div>
      {imageSide === "left" ? (
        <animated.div
          ref={ref}
          style={springs}
          className="flex flex-row h-[calc(100vh/1.6)] relative my-24"
        >
          <div
            className="rounded-xl"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url(${imageSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "",
              width: "60%",
              height: "100%",
            }}
          ></div>
          <div className="flex flex-col absolute right-0 top-2 max-sm:top-10 max-sm:items-end md:items-end">
            {blueTitle(title)}
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
          className="flex flex-row h-[calc(100vh/1.6)] relative my-24"
        >
          <div className="w-1/2"></div>
          <div className="flex flex-col absolute top-10">
            {blueTitle(title)}
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
          <div
            className="rounded-xl"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url(${imageSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "10%",
              width: "60%",
              height: "100%",
            }}
          ></div>
        </animated.div>
      )}
    </Container>
  );
};

export default HalfImage;
