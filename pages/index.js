import Image from "next/image";
import Navigation from "../src/components/navigation/Navigation";
import Container from "../src/components/container/Container";
import ContactForm from "../src/components/contactForm/ContactForm";
import Button from "../src/components/button/Button";
import manAtDesk from "../public/man_at_desk.jpeg";
import chevron from "../public/296-Chevron.svg";

import "../src/app/globals.css";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Container type="full">
        <div className="flex lg:flex-row md:flex-col xs:flex-col h-[calc(100vh-140px)] lg:place-items-center md:place-content-center md:place-items-start">
          <div className="w-1/2">
            <h1 className="font-semibold lg:text-9xl md:text-7xl sm:text-5xl">
              Launch, Scale, Grow
            </h1>
            <p className="lg:text-2xl md:text-xl sm:text-lg my-6 ">
              A boutique technology consulting and development firm that
              specializes in helping start-ups and emerging business ventures
              launch, scale and grow rapidly.
            </p>
            <div className="lg:w-3/5 md:auto flex flex-row justify-between">
              <Button text="See Our Work" type="primary" />
              <Button text="See Our Work" type="secondary" />
            </div>
          </div>
          <div className="w-1/2"></div>
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
      <Container>
        <div>things</div>
      </Container>
      <Container>
        <Image
          src={manAtDesk}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="flex">
          <h2>What we do</h2>
          <ul>
            <li>Technical Design and Architecture</li>
            <li>Cutting-Edge Web Development</li>
            <li>Back-end Services and API Development</li>
            <li>Data Driven Business Intelligence</li>
            <li>Android and IOS App Development</li>
            <li>Cloud Infrastructure Solutions</li>
            <li>DevOps and CI/CD</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
      </Container>
      <Container>
        <Image
          src={manAtDesk}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="flex">
          <h2>
            Your focus is <span>our focus</span>
          </h2>
          <ul>
            <li>B2C and B2B Software Applications</li>
            <li>Creating Products from Concept to Launch</li>
            <li>Fractional CTO/CPO Consulting Services</li>
            <li>Data Warehouse Solutions</li>
            <li>Identifying and Integrating 3rd Party Solutions</li>
          </ul>
        </div>
      </Container>
      <Container>
        <ul>
          <li>
            <Image
              src={manAtDesk}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <p>Name</p>
            <p>
              <span>title</span>
            </p>
          </li>
        </ul>
      </Container>
      <Container>
        <div>things</div>
        <ContactForm />
      </Container>
    </main>
  );
}
