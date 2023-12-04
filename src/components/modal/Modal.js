import React from "react";
import { animated, useTransition } from "@react-spring/web";

import "./styles.module.css";

const Modal = ({ title, text, setModalState, modalState }) => {
  const transitions = useTransition(modalState, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(20%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
  });

  return transitions((style, item) => (
    <animated.div
      style={style}
      className="z-10 max-sm:mx-auto shadow p-10 translate-x-[50%] translate-y-[30%] max-sm:translate-x-0 max-sm:h-[70%] max-sm:w-[100%] max-sm:overflow-auto absolute top-[25%] left-[25%] max-sm:top-0 max-sm:left-0 bg-groupBlue h-fit w-[50%] rounded-lg"
    >
      <div className="flex flex-row justify-between items mb-5">
        <h3 className="modal-title text-groupWhite text-2xl">{title}</h3>
        <p className="text-groupWhite" onClick={() => setModalState(null)}>
          close
        </p>
      </div>
      <p className="modal-content text-groupWhite">{text}</p>
    </animated.div>
  ));
};

export default Modal;
