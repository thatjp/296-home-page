import React from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

const Heading = ({ data, style }) => {
  return (
    <animated.div style={style}>
      <h1>{data}</h1>
    </animated.div>
  );
};

export default Heading;
