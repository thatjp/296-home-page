import React from "react";
import Image from "next/image";
import { useTransition, animated } from "@react-spring/web";

import Trail from "../trail/Trail";
import Container from "../container/Container";
import Button from "../button/Button";
import chevron from "../../../public/296-Chevron.svg";

import styles from "../../app/Animation.module.css";

const Hero = ({ data = [1] }) => {
  const [transitions, api] = useTransition(data, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }));
  return transitions((style, item) => (
    <Container type="full">
      <div
        className={`md:items-center flex max-sm:flex-col max-sm:justify-center h-[calc(100vh-170px)] max-sm:h-[calc(100vh-170px)] lg:flex-row`}
      >
        <div className="lg:w-1/2 max-sm:h-100% max-sm:items-center relative">
          <Trail open={true}>
            <span>Launch</span>
            <span>Scale</span>
            <span>Grow</span>
          </Trail>
          <div className='max-sm:top-10'>
            <p className="font-body max-sm:text-xl max-xs:text-left text-groupBlack lg:text-2xl md:text-2xl my-6 sm:mb-16">
              A boutique technology consulting and development firm that
              specializes in helping start-ups and emerging business ventures
              launch, scale and grow rapidly.
            </p>
            <div className="flex flex-row justify-between w-4/5 lg:w-4/5 max-sm:w-full md:w-1/2 max-sm:justify-between">
              <Button text="Our Work" type="primary" link="#case-studies" />
              <Button text="Contact Us" type="secondary" link="#contact" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 max-xs:hidden"></div>
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
  ));
};

export default Hero;
