import React, { useContext, useRef } from "react";
import Image from "next/image";
import { useSpring, animated, useInView, config } from "@react-spring/web";
import { ParallaxLayer } from "@react-spring/parallax";

import Container from "../container/Container";
import Button from "../button/Button";

import chevron from "../../../public/296-Chevron.svg";
import bracketLeft from "../../../public/bracket-left.svg";
import bracketRight from "../../../public/bracket-right.svg";
import squares from "../../../public/296-squares.svg";
import logo from "../../../public/296-small-logo.svg";

import FirstSessionContext from "../context/FirstSessionContext";

import { isMobile } from "react-device-detect";

const Hero = ({onSmoothScroll}) => {
  let isFirstSession = useContext(FirstSessionContext);

  const [leftBracketRef, leftSprings] = useInView(() => ({
    from: {
      x: "300%",
    },
    to: {
      x: isMobile ? "0%" : "20%",
    },
    config: {
      mass: 20,
      friction: 250,
      tension: 400,
    },
  }));

  const [rightBracketRef, rightSprings] = useInView(() => ({
    from: {
      x: "300%",
    },
    to: {
      x: isMobile ? "570%" : "550%",
    },
    config: {
      mass: 20,
      friction: 250,
      tension: 400,
    },
  }));

  const [squaresRef, squaresSprings] = useInView(() => ({
    from: {
      x: "400%",
      opacity: "0",
      y: "-315%",
    },
    to: {
      x: "580%",
      opacity: "100%",
      delay: 1300,
    },
    config: {
      mass: 20,
      friction: 250,
      tension: 600,
    },
  }));

  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0, y: 100 },
      delay: 1300,
      to: { opacity: 1, y: 0 },
      config: {
        mass: 5,
        friction: 150,
        tension: 400,
      },
    }),
    []
  );

  const [textProps, textAPI] = useSpring(
    () => ({
      from: { opacity: 0 },
      delay: 1300,
      to: { opacity: 1 },
      config: {
        mass: 5,
        friction: 150,
        tension: 400,
      },
    }),
    []
  );

  const [doorsProps, doorApi] = useSpring(
    () => ({
      from: {
        width: "50%",
      },
      to: { width: "0%" },
      // loop: true,
      config: {
        mass: 15,
        friction: isMobile ? 270 : 100,
        tension: 300,
      },
    }),
    []
  );

  const [rightDoorsProps, rightDoorApi] = useSpring(
    () => ({
      from: {
        width: "50%",
        right: "0%",
      },
      to: { width: "0%" },
      // loop: true,
      config: {
        mass: 15,
        friction: isMobile ? 220 : 80,
        tension: 300,
      },
    }),
    []
  );

  return (
    <>
      <div id="home" className="anchor"></div>
      <Container type="full">
        <div className="flex flex-col justify-center md:items-center max-sm:flex-col max-sm:justify-center h-full">
          <div className="lg:w-1/2 items-center relative -z-20 min-h-[44%]">
            <div className="w-[70%] m-auto">
              <Image
                priority
                src={logo.src}
                height={30}
                width={900}
                alt="296 Group Logo"
                className="logo m-auto md:mb-12"
              />
            </div>
            <animated.div
              className="bg-groupWhite"
              style={{
                ...doorsProps,
                height: isMobile ? "50%" : "100%",
                position: "absolute",
                bottom: isMobile ? "60%" : "10%",
              }}
            />
            <animated.div
              className={`bg-groupWhite`}
              style={{
                ...rightDoorsProps,
                height: isMobile ? "50%" : "100%",
                position: "absolute",
                bottom: isMobile ? "60%" : "10%",
              }}
            />

            <animated.div
              style={isMobile ? textProps : {}}
              className="max-sm:mt-[25%]"
            >
              <p className="font-body text-center max-sm:text-lg max-xs:text-left text-groupBlack lg:text-xl md:text-lg my-6 sm:mb-16 md:w-[50%] lg:w-full m-auto">
                We are a results driven boutique technology consulting and
                software development firm that specializes in helping both
                emerging and established businesses solve complex technical
                challenges.
              </p>
            </animated.div>
          </div>
          <animated.div
            style={props}
            className="flex w-1/2 max-lg:w-full justify-around h-[0%]"
          >
            <Button
              text="Our Work"
              type="primary"
              link="#case_studies"
              styles="w-1/3"
              colors={{
                bgColor: "groupBlue",
                textColor: "groupWhite",
                activeColor: "groupBlue",
              }}
            />
            <Button
              text="Contact Us"
              type="secondary"
              link="#contact"
              styles="w-1/3"
              colors={{
                bgColor: "groupBlue",
                textColor: "groupWhite",
                activeColor: "groupBlue",
              }}
            />
          </animated.div>
        </div>
        <div className="lg:w-full h-full relative bottom-[80%] -z-10">
          <div className="relative">
            <ParallaxLayer offset={0} speed={1} className="">
              <animated.div
                ref={leftBracketRef}
                style={leftSprings}
                className="w-[15%]"
              >
                <Image
                  priority
                  src={bracketLeft}
                  height={90}
                  width={180}
                  alt="right"
                  className="shadow"
                />
              </animated.div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
              <animated.div
                ref={rightBracketRef}
                style={rightSprings}
                className="w-[15%]"
              >
                <Image
                  priority
                  src={bracketRight}
                  height={90}
                  width={180}
                  alt="right"
                  className="shadow"
                />
              </animated.div>
              <animated.div
                ref={squaresRef}
                style={squaresSprings}
                className="z-10 w-[15%]"
              >
                <Image
                  priority
                  src={squares}
                  height={90}
                  width={180}
                  alt="left"
                  className="shadow max-md:hidden"
                />
              </animated.div>
            </ParallaxLayer>
          </div>
        </div>
        <div className="flex justify-center items-center absolute bottom-0 left-0 w-full m-auto">
          <a
            className="z-20 hover:h-24 cursor-pointer"
            onClick={()=>{document.querySelector("#parallax").scrollTo({top: 900, behavior: 'smooth'})}}
          >
            <Image
              priority
              src={chevron}
              height={90}
              width={isMobile ? 60 : 90}
              alt="Chevron Down"
              className="shadow"
            />
          </a>
        </div>
      </Container>
    </>
  );
};

export default Hero;
