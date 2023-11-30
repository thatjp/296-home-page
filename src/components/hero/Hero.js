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

import FirstSessionContext from "../context/FirstSessionContext";

import logo from "../../../public/296-small-logo.svg";
import { isMobile } from "react-device-detect";

const Hero = () => {
  let isFirstSession = useContext(FirstSessionContext);

  const [leftRef, leftSprings] = useInView(
    () => ({
      from: {
        x: "50%",
        y: 80,
      },
      to: {
        x: "15%",
      },
      config: {
        mass: 20,
        friction: 250,
        tension: 600,
      },
    }),
    { once: true, loop: true }
  );

  const [rightRef, rightSprings] = useInView(() => ({
    from: {
      x: "50%",
      y: 80,
    },
    to: {
      x: "73%",
    },
    config: {
      mass: 20,
      friction: 250,
      tension: 600,
    },
  }));

  const [squaresRef, squaresSprings] = useInView(() => ({
    from: {
      x: "75%",
      opacity: "0",
      y: -500,
    },
    to: {
      x: "77%",
      opacity: "100%",
      delay: 2000
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
      delay: 2000,
      to: { opacity: 1, y: 0 },
      config: {
        mass: 5,
        friction: 150,
        tension: 800,
      },
    }),
    []
  );

  const [logoProps, logoApi] = useSpring(
    () => ({
      from: { opacity: 0 },
      delay: 800,
      to: { opacity: 1 },
      config: {
        mass: 5,
        friction: 150,
        tension: 1000,
      },
    }),
    []
  );

  return (
    <Container type="full">
      <div
        id="home"
        className="flex flex-row justify-center md:items-center max-sm:flex-col max-sm:justify-center h-[90%] max-sm:h-[calc(100vh-170px)]"
      >
        <div className="lg:w-1/2 max-sm:h-100% items-center relative">
          <animated.div style={logoProps}>
            <Image
              priority
              src={logo.src}
              height={100}
              width={600}
              alt="right"
              className="m-auto"
            />
          </animated.div>
          {isMobile ? (
            <Trail open={true}>
              <span>Launch</span>
              <span>Scale</span>
              <span>Grow</span>
            </Trail>
          ) : (
            <></>
          )}

          <div className="max-sm:top-10">
            <animated.p
              style={props}
              className="font-body text-center max-sm:text-xl max-xs:text-left text-groupBlack lg:text-xl md:text-lg my-6 sm:mb-16"
            >
              A boutique technology consulting and development firm that
              specializes in helping start-ups and emerging business ventures
              launch, scale and grow rapidly.
            </animated.p>
            <animated.div
              style={props}
              className="flex flex-row justify-around max-sm:w-full max-sm:justify-between"
            >
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
              className="shadow"
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
              className="shadow"
            />
          </animated.div>
          <animated.div
            ref={squaresRef}
            style={squaresSprings}
            className="z-10"
          >
            <Image priority src={squares} height={90} width={180} alt="left" className="shadow"/>
          </animated.div>
        </ParallaxLayer>
      </div>
      <div className="flex justify-center items-center absolute bottom-[10%] left-0 w-full m-auto">
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
