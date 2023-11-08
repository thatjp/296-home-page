import React, {useState, useEffect} from "react";
import Image from "next/image";
import classnames from "tailwindcss-classnames";

const Navigation = () => {
  const [navOpen, setNavOpen ] = useState(true)
  
  const handleMobileNavClick = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    const threshold = 100;
    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition) =>
    Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        
        setNavOpen(false)

        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <nav className="sticky top-0 bg-groupWhite z-50">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <Image
            src="/296-group-logo.png"
            alt="296 Group"
            width="170"
            height="50"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-2"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => handleMobileNavClick()}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={classnames("w-full md:block md:w-auto max-sm:bg-groupWhite max-sm:w-screen", {
          "block" : navOpen,
          "hidden" : !navOpen
        })} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 max-sm:bg-groupWhite max-sm:fixed max-sm:w-full">
            <li>
              <a
                href="#"
                className="font-karla block py-2 pl-3 pr-4 text-groupBlue text-2xl"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#what_we_do"
                className="block py-2 pl-3 pr-4 text-groupBlue text-2xl"
              >
                What We Do
              </a>
            </li>
            <li>
              <a
                href="#our_focus"
                className="block py-2 pl-3 pr-4 text-groupBlue text-2xl"
              >
                Our Focus
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 text-groupBlue text-2xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
