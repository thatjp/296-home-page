import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Scroll = ({ children }) => {
  return (
    <div className="h-screen">
      <Parallax pages={11} enabled={true} id="parallax">
        {children}
      </Parallax>
    </div>
  );
};

export default Scroll;
