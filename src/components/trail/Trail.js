import React from "react";
import { useTrail, a, config } from "@react-spring/web";

import styles from "./styles.module.css";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 400, friction:600 },
    opacity: 1,
    y: 0,
    delay: 500,
    from: { opacity: 0, x: 0, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, width, ...style }, index) => (
        <a.div
          key={index}
          className={styles.trailsText + " max-sm:h-[100px]"}
          style={style}
        >
          <a.div style={{ width }}>
            <h1 className="font-semibold xl:text-6xl sm:text-8xl max-sm:text-8xl max-sm:text-left max-sm:absolute max-sm:bottom-0 lg:my-5">
              {items[index]}
            </h1>
          </a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
