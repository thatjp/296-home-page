import React, { useEffect, useRef } from "react";
import { useScroll, animated, useSpring } from "@react-spring/web";

import styles from "./styles.module.css";

const PAGE_COUNT = 4;

const Scroll = () => {
  const containerRef = useRef(null);

  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }))

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: '0' })
      } else {
        textApi.start({ y: '100%' })
      }
    },
    default: {
      immediate: true,
    },
  })

  console.log(scrollYProgress);
  return (
    <div ref={containerRef} className={"h-full overflow-y-scroll"}>
      <div className={styles.animated__layers}>
        <animated.div className={"absolute top-1/2 left-1/2"}>
          <h1
            className={
              `${styles.text}`
            }
          >
            <animated.span style={textStyles}>Test</animated.span>
          </h1>
        </animated.div>
      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className={"relative h-screen w-screen"} key={index} />
      ))}
    </div>
  );
};

export default Scroll;
