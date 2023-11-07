import React from 'react'

const Button = ({text, type, link=""}) => {
  return (
    <a href={link}>
      <div className="bg-groupBlue mr-auto lg:w-52 md:w-40 text-center lg:p-4 md:p-2 rounded-xl border-2 border-groupBlue hover:bg-white text-white hover:text-groupBlue">
        <p>{text}</p>
      </div>
    </a>
  )
}

export default Button;