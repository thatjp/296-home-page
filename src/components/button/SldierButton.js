import React from "react";
import Image from "next/image";
import classnames from "tailwindcss-classnames";
import leftArrow from "../../../public/arrow-left.svg";
import rightArrow from "../../../public/arrow-right.svg";

const SliderButton = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={classnames("h-20", direction === "next" ? "btn-slide next" : "btn-slide prev")}
    >
      <Image
        priority
        src={direction === "next" ? leftArrow : rightArrow}
        height={30}
        width={90}
        alt="Follow us on Twitter"
      />
    </button>
  );
};

export default SliderButton;
