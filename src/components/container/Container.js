import React from "react";

const Container = ({ children, type, border=false }) => {
  return (
    <section className={`container mx-auto`} style={border ? { border: "2px solid red" } :  { border: "none" } }>
      {children}
    </section>
  );
};

export default Container;
