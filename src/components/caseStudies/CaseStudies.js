import React, { useState } from "react";
import { useInView, animated, useSpring } from "@react-spring/web";

import Modal from "../modal/Modal";
import Slider from "../slider/Slider";
import Container from "../container/Container";
import Button from "../button/Button";

import styles from "./styles.module.css";

const CaseStudies = ({ isMobile, data, setModalState }) => {
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
      <div className="flex flex-col relative max-sm:my-10">
        <div className="mb-10 max-sm:mb-3 w-fit">
          <h2 className="text-groupBlack mb-3 font-semibold lg:text-4xl md:text-5xl max-sm:text-5xl">
            Case <span className="text-groupBlue">Studies</span>
          </h2>
          <span className="block border-y-[1px] border-groupBlack my-61"></span>
        </div>
        <animated.div ref={ref} style={springs}>
          {
            <ul className="flex h-screen flex-row justify-between overflow-auto w-full max-sm:mt-10">
              {data.map((study, idx) => {
                return (
                  <li key={idx} className="max-sm:mx-4 max-sm:min-w-[90%] w-[24%] relative">
                    <animated.div
                      className={`${styles.c} bg-groupBlue p-10 rounded-xl h-[60vh] max-sm:w-min-full max-sm:relative`}
                      style={
                        flipped === idx
                          ? {
                              transform,
                            }
                          : null
                      }
                    >
                      <div className="h-3">
                        <h3 className="text-groupWhite mb-3 font-semibold text-center lg:text-3xl md:text-5xl max-sm:text-5xl">
                          {study.industry}
                        </h3>
                        <div className="py-10 w-full">
                          <p className="text-groupWhite max-sm:relative top-[35%] m-3 right-0 left-0 text-center">
                            {study.snippet}
                          </p>
                        </div>
                      </div>

                      <div className="relative h-[100%]">
                        <Button
                          text="Read More"
                          styles="absolute bottom-0 right-0 w-full"
                          onClick={() => setModalState(study)}
                          purpose="button"
                          colors={{
                            bgColor: "groupWhite",
                            textColor: "groupBlue",
                            activeColor: "groupWhite",
                          }}
                        />
                      </div>
                    </animated.div>
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
