import React from "react";
import classnames from "tailwindcss-classnames";

const Button = ({ text, type = "primary", link = "" }) => {
  return (
    <a href={link}>
      <div
        className={classnames(
          "primary bg-groupBlue mr-auto w-40 lg:w-52 md:w-40 text-center lg:p-4 md:p-2 rounded-xl border-2 hover:bg-white p-4",
          {
            "bg-groupWhite hover:bg-groupBlue":
              type === "secondary",
          }
        )}
      >
        {type === "secondary" ? (
          <p className="text-groupBlue">{text}</p>
        ) : (
          <p className="text-groupWhite">{text}</p>
        )}
      </div>
    </a>
  );
};

export default Button;
