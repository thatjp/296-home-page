import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";

const CaseStudies = ({ offset, gradient, onClick, data }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={() => onClick()}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={() => onClick()}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span>0{offset + 1}</span>
    </ParallaxLayer>
    <ParallaxLayer offset={offset} speed={0.3} onClick={() => onClick()}>
      <div className="w-1/2 max-sm:w-screen">
        <h2 className="text-slate-200 lg:text-6xl md:text-5xl max-sm:text-5xl">
          {data.company}
        </h2>
        <span className="block w-1/2 border-y-2 bg-slate-200 my-6"></span>
        <h3 className="text-slate-200	lg:text-4x1">{data.industry}</h3>
        <p className="text-slate-200	lg:text-lg">{data.content}</p>
        <div>
          <span className="text-slate-200	">Technologies:</span>
          <div className="w-1/2 flex flex-wrap">
            {data.technologies.map((tech, idx) => {
              return (
                <div key={idx} className="w-1/3 p-2">
                  <p className="test text-slate-200">
                    {tech}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ParallaxLayer>
  </>
);

export default CaseStudies;
