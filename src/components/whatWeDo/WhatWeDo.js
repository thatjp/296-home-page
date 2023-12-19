import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

import HalfImage from "../halfImage/HalfImage";

import services from "../../../public/services.json";
import focusContent from "../../../public/focuses.json";
import industryExperience from "../../../public/industry-experience.json";

const WhatWeDo = ({ isMobile }) => {
  return (
    <>
      <ParallaxLayer
        offset={6}
        sticky={{ start: 4.5, end: 7 }}
        className="bg-groupWhite py-20"
      >
        <HalfImage
          anchorId={"what_we_do"}
          imageSide={"left"}
          data={services.services}
          title={"What We Do"}
          isMobile={isMobile}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={6}
        sticky={{ start: isMobile ? 5.5 : 5.2, end: 7 }}
        className="py-20"
      >
        <HalfImage
          anchorId={"our_focus"}
          imageSide={"right"}
          data={focusContent.focuses}
          title={"Our Focus"}
          isMobile={isMobile}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={6}
        sticky={{ start: isMobile ? 6.5 : 5.9, end: 7 }}
        className="py-20"
      >
        <HalfImage
          anchorId={"industry_experience"}
          imageSide={"left"}
          data={industryExperience.experiences}
          title={"Industry Experience"}
          isMobile={isMobile}
        />
      </ParallaxLayer>
    </>
  );
};

export default WhatWeDo;
