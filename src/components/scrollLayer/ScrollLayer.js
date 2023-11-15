import React from "react";
import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";
import Trail from "../trail/Trail";
import { useInView, animated } from "@react-spring/web";

const ScrollLayer = ({ imageSrc, heading, body, offset, sticky }) => {
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
      rootMargin: "-20% 0%",
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
      rootMargin: "-30% 0%",
    }
  );

  return (
    <ParallaxLayer
      offset={offset}
      speed={1.5}
      className="place-content-start flex lg:px-40 md:py-[50%] mt-auto sm:px-40 max-sm:px-10 lg:py-96 max-sm:py-40"
      sticky={sticky}
    >
      <animated.div ref={imgRef} style={imgSprings} className="pr-10 py-10 max-sm:hidden">
        <Image
          priority
          src={imageSrc}
          height={400}
          width={300}
          alt="Follow us on Twitter"
          color="white"
        />
      </animated.div>
      <div className="flex flex-col max-sm:mt-20 text-left">
        <animated.h3 style={springs} ref={ref} className="text-white md:text-4xl lg:text-6xl max-sm:text-3xl lg:w-1/2">
          {heading}
        </animated.h3>
        <animated.p style={springs} ref={ref} className="font-body text-white lg:text-2xl md:text-xl sm:text-lg my-6">
          {body}
        </animated.p>
      </div>
    </ParallaxLayer>
  );
};

export default ScrollLayer;
