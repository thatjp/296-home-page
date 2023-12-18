import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

import Container from "../container/Container";
import Slider from "../slider/Slider";
import OutsideAlerter from "../outsideAlerter/OutsideAlerter";
import Modal from "../modal/Modal";

const Leadership = ({ teamData, setModalState }) => {
  const [modalVisible, setIsModalVisible] = useState();

  return (
    <Container>
      <div id="leadership" className="anchor"></div>
      <div className="flex flex-col relative">
        <div className="max-sm:my-[5%] mb-[3%]">
          <div className="w-fit">
            <h2 className="text-groupBlack font-semibold lg:text-6xl md:text-5xl max-sm:text-4xl">
              Leadership
            </h2>
            <span className="block border-y-[1px] border-gray-800 my-6"></span>
          </div>
          <p>
            Our team of technologists blend innovation with practicality to
            build custom, enterprise-grade software solutions that prioritize
            your business strategy and goals.
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <ul className="flex flex-col md:w-1/2 w-full pr-5">
            {teamData.map((member, idx) => {
              return (
                <li
                  key={idx}
                  className="hover-underline-animation cursor-pointer"
                >
                  <div
                    className="my-3 flex"
                    onMouseEnter={() => setIsModalVisible(member)}
                    onMouseLeave={() => setIsModalVisible(null)}
                    onClick={() => setModalState(member)}
                  >
                    <div>
                      <h2 className=" text-groupBlue text-2xl">
                        {member.name}
                      </h2>
                      <p className="text-xl text-groupBlack">
                        {member.position}
                      </p>
                    </div>
                    {/* <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.833008 2.86565C0.833008 2.45943 0.99438 2.06984 1.28162 1.7826C1.56887 1.49536 1.95845 1.33399 2.36467 1.33399H17.633C17.8343 1.33366 18.0337 1.37304 18.2198 1.44988C18.4059 1.52671 18.575 1.63949 18.7174 1.78177C18.8598 1.92404 18.9728 2.09301 19.0498 2.27899C19.1269 2.46498 19.1665 2.66434 19.1663 2.86565V18.134C19.1666 18.3353 19.1271 18.5348 19.0501 18.7208C18.9732 18.9069 18.8604 19.076 18.718 19.2184C18.5757 19.3608 18.4067 19.4738 18.2206 19.5508C18.0346 19.6278 17.8352 19.6674 17.6338 19.6673H2.36467C2.16346 19.6673 1.96422 19.6277 1.77834 19.5506C1.59245 19.4736 1.42357 19.3607 1.28133 19.2184C1.13909 19.0761 1.02628 18.9071 0.94936 18.7212C0.872436 18.5353 0.832899 18.336 0.833008 18.1348V2.86565ZM8.08967 8.32399H10.5722V9.57065C10.9305 8.85399 11.8472 8.20899 13.2247 8.20899C15.8655 8.20899 16.4913 9.63649 16.4913 12.2557V17.1073H13.8188V12.8523C13.8188 11.3607 13.4605 10.519 12.5505 10.519C11.288 10.519 10.763 11.4265 10.763 12.8523V17.1073H8.08967V8.32399ZM3.50634 16.9932H6.17968V8.20899H3.50634V16.9932ZM6.56218 5.34399C6.56722 5.57288 6.52648 5.80048 6.44237 6.01342C6.35826 6.22636 6.23247 6.42035 6.07237 6.58401C5.91227 6.74768 5.72109 6.87771 5.51005 6.96649C5.29902 7.05527 5.07237 7.101 4.84343 7.101C4.61448 7.101 4.38783 7.05527 4.1768 6.96649C3.96576 6.87771 3.77458 6.74768 3.61448 6.58401C3.45438 6.42035 3.32859 6.22636 3.24448 6.01342C3.16036 5.80048 3.11963 5.57288 3.12467 5.34399C3.13457 4.8947 3.32 4.46715 3.64125 4.15289C3.9625 3.83864 4.39403 3.66267 4.84343 3.66267C5.29282 3.66267 5.72435 3.83864 6.0456 4.15289C6.36685 4.46715 6.55228 4.8947 6.56218 5.34399Z"
                        fill="currentColor"
                      ></path>{" "}
                    </svg> */}
                  </div>
                  <span className="block border-y-[.5px]"></span>
                </li>
              );
            })}
          </ul>
          {modalVisible && (
            <div className="shadow w-1/2 bg-groupBlue p-4 rounded-xl max-sm:hidden">
              <p className="text-groupWhite">{modalVisible.bio}</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Leadership;
