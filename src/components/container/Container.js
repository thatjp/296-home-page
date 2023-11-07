import React from "react";
import { useParallax } from "react-scroll-parallax";

const Container = ({ children, type }) => {
  return (
    <section className="container mx-auto" style={{ border: "2px solid red" }}>
      {children}
    </section>
  );
};

export default Container;
