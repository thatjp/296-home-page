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

import FirstSessionContext from "../context/FirstSessionContext";

const Hero = () => {
  let isFirstSession = useContext(FirstSessionContext);

  const [leftRef, leftSprings] = useInView(
    () => ({
      from: {
        x: -1000,
      },
      to: {
        x: 0,
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
      x: -900,
    },
    to: {
      x: 0,
    },
    config: {
      mass: 5,
      friction: 175,
      tension: 400,
    },
  }));

  return (
    <Container type="full">
      <div className="flex-col justify-center md:items-center flex max-sm:flex-col max-sm:justify-center h-[calc(100vh-170px)] max-sm:h-[calc(100vh-170px)] lg:flex-row">
        <div className="test lg:w-1/2 max-sm:h-100% max-sm:items-center relative">
          <Trail open={true}>
            <span>Launch</span>
            <span>Scale</span>
            <span>Grow</span>
          </Trail>
          <div className="max-sm:top-10">
            <p className="font-body max-sm:text-xl max-xs:text-left text-groupBlack lg:text-2xl md:text-2xl my-6 sm:mb-16">
              A boutique technology consulting and development firm that
              specializes in helping start-ups and emerging business ventures
              launch, scale and grow rapidly.
            </p>
            <div className="flex flex-row justify-between w-4/5 lg:w-4/5 max-sm:w-full md:w-3/4 max-sm:justify-between">
              <Button text="Our Work" type="primary" link="#case-studies" />
              <Button text="Contact Us" type="secondary" link="#contact" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 max-lg:invisible">
          <ParallaxLayer offset={0} speed={1.3}>
            <animated.div
              ref={leftRef}
              style={leftSprings}
              className="absolute top-20 right-[25%]"
            >
              <Image
                priority
                src={bracketLeft}
                height={90}
                width={200}
                alt="right"
              />
            </animated.div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1}>
            <animated.div
              ref={rightRef}
              style={rightSprings}
              className="absolute top-36 right-[10%]"
            >
              <Image
                priority
                src={bracketRight}
                height={90}
                width={200}
                alt="left"
              />
            </animated.div>
          </ParallaxLayer>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          priority
          src={chevron}
          height={90}
          width={90}
          alt="Follow us on Twitter"
        />
      </div>
    </Container>
  );
};

export default Hero;
