import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Hero from "../hero/Hero";
import ScrollLayer from "../scrollLayer/ScrollLayer";
import { useScroll, animated, useSpring } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import differences from "../../../public/differences.json";

import handShake from "../../../public/handshake-white.svg";

const Scroll = () => {
  return (
    <div className="h-screen bg-groupBlue">
      <Parallax pages={7} enabled={true}>
        <ParallaxLayer className="bg-groupWhite">
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 5 }}
          className="lg:px-40 md:px-32 sm:py-20 max-sm:py-10 max-sm:px-10 flex flex-col justify-start"
        >
          <div>
            <h2 className="text-white font-semibold lg:text-8xl md:text-7xl max-sm:text-4xl mb-10 mx-sm:m-4">
              Why is 296 Group Different?
            </h2>
            <span className="block w-[75%] border-y-2"></span>
          </div>
        </ParallaxLayer>

        {differences.differences.map((difference, idx) => {
          return (
            <ScrollLayer
              offset={difference.offset}
              key={idx}
              heading={difference.heading}
              body={difference.body}
              imageSrc={handShake}
              sticky={difference.sticky}
            />
          );
        })}
        <ParallaxLayer offset={6} className="bg-groupWhite">
          <div
            className="h-[calc(100vh/2)]"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(57, 139, 249, 1), rgba(255, 255, 255, 0.0))`,
            }}
          ></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Scroll;
