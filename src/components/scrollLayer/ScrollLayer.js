import React from "react";
import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";
import { useInView, animated } from "@react-spring/web";

const ScrollLayer = ({
  imageSrc,
  heading,
  body,
  offset,
  sticky,
  isMobile,
  setActiveScrollLayer,
  index
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
      rootMargin: "10% 0%",
    }
  );

  const [imgRef, imgSprings] = useInView(
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
      rootMargin: "-20% 0%",
    }
  );

  return (
    <ParallaxLayer
      offset={offset}
      speed={1.5}
      className="test z-[-10] place-content-start flex flex-col lg:px-30 mt-auto sm:px-40 max-sm:px-10 lg:py-[22rem] max-sm:py-[20%] bg-groupBlue"
      sticky={sticky}
      id={index}
    >
      <div className="flex flex-row max-sm:flex-col justify-between items-start w-[80%] max-lg:w-full max-md:w-full max-xs:pt-[60%] max-sm:pt-[30%] max-md:pt-[20%]">
        <animated.div
          ref={imgRef}
          style={imgSprings}
          className="pr-10 max-sm:m-auto max-lg:w-[20vw] max-sm:w-[25vw]"
        >
          <Image
            priority
            src={imageSrc}
            height={150}
            width={150}
            alt={imageSrc}
            className="shadow"
          />
        </animated.div>
        <div className="flex flex-col max-sm:mt-5 text-left md:w-[75%]">
          <animated.h3
            style={springs}
            ref={ref}
            className="text-white md:text-4xl text-2xl lg:text-5xl"
          >
            {heading}
          </animated.h3>
          <animated.p
            style={springs}
            ref={ref}
            className="font-body text-white lg:text-xl  sm:text-lg my-6"
          >
            {body}
          </animated.p>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default ScrollLayer;
