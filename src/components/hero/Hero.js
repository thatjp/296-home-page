import React, { useContext } from "react";
import Image from "next/image";
import { useSpring, animated, useInView } from "@react-spring/web";
import { ParallaxLayer } from "@react-spring/parallax";

import Trail from "../trail/Trail";
import Container from "../container/Container";
import Button from "../button/Button";

import chevron from "../../../public/296-Chevron.svg";
import bracketLeft from "../../../public/bracket-left.svg";
import bracketRight from "../../../public/bracket-right.svg";
import squares from "../../../public/296-squares.svg";
import logo from "../../../public/296-small-logo.svg";

import FirstSessionContext from "../context/FirstSessionContext";

import { isMobile } from "react-device-detect";

import styles from "./styles.module.css";

const Hero = () => {
  let isFirstSession = useContext(FirstSessionContext);

  const [leftRef, leftSprings] = useInView(() => ({
    from: {
      x: "42.5%",
    },
    to: {
      x: "5%",
    },
    config: {
      mass: 20,
      friction: 250,
      tension: 400,
    },
  }));

  const [rightRef, rightSprings] = useInView(() => ({
    from: {
      x: "42.5%",
    },
    to: {
      x: "80%",
    },
    config: {
      mass: 20,
      friction: 250,
      tension: 400,
    },
  }));

  const [squaresRef, squaresSprings] = useInView(() => ({
    from: {
      x: "75%",
      opacity: "0",
      y: "-315%",
    },
    to: {
      x: "85%",
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

  const [doorsProps, doorApi] = useSpring(
    () => ({
      from: {
        width: "50%",
      },
      to: { width: "0%" },
      // loop: true,
      config: {
        mass: 15,
        friction: 100,
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
        friction: 100,
        tension: 300,
      },
    }),
    []
  );

  return (
    <Container type="full">
      <div
        id="home"
        className="flex flex-col justify-center md:items-center max-sm:flex-col max-sm:justify-center h-full"
      >
        <div className="lg:w-1/2 items-center relative -z-20">
          <div>
            <Image
              priority
              src={logo.src}
              height={30}
              width={900}
              alt="right"
              className="m-auto"
            />
            <animated.div
              className="bg-groupWhite max-sm:hidden"
              style={{
                ...doorsProps,
                height: "100%",
                position: "absolute",
                bottom: "10%",
              }}
            />
            <animated.div
              className={`bg-groupWhite max-sm:hidden`}
              style={{
                ...rightDoorsProps,
                height: "100%",
                position: "absolute",
                bottom: "10%",
              }}
            />
          </div>

          <div className="max-sm:top-10">
            <p className="font-body text-center max-sm:text-xl max-xs:text-left text-groupBlack lg:text-xl md:text-lg my-6 sm:mb-16">
              We are a results driven boutique technology consulting and
              software development firm that specializes in helping both
              emerging and established businesses solve complex technical
              challenges. Our team of technologists blend innovation with
              practicality to build custom, enterprise-grade software solutions
              that prioritize your business strategy and goals.
            </p>
          </div>
          <animated.div
            style={props}
            className="flex flex-row justify-around max-sm:w-full max-sm:justify-between"
          ></animated.div>
        </div>
        <animated.div style={props} className="flex w-1/2 max-sm:w-full justify-around">
          <Button
            text="Our Work"
            type="primary"
            link="#case-studies"
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
      <div className="lg:w-full h-full relative max-lg:hidden top-[-80%] -z-10">
        <ParallaxLayer offset={0} speed={1.3} className="absolute">
          <animated.div ref={leftRef} style={leftSprings}>
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
        <ParallaxLayer offset={0} speed={1} className="absolute">
          <animated.div ref={rightRef} style={rightSprings}>
            <Image
              priority
              src={bracketRight}
              height={90}
              width={180}
              alt="left"
              className="shadow"
            />
          </animated.div>
          <animated.div
            ref={squaresRef}
            style={squaresSprings}
            className="z-10"
          >
            <Image
              priority
              src={squares}
              height={90}
              width={180}
              alt="left"
              className="shadow"
            />
          </animated.div>
        </ParallaxLayer>
      </div>
      <div className="flex justify-center items-center absolute bottom-0 left-0 w-full m-auto">
        <a className="z-20 hover:h-24" href="#our_difference">
          <Image
            priority
            src={chevron}
            height={90}
            width={90}
            alt="Chevron Down"
            className="shadow"
          />
        </a>
      </div>
    </Container>
  );
};

export default Hero;
