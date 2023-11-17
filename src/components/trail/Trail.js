import React from "react";
import { useTrail, a } from "@react-spring/web";

import styles from "./styles.module.css";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 400 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 40,
    x: 0,
    height: open ? 110 : 0,
    width: 500,
    delay: 250,
    from: { opacity: 0, x: 0, height: 0, width: 0 },
  });
  return (
    <div>
      {trail.map(({ height, width, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ width }}>
            <h1 className="font-heading font-semibold sm:text-9xl max-sm:text-8xl max-sm:text-left max-sm:absolute max-sm:bottom-0">
              {items[index]}
            </h1>
          </a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
