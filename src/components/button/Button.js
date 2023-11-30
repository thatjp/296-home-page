import React from "react";

const Button = ({
  text,
  type = "primary",
  purpose,
  link = "",
  styles,
  colors,
  onClick,
}) => {
  return (
    <>
      {purpose === "button" ? (
        <div className={`${styles}`} onClick={onClick}>
          <button
            className={`
          active:bg-groupBlue
          hover:shadow-xl
          focus:outline-none 
          px-4 
          max-sm:px-1 
          py-4 
          mb-1 
          mr-1
          w-full
          text-sm 
          font-bold 
          text-${colors?.textColor} 
          uppercase 
          transition-all 
          duration-150 
          ease-linear 
          bg-${colors?.bgColor}
          rounded 
          shadow 
          outline-none`}
          >
            {text}
          </button>
        </div>
      ) : (
        <a href={link} className={`${styles} max-sm:w-1/2`}>
          <div
            className={`
      active:bg-groupBlue
      hover:shadow-xl
      focus:outline-none 
      px-4 
      max-sm:px-1 
      py-4 
      mb-1 
      mr-1 
      text-sm 
      font-bold 
      text-${colors?.textColor} 
      uppercase 
      transition-all 
      duration-150 
      ease-linear 
      bg-${colors?.bgColor}
      rounded 
      shadow 
      outline-none`}
          >
            <p className="text-center">{text}</p>
          </div>
        </a>
      )}
    </>
  );
};

export default Button;
