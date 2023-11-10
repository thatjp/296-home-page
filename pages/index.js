import Image from "next/image";
import Navigation from "../src/components/navigation/Navigation";
import Container from "../src/components/container/Container";
import Slider from "../src/components/slider/Slider";
import ContactForm from "../src/components/contactForm/ContactForm";
import Button from "../src/components/button/Button";
import chevron from "../public/296-Chevron.svg";

// Site Images
import manAtDesk from "../public/man_at_desk.jpeg";
import teamPhoto from "../public/team-problem.jpeg";
import handShake from "../public/handshake-white.svg";
import jeffPhoto from "../public/jeff.jpeg";
import bharatPhoto from "../public/bharat.jpg";
import noprofile from "../public/noprofile.png";

// Site Copy
import focusContent from "../public/focuses.json";
import services from "../public/services.json";
import team from "../public/team.json";

import "../src/app/globals.css";
import styles from "../src/app/Animation.module.css";

export default function Home() {
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
      <Container type="full">
        <div
          className={`${styles.slide__left_medium} flex max-sm:flex-col max-sm:justify-center h-[calc(100vh-170px)] max-sm:h-[calc(100vh-170px)] lg:flex-row`}
        >
          <div className="lg:w-1/2 max-sm:h-100% max-sm:items-center relative">
            <h1 className="font-heading font-semibold sm:text-9xl max-sm:text-8xl max-sm:text-left max-sm:absolute max-sm:bottom-0">
              Launch <br /> Scale <br />
              Grow
            </h1>
            <div className="max-sm:absolute max-sm:top-10">
              <p className="font-body max-sm:text-xl max-xs:text-left text-groupBlack lg:text-2xl md:text-2xl my-6 sm:mb-16">
                A boutique technology consulting and development firm that
                specializes in helping start-ups and emerging business ventures
                launch, scale and grow rapidly.
              </p>
              <div className="flex flex-row justify-between w-4/5 lg:w-4/5 max-sm:w-full md:w-1/2 max-sm:justify-between">
                <Button text="Our Work" type="primary" link="#see_our_work" />
                <Button text="Contact Us" type="secondary" link="#contact_us" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 max-xs:hidden"></div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            priority
            src={chevron}
            height={90}
            width={90}
            alt="Follow us on Twitter"
          />
        </div>
      </Container>
      <section className="flex bg-groupBlue h-5/6 max-sm:h-screen w-full py-28 max-sm:py-16 px-40 max-sm:px-4">
        <div>
          <div>
            <h2 className="text-white font-semibold lg:text-7xl md:text-7xl max-sm:text-5xl my-10">
              Why is 296 Group Different?
            </h2>
            <span className="block w-3/5 border-y-2"></span>
          </div>
          <div className="flex flex-row max-sm:flex-col my-6">
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
      <Container>
        <div
          id="what_we_do"
          className="flex flex-row h-[calc(100vh/1.6)] relative my-24"
        >
          <div className="w-1/2"></div>
          <div className="flex flex-col absolute top-10">
            <h2 className="text-groupBlack font-semibold lg:text-6xl md:text-5xl max-sm:text-5xl">
              What <span className="text-groupBlue">we do</span>
            </h2>
            <span className="block w-1/2 border-y-2 border-gray-800 my-6"></span>
            <ul>
              <ul>
                {services.services.map((service, idx) => {
                  return (
                    <li key={idx} className="py-1">
                      <p className="text-3xl max-sm:text-2xl font-body text-groupBlack">
                        {service}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </ul>
          </div>
          <div
            className="rounded-xl"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url(${manAtDesk.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "10%",
              width: "60%",
              height: "100%",
            }}
          ></div>
        </div>
      </Container>
      <Container>
        <div
          id="our_focus"
          className="flex flex-row h-[calc(100vh/1.6)] relative my-24"
        >
          <div
            className="rounded-xl"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0.0)), url(${teamPhoto.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "",
              width: "60%",
              height: "100%",
            }}
          ></div>
          <div className="flex flex-col absolute right-0 top-24 max-sm:top-10 max-sm:items-end md:items-end">
            <h2 className="text-groupBlack font-semibold lg:text-6xl md:text-5xl max-sm:text-5xl">
              Our <span className="text-groupBlue">Focus</span>
            </h2>
            <span className="block w-1/2 border-y-2 border-gray-800 my-6"></span>
            <ul>
              {focusContent.focuses.map((focus, idx) => {
                return (
                  <li key={idx} className="py-1">
                    <p className="text-3xl max-sm:text-2xl font-body text-groupBlack max-sm:text-end md:text-end">
                      {focus}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <div
          id="our_team"
          className="flex flex-col h-[calc(100vh/2.3)] max-sm:h-[calc(100vh/1.4ç)] relative my-24"
        >
          <div className="my-10">
            <h2 className="text-groupBlack mb-3 font-semibold lg:text-4xl md:text-5xl max-sm:text-5xl">
              Our <span className="text-groupBlue">Team</span>
            </h2>
            <span className="block w-40 max-sm:w-52 border-y-2 border-groupBlack my-61"></span>
          </div>
          <div className="md:hidden">
            <Slider data={team.team} />
          </div>
          {/* should only be seen on large screens*/}
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
                      height: "200px",
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
          {/* <ul className="flex flex-row space-x-5">
              {team.team.map((member, idx) => {
                return (
                  <li key={idx} className="w-1/3">
                    <div
                      className="rounded-xl"
                      style={{
                        backgroundImage: `url(${teamPhoto.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "500px",
                      }}
                    ></div>
                    <div className="my-3">
                      <h2 className="text-groupBlue text-2xl">{member.name}</h2>
                      <p className="text-xl">{member.position}</p>
                    </div>
                  </li>
                );
              })}
            </ul> */}
        </div>
      </Container>
      <section
        id="contact"
        className="flex bg-groupBlue w-full py-28 max-w-md:py-20 max-sm:py-16 px-40 max-sm:px-4"
      >
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
