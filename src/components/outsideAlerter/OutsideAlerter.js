import React, { useRef } from "react";
import useOutsideAlerter from "@/hooks/useOutsideAlerter";

export default function OutsideAlerter({children, onOutsideClick}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onOutsideClick);

  return <div ref={wrapperRef}>{children}</div>;
}