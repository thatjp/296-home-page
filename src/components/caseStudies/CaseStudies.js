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
    // from: { transform: `translateX(${flipped ? -180 : 0}px)` },
    // to: { transform: `translateX(${flipped ? 0 : 0}px)` },
    // opacity: flipped ? 1 : 0,
    // transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    // transform: `translateX(${flipped ? 180 : 0}px)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Container>
      <div id="case_studies" className="anchor"></div>
      <div className="test flex flex-col h-[calc(100vh/1.3)] max-sm:h-[calc(100vh/1.4)] relative max-sm:my-24">
        <div className="md:my-10 max-sm:mb-3 md:w-fit max-sm:w-full">
          <h2 className="text-groupBlack mb-3 font-semibold lg:text-4xl md:text-5xl max-sm:text-5xl">
            Case <span className="text-groupBlue">Studies</span>
          </h2>
          <span className="block w-full max-sm:w-52 border-y-[1px] border-groupBlack my-61"></span>
        </div>
        {isMobile ? <Slider data={data} type="caseStudy" /> : <></>}
        <animated.div ref={ref} style={springs}>
          {
            <ul className="flex flex-row justify-between w-full">
              {data.map((study, idx) => {
                console.log('flipped vs idx', flipped, idx);
                return (
                  <li key={idx} className="w-1/4">
                    {!flipped ? (
                      <animated.div
                        className={`${styles.c} bg-groupBlue p-10 rounded-xl h-[60vh] w-1/5`}
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
                          <div className="py-10 h-full">
                            <p className="text-groupWhite absolute top-[60%]">
                              {study.snippet}
                            </p>
                          </div>
                        </div>

                        <div className="relative md:h-[100%]">
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
                        className={`${styles.c} z-10 absolute left-0 overflow-auto bg-groupBlue p-10 rounded-xl h-[60vh]`}
                        style={{
                          opacity,
                          transform,
                          // rotateY: "180deg",
                        }}
                      >
                        <h3 className="text-groupWhite mb-3 font-semibold lg:text-3xl md:text-5xl max-sm:text-5xl">
                          {study.company}
                        </h3>
                        <h3 className="text-groupWhite">{study.content}</h3>
                        <div className="relative md:h-[65%] w-[50%] m-auto">
                          <Button
                            text="Read More"
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
