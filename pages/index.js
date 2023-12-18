import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { ParallaxLayer } from "@react-spring/parallax";
import { isMobile } from "react-device-detect";

// Components
import Scroll from "@/components/scroll/Scroll";
import Navigation from "@/components/navigation/Navigation";
import Container from "@/components/container/Container";
import Slider from "@/components/slider/Slider";
import ContactForm from "@/components/contactForm/ContactForm";
import Hero from "@/components/hero/Hero";
import ScrollLayer from "@/components/scrollLayer/ScrollLayer";
import Modal from "@/components/modal/Modal";
import HalfImage from "../src/components/halfImage/HalfImage";
import CaseStudies from "@/components/caseStudies/CaseStudies";

// Site Images
import chevronWhite from "../public/296-chevron-white.svg";

// Site Copy
import focusContent from "../public/focuses.json";
import caseStudies from "../public/case-studies.json";
import services from "../public/services.json";
import team from "../public/team.json";
import industryExperience from "../public/industry-experience.json";
import differences from "../public/differences.json";

import FirstSessionContext from "../src/components/context/FirstSessionContext";

import "../src/app/globals.css";
import OutsideAlerter from "@/components/outsideAlerter/OutsideAlerter";
import Leadership from "@/components/leadership/Leadership";

export default function Home() {
  const [modalVisible, setIsModalVisible] = useState(false);
  const [isFirstSession, setFirstSession] = useState(true);
  const [activeScrollLayer, setActiveScrollLayer] = useState(0);

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      // window.sessionStorage.setItem("firstLoadDone", 1);
      // setFirstSession(false);
    }
  }, [isFirstSession]);

  const handleShiftDown = () => {
    console.log("activeScrollLayer", activeScrollLayer);
    if (activeScrollLayer < 2) {
      setActiveScrollLayer(activeScrollLayer + 1);
    } else if (activeScrollLayer === 2) {
      setActiveScrollLayer("what_we_do");
    } else if (activeScrollLayer === "what_we_do") {
      setActiveScrollLayer(0);
    }
  };

  return (
    <main>
      <Head>
        <title>296 Group - Boutique Technology Services</title>
      </Head>
      <FirstSessionContext.Provider value={isFirstSession}>
        <div className="fixed top-0 w-full z-10">
          <Navigation />
        </div>
        <Scroll>
          <ParallaxLayer
            offset={0}
            sticky={{ start: 0, end: 0.1 }}
            className="bg-groupWhite"
          >
            <Hero />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            sticky={{ start: 1, end: 3.5 }}
            className="max-sm:px-10 flex flex-col justify-start pt-[80px]"
          >
            <div
              id="our_difference"
              className="bg-groupBlue py-20 max-sm:py-[10%] md:px-40 sm:px-20"
            >
              <h2 className="text-white font-semibold lg:text-6xl sm:text-4xl max-sm:text-3xl mb-10 mx-sm:m-4">
                Why is 296 Group Different?
              </h2>
              <span className="block border-y-[.5px]"></span>
            </div>
          </ParallaxLayer>

          {differences.differences.map((difference, idx) => {
            return (
              <ScrollLayer
                offset={difference.offset}
                key={idx}
                heading={difference.heading}
                body={difference.body}
                imageSrc={difference.icon}
                sticky={difference.sticky}
                isMobile={isMobile}
                setActiveScrollLayer={(e) => setActiveScrollLayer(e, idx)}
                index={idx}
              />
            );
          })}
          <ParallaxLayer
            className="flex justify-center absolute bottom-0 left-0 w-full m-auto items-end"
            sticky={{ start: 1, end: 7 }}
          >
            <a
              className="z-20 hover:h-24"
              href={`#${activeScrollLayer}`}
              onClick={() => handleShiftDown()}
              scroll={false}
            >
              <Image
                priority
                src={chevronWhite}
                height={90}
                width={isMobile ? 60 : 90}
                alt="Chevron Down"
                className="shadow"
              />
            </a>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6}
            sticky={{ start: 4.5, end: 7 }}
            className="bg-groupWhite py-20"
          >
            <HalfImage
              anchorId={"what_we_do"}
              imageSide={"left"}
              data={services.services}
              title={"What We Do"}
              isMobile={isMobile}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={6}
            sticky={{ start: isMobile ? 5.5 : 5.2, end: 7 }}
            className="py-20"
          >
            <HalfImage
              anchorId={"our_focus"}
              imageSide={"right"}
              data={focusContent.focuses}
              title={"Our Focus"}
              isMobile={isMobile}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={6}
            sticky={{ start: isMobile ? 6.5 : 5.9, end: 7 }}
            className="py-20"
          >
            <HalfImage
              anchorId={"industry_experience"}
              imageSide={"left"}
              data={industryExperience.experiences}
              title={"Industry Experience"}
              isMobile={isMobile}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={8} className="bg-groupWhite">
            <Leadership
              teamData={team.team}
              setModalState={(bio) => setIsModalVisible(bio)}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={8.9} className="bg-groupWhite">
            <CaseStudies
              isMobile={isMobile}
              data={caseStudies.studies}
              setModalState={(study) => setIsModalVisible(study)}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={10}>
            <div id="contact" className="anchor h-[80px]"></div>
            <section className="h-full contact flex bg-groupBlue w-full lg:px-40 py-28 max-md:py-10 max-sm:py-16 max-sm:px-4">
              <div className="flex flex-row max-sm:flex-col max-sm:place-content-center h-[calc(100vh/1.6)] relative my-7 justify-evenly">
                <div className="w-1/2 max-sm:w-full m-auto sm:px-10">
                  <h1 className="font-semibold lg:text-8xl md:text-7xl max-sm:text-5xl text-white">
                    Contact Us!
                  </h1>
                  <h2 className="text-white font-semibold lg:text-6xl md:text-3xl max-sm:text-2xl my-10">
                    We’re here to help you reach all of your technical goals!
                  </h2>
                </div>
                <div className="w-1/2 max-sm:w-full sm:px-10 m-auto">
                  <ContactForm />
                </div>
              </div>
            </section>
            <footer className="w-full h-12 bg-slate-50 flex justify-center place-items-center">
              <p>Copyright © 296 Group Inc. 2023</p>
            </footer>
          </ParallaxLayer>
        </Scroll>
        {modalVisible && (modalVisible.company || modalVisible.bio) && (
          <OutsideAlerter onOutsideClick={() => setIsModalVisible(null)}>
            <Modal
              title={modalVisible.company || modalVisible.name}
              text={modalVisible.content || modalVisible.bio}
              modalState={modalVisible}
              setModalState={() => setIsModalVisible()}
              mobileOnly={modalVisible.bio ? true : false}
            />
          </OutsideAlerter>
        )}
      </FirstSessionContext.Provider>
    </main>
  );
}
