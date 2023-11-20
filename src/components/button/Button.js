import React from "react";

const Button = ({ text, type = "primary", link = "" }) => {
  return (
    <a href={link} className="z-30 w-1/3 max-sm:w-1/2">
      <div className="
      active:bg-groupBlue 
      hover:shadow-lg 
      focus:outline-none 
      px-4 
      max-sm:px-1 
      py-4 
      mb-1 
      mr-1 
      text-sm 
      font-bold 
      text-white 
      uppercase 
      transition-all 
      duration-150 
      ease-linear 
      bg-groupBlue 
      rounded 
      shadow 
      outline-none">
        <p className="text-center">{text}</p>
      </div>
    </a>
  );
};

export default Button;
