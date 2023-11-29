import React from "react";
import { animated } from "@react-spring/web";

import "./styles.module.css";

const Modal = ({ title, text }) => {
  
  return (
    <animated.div
      className="absolute top-0 bg-groupWhite h-[50%] w-[50%] rounded-lg"
      // style={{ border: "2px solid red" }}
    >
      <h3 className="modal-title">{title}</h3>
      <p className="modal-content">{text}</p>
    </animated.div>
  );
};

export default Modal;
