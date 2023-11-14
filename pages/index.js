import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpringRef } from "@react-spring/web";

import Hero from "@/components/hero/Hero";
import Scroll from "@/components/scroll/Scroll";
import Navigation from "../src/components/navigation/Navigation";
import Container from "../src/components/container/Container";
import Slider from "../src/components/slider/Slider";
import ContactForm from "../src/components/contactForm/ContactForm";

// Site Images
import teamFocus from "../public/focus.jpg";
import handShake from "../public/handshake-white.svg";
import teamTopDown from "../public/team.jpg";
import jeffPhoto from "../public/jeff.jpeg";
import bharatPhoto from "../public/bharat.jpg";
import noprofile from "../public/noprofile.png";
import teamMeeting from "../public/team-meeting.jpg";

// Site Copy
import focusContent from "../public/focuses.json";
import caseStudies from "../public/case-studies.json";
import services from "../public/services.json";
import team from "../public/team.json";
import industryExperience from "../public/industry-experience.json";

import "../src/app/globals.css";
import styles from "../src/app/Animation.module.css";
import CaseStudies from "@/components/caseStudies/CaseStudies";
import HalfImage from "@/components/halfImage/halfImage";

export default function Home() {
  const [clicked, setClicked] = useState(false);

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

  return (
    <main>
      <Navigation />
      <Hero />
      <section className="flex flex-col bg-groupBlue w-screen h-screen max-sm:h-screen pb-10 max-sm:py-16">
        <div>
          <h2 className="text-white font-semibold lg:text-7xl md:text-7xl max-sm:text-5xl mb-10">
            Why is 296 Group Different?
          </h2>
          <span className="block w-3/5 border-y-2"></span>
        </div>
        <div>
          <div className="flex flex-row max-sm:flex-col mx-20">
            <div className="pr-10 py-10 max-sm:hidden">
              <Image
                priority
                src={handShake}
                height={400}
                width={300}
                alt="Follow us on Twitter"
                color="white"
              />
            </div>
            <div className="flex flex-col max-sm:mt-auto">
              <h3 className="text-white lg:text-4xl max-sm:text-3xl">
                Strategic Business Partner, <br /> Not Just an IT Vendor
              </h3>
              <p className="font-body text-white lg:text-2xl md:text-xl sm:text-lg my-6">
                We prioritize establishing a strategic business partnership with
                our clients. Our commitment to long-term relationships allows us
                to develop enterprise-grade solutions, incrementally. This
                approach accelerates our partners’ growth compared to
                traditional development methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div
        className="h-screen"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(57, 139, 249, 1), rgba(255, 255, 255, 0.0))`,
        }}
      ></div>
      <section className="flex flex-col bg-groupBlue w-screen h-screen max-sm:h-screen pb-10 max-sm:py-16">
        <div>
          <h2 className="text-white font-semibold lg:text-7xl md:text-7xl max-sm:text-5xl mb-10">
            Why is 296 Group Different?
          </h2>
          <span className="block w-3/5 border-y-2"></span>
        </div>
        <div>
          <Parallax pages={4}>
            <ParallaxLayer offset={1} speed={0.5}>
              <div className="flex flex-row max-sm:flex-col mx-20">
                <div className="pr-10 py-10 max-sm:hidden">
                  <Image
                    priority
                    src={handShake}
                    height={400}
                    width={300}
                    alt="Follow us on Twitter"
                    color="white"
                  />
                </div>
                <div className="flex flex-col max-sm:mt-auto">
                  <h3 className="text-white lg:text-4xl max-sm:text-3xl">
                    Strategic Business Partner, <br /> Not Just an IT Vendor
                  </h3>
                  <p className="font-body text-white lg:text-2xl md:text-xl sm:text-lg my-6">
                    We prioritize establishing a strategic business partnership
                    with our clients. Our commitment to long-term relationships
                    allows us to develop enterprise-grade solutions,
                    incrementally. This approach accelerates our partners’
                    growth compared to traditional development methods.
                  </p>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}>
              <div className="flex flex-row max-sm:flex-col mx-20">
                <div className="pr-10 py-10 max-sm:hidden">
                  <Image
                    priority
                    src={handShake}
                    height={400}
                    width={300}
                    alt="Follow us on Twitter"
                    color="white"
                  />
                </div>
                <div className="flex flex-col max-sm:mt-auto">
                  <h3 className="text-white lg:text-4xl max-sm:text-3xl">
                    Project Execution <br /> On Time & On Budget
                  </h3>
                  <p className="font-body text-white lg:text-2xl md:text-xl sm:text-lg my-6">
                    Our entrepreneurial mindset and experience ensure timely and
                    budget conscious project delivery. We take pride in
                    identifying efficient solutions and implementing them
                    quickly.
                  </p>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.5}>
              <div className="flex flex-row max-sm:flex-col mx-20">
                <div className="pr-10 py-10 max-sm:hidden">
                  <Image
                    priority
                    src={handShake}
                    height={400}
                    width={300}
                    alt="Follow us on Twitter"
                    color="white"
                  />
                </div>
                <div className="flex flex-col max-sm:mt-auto">
                  <h3 className="text-white lg:text-4xl max-sm:text-3xl">
                    Resource Flexibility
                  </h3>
                  <p className="font-body text-white lg:text-2xl md:text-xl sm:text-lg my-6">
                    Our approach to staffing is both dedicated and flexible at
                    the same time. Our model allows us to staff projects with
                    the right resources, either onshore or offshore, in response
                    to the business’ needs. We then make staffing adjustments as
                    the project and business needs evolve.
                  </p>
                </div>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </section>
      <div
        className="h-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(57, 139, 249, 1), rgba(255, 255, 255, 0.0))`,
        }}
      ></div> */}
      <HalfImage
        anchorId={"what_we_do"}
        imageSide={"left"}
        data={services.services}
        imageSrc={teamMeeting.src}
        title={"What We Do"}
      />
      <HalfImage
        anchorId={"our_focus"}
        imageSide={"right"}
        data={focusContent.focuses}
        imageSrc={teamFocus.src}
        title={"Our Focus"}
      />
       <HalfImage
        anchorId={"industry_experience"}
        imageSide={"left"}
        data={industryExperience.experiences}
        imageSrc={teamTopDown.src}
        title={"Industry Experience"}
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
        <div style={{ background: "#dfdfdf" }}>
          <Parallax
            className={styles.container}
            ref={parallax}
            pages={3}
            horizontal
          >
            {caseStudies.studies.map((study, idx) => {
              return (
                <CaseStudies
                  key={idx}
                  offset={idx}
                  gradient="teal"
                  onClick={() => scroll(idx)}
                  data={study}
                />
              );
            })}
          </Parallax>
        </div>
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
    </main>
  );
}
