import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Scroll = ({ children }) => {
  return (
    <div className="h-screen bg-groupBlue">
      <Parallax pages={11} enabled={true}>
        {children}
      </Parallax>
    </div>
  );
};

export default Scroll;
