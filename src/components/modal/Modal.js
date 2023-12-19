import React from "react";
import { animated, useTransition } from "@react-spring/web";

import "./styles.module.css";
import { isMobile } from "react-device-detect";

const Modal = ({ title, text, setModalState, modalState, mobileOnly }) => {
  const transitions = useTransition(modalState, {
    from: { transform: "translateY(100%)" },
    enter: { transform: isMobile ? "translateY(20%)" : "translateY(50%)" },
    leave: { transform: "translateY(100%)" },
  });

  return transitions((style, item) => (
    <animated.div
      style={style}
      className={`${
        mobileOnly && "sm:hidden"
      } flex flex-row z-10 max-sm:mx-auto shadow p-10 translate-x-[50%] translate-y-[30%] max-sm:translate-x-0 max-sm:h-[90%] max-sm:w-[100%] absolute top-[0%] left-[25%] max-sm:top-0 max-sm:left-0 bg-groupBlue h-fit w-[50%] rounded-lg`}
    >
      <div className="flex flex-col justify-between items mb-5">
        <div className="w-fit">
          <h3 className="modal-title text-groupWhite text-2xl">{title}</h3>
          <span className="block border-y-[.5px] my-4"></span>
        </div>
        <div className="overflow-scroll py-4 pr-2">
          <p className="modal-content text-groupWhite">{text}</p>
        </div>
      </div>
      <p className="text-groupWhite pr-2" onClick={() => setModalState(null)}>
        X
      </p>
    </animated.div>
  ));
};

export default Modal;
