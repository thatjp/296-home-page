import React from "react";
import { useTrail, a } from "@react-spring/web";

import styles from "./styles.module.css";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1500, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 40,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>
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
