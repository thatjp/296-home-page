import React from "react";
import classnames from "tailwindcss-classnames";

const Button = ({ text, type = "primary", link = "" }) => {
  return (
    <a href={link}>
      <div
        className={classnames(
          "bg-groupBlue mr-auto lg:w-52 md:w-40 text-center lg:p-4 md:p-2 rounded-xl border-2 border-groupBlue hover:bg-white max-sm:p-3",
          {
            "bg-groupWhite hover:bg-groupBlue ":
              type === "secondary",
          }
        )}
      >
        {type === "secondary" ? (
          <p className="text-groupBlue hover:text-groupWhite">{text}</p>
        ) : (
          <p className="text-groupWhite hover:text-groupBlue">{text}</p>
        )}
      </div>
    </a>
  );
};

export default Button;
