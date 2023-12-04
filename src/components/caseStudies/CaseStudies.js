import React, { useState } from "react";
import { useInView, animated, useSpring } from "@react-spring/web";

import Modal from "../modal/Modal";
import Slider from "../slider/Slider";
import Container from "../container/Container";
import Button from "../button/Button";

import styles from "./styles.module.css";

const CaseStudies = ({ isMobile, data }) => {
  const [modalContent, setModalContent] = useState(null);

  const [ref, springs] = useInView(() => ({
    from: {
      x: 100,
    },
    to: {
      x: 0,
      delay: 200,
    },
    config: {
      mass: 5,
      friction: 150,
      tension: 600,
    },
  }));

  const [flipped, set] = useState(null);

  const { transform, opacity } = useSpring({
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Container>
      <div id="case_studies" className="anchor"></div>
      <div className="flex flex-col h-[calc(100vh/1.3)] relative max-sm:my-10">
        <div className="md:my-10 max-sm:mb-3 w-fit">
          <h2 className="text-groupBlack mb-3 font-semibold lg:text-4xl md:text-5xl max-sm:text-5xl">
            Case <span className="text-groupBlue">Studies</span>
          </h2>
          <span className="block border-y-[1px] border-groupBlack my-61"></span>
        </div>
        <animated.div ref={ref} style={springs}>
          {
            <ul className="max-sm:h-screen flex-row justify-between overflow-auto w-full max-sm:mt-10">
              {data.map((study, idx) => {
                return (
                  <li key={idx} className="w-1/4 max-sm:w-full max-sm:mx-4 relative">
                    {!flipped ? (
                      <animated.div
                        className={`${styles.c} bg-groupBlue p-10 rounded-xl h-[60vh] w-1/5 max-sm:w-full max-sm:relative`}
                        style={
                          flipped === idx
                            ? {
                                // opacity: opacity.to((o) => 1 - o),/
                                transform,
                              }
                            : null
                        }
                      >
                        <div className="h-3">
                          <h3 className="text-groupWhite mb-3 font-semibold lg:text-3xl md:text-5xl max-sm:text-5xl">
                            {study.industry}
                          </h3>
                          <div className="py-10 h-[100px] w-[100px] max-sm:w-full">
                            <p className="text-groupWhite max-sm:relative top-[35%] m-3 right-0 left-0 text-center">
                              {study.snippet}
                            </p>
                          </div>
                        </div>

                        <div className="relative h-[100%]">
                          <Button
                            text="Read More"
                            styles="absolute bottom-0 right-0 w-full"
                            onClick={() => set(idx)}
                            purpose="button"
                            colors={{
                              bgColor: "groupWhite",
                              textColor: "groupBlue",
                              activeColor: "groupWhite",
                            }}
                          />
                        </div>
                      </animated.div>
                    ) : (
                      <></>
                    )}
                    {flipped === idx ? (
                      <animated.div
                        className="z-10 absolute top-[25%] left-0 overflow-auto bg-groupBlue p-10 rounded-xl h-fit"
                        style={{
                          opacity,
                          transform,
                        }}
                      >
                        <h3 className="text-groupWhite mb-3 font-semibold lg:text-3xl md:text-5xl max-sm:text-5xl">
                          {study.company}
                        </h3>
                        <p className="text-groupWhite">{study.content}</p>
                        <div className="relative md:h-[65%] md:w-[50%] m-auto">
                          <Button
                            text="Close"
                            styles="absolute bottom-0 right-0 w-full"
                            onClick={() => set(null)}
                            purpose="button"
                            colors={{
                              bgColor: "groupWhite",
                              textColor: "groupBlue",
                              activeColor: "groupWhite",
                            }}
                          />
                        </div>
                      </animated.div>
                    ) : (
                      <></>
                    )}
                  </li>
                );
              })}
            </ul>
          }
        </animated.div>
      </div>
    </Container>
  );
};

export default CaseStudies;
