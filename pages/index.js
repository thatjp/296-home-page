import { useRef, useEffect, useState, createContext, useContext } from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpringRef } from "@react-spring/web";
import { isMobile } from "react-device-detect";

import Hero from "@/components/hero/Hero";
import Scroll from "@/components/scroll/Scroll";
import Navigation from "../src/components/navigation/Navigation";
import Container from "../src/components/container/Container";
import Slider from "../src/components/slider/Slider";
import ContactForm from "../src/components/contactForm/ContactForm";

// Site Images
import handShake from "../public/handshake-white.svg";
import jeffPhoto from "../public/jeff.jpeg";
import bharatPhoto from "../public/bharat.jpg";
import noprofile from "../public/noprofile.png";

// Site Copy
import focusContent from "../public/focuses.json";
import caseStudies from "../public/case-studies.json";
import services from "../public/services.json";
import team from "../public/team.json";
import industryExperience from "../public/industry-experience.json";

import "../src/app/globals.css";
// import styles from "../src/app/Animation.module.css";
import CaseStudies from "@/components/caseStudies/CaseStudies";
import HalfImage from "@/components/halfImage/halfImage";

import FirstSessionContext from "../src/components/context/FirstSessionContext";

import styles from './styles.module.css'

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [isFirstSession, setFirstSession] = useState(true);

  const parallax = useRef();

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  const transRef = useSpringRef();

  useEffect(() => {
    transRef.start();
  }, [clicked]);

  const selectProfilePicture = (member) => {
    switch (member.name) {
      case "Jeff Kendal":
        return jeffPhoto.src;
      case "Bharat Gidwani":
        return bharatPhoto.src;
      case "Mike Yakubovich":
        return noprofile.src;
      default:
        break;
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      // window.sessionStorage.setItem("firstLoadDone", 1);
      // setFirstSession(false);
    }
  }, [isFirstSession]);

  return (
    <main>
      <FirstSessionContext.Provider value={isFirstSession}>
        <Navigation />
        <Scroll />
        <HalfImage
          anchorId={"what_we_do"}
          imageSide={"left"}
          data={services.services}
          title={"What We Do"}
          isMobile={isMobile}
        />
        <HalfImage
          anchorId={"our_focus"}
          imageSide={"right"}
          data={focusContent.focuses}
          title={"Our Focus"}
          isMobile={isMobile}
        />
        <HalfImage
          anchorId={"industry_experience"}
          imageSide={"left"}
          data={industryExperience.experiences}
          title={"Industry Experience"}
          isMobile={isMobile}
        />
        <Container>
          <div id="our_team" className="anchor"></div>
          <div className="flex flex-col h-[calc(100vh/1.3)] max-sm:h-[calc(100vh/1.4)] relative my-24">
            <div className="my-10">
              <h2 className="text-groupBlack mb-3 font-semibold lg:text-4xl md:text-5xl max-sm:text-5xl">
                Our <span className="text-groupBlue">Team</span>
              </h2>
              <span className="block w-40 max-sm:w-52 border-y-2 border-groupBlack my-61"></span>
            </div>
            <div className="md:hidden">
              <Slider data={team.team} />
            </div>
            <ul className="flex flex-row space-x-5 max-sm:hidden">
              {team.team.map((member, idx) => {
                return (
                  <li key={idx} className="w-1/3">
                    <div
                      className="rounded-xl"
                      style={{
                        backgroundImage: `url(${selectProfilePicture(member)})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        width: "100%",
                        height: "400px",
                      }}
                    ></div>
                    <div className="my-3">
                      <h2 className="text-groupBlue text-2xl">{member.name}</h2>
                      <p className="text-xl">{member.position}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
        <section
          id="case-studies"
          className="flex flex-col h-[calc(100vh/1.3)] max-sm:h-[calc(100vh)] relative"
        >
          <div id="case-studies" className="anchor"></div>
            <Parallax ref={parallax} pages={3} horizontal className={styles.container}>
              {caseStudies.studies.map((study, idx) => {
                return (
                  <CaseStudies
                    key={idx}
                    offset={idx}
                    gradient="teal"
                    onClick={() => scroll(idx + 1)}
                    data={study}
                  />
                );
              })}
            </Parallax>
        </section>
        <section className="flex bg-groupBlue w-full lg:px-40 py-28 max-md:py-10 max-sm:py-16 max-sm:px-4">
          <div id="contact" className="anchor"></div>
          <div className="flex flex-row max-sm:flex-col max-sm:place-content-center h-[calc(100vh/1.6)] relative my-7 justify-evenly">
            <div className="w-1/2 max-sm:w-full m-auto max-sm:px-10">
              <h1 className="font-semibold lg:text-8xl md:text-7xl max-sm:text-5xl text-white">
                Contact Us!
              </h1>
              <h2 className="text-white font-semibold lg:text-6xl md:text-3xl max-sm:text-2xl my-10">
                We’re here to help you reach all of your technical goals!
              </h2>
            </div>
            <div className="w-1/2 max-sm:w-full px-10 m-auto">
              <ContactForm />
            </div>
          </div>
        </section>
        <footer className="w-full h-12 bg-slate-50 flex justify-center place-items-center">
          <p>Copyright © 296 Group Inc. 2023</p>
        </footer>
      </FirstSessionContext.Provider>
    </main>
  );
}
