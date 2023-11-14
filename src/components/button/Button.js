import React from "react";

const Button = ({ text, type = "primary", link = "" }) => {
  return (
    <a href={link}>
      <div
        className="active:bg-groupBlue hover:shadow-lg focus:outline-none px-12 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-groupBlue rounded shadow outline-none"
      >
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Button;
