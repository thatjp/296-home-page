import React, { useContext } from "react";
import Image from "next/image";
import { useTransition, animated, useInView } from "@react-spring/web";
import { ParallaxLayer } from "@react-spring/parallax";

import Trail from "../trail/Trail";
import Container from "../container/Container";
import Button from "../button/Button";
import chevron from "../../../public/296-Chevron.svg";
import bracketLeft from "../../../public/bracket-left.svg";
import bracketRight from "../../../public/bracket-right.svg";
import squares from "../../../public/296-squares.svg";

import FirstSessionContext from "../context/FirstSessionContext";

import logo from "../../../public/296-small-logo.png";

const Hero = () => {
  let isFirstSession = useContext(FirstSessionContext);

  const [leftRef, leftSprings] = useInView(
    () => ({
      from: {
        x: "50%",
        y: 60,
      },
      to: {
        x: "15%",
      },
      config: {
        mass: 20,
        friction: 250,
        tension: 400,
      },
    }),
    { once: true, loop: true }
  );

  const [rightRef, rightSprings] = useInView(() => ({
    from: {
      x: "50%",
      y: 60,
    },
    to: {
      x: "73%",
    },
    config: {
      mass: 20,
      friction: 250,
      tension: 400,
    },
  }));

  const [squaresRef, squaresSprings] = useInView(() => ({
    from: {
      x: "50%",
      opacity: "0",
      y: -500,
    },
    to: {
      x: "77%",
      opacity: "100%",
    },
    config: {
      mass: 20,
      friction: 250,
      tension: 400,
    },
  }));

  return (
    <Container type="full">
      <div
        id="home"
        className="flex flex-row justify-center md:items-center max-sm:flex-col max-sm:justify-center h-[calc(100vh-170px)] max-sm:h-[calc(100vh-170px)]"
      >
        <div className="lg:w-1/2 max-sm:h-100% max-sm:items-center relative">
          <Image
            priority
            src={logo.src}
            height={100}
            width={200}
            alt="right"
            className="max-sm:hidden"
          />
          <Trail open={true}>
            <span>Launch</span>
            <span>Scale</span>
            <span>Grow</span>
          </Trail>
          <div className="max-sm:top-10">
            <p className="font-body max-sm:text-xl max-xs:text-left text-groupBlack lg:text-xl md:text-lg my-6 sm:mb-16">
              A boutique technology consulting and development firm that
              specializes in helping start-ups and emerging business ventures
              launch, scale and grow rapidly.
            </p>
            <div className="flex flex-row justify-around max-sm:w-full max-sm:justify-between">
              <Button text="Our Work" type="primary" link="#case-studies" />
              <Button text="Contact Us" type="secondary" link="#contact" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 max-lg:hidden">
        <ParallaxLayer offset={0} speed={1.3} className="absolute -z-10">
          <animated.div ref={leftRef} style={leftSprings}>
            <Image
              priority
              src={bracketLeft}
              height={90}
              width={180}
              alt="right"
            />
          </animated.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} className="absolute -z-10">
          <animated.div ref={rightRef} style={rightSprings}>
            <Image
              priority
              src={bracketRight}
              height={90}
              width={180}
              alt="left"
            />
          </animated.div>
          <animated.div
            ref={squaresRef}
            style={squaresSprings}
            className="z-10"
          >
            <Image priority src={squares} height={90} width={180} alt="left" />
          </animated.div>
        </ParallaxLayer>
      </div>
      <div className="flex justify-center items-center">
        <a className="z-20" href="#our_difference">
          <Image
            priority
            src={chevron}
            height={90}
            width={90}
            alt="Chevron Down"
          />
        </a>
      </div>
    </Container>
  );
};

export default Hero;
