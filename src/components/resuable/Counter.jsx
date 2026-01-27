"use client";

import { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [end, duration]);

  return <span>{count}+</span>;
};

export default Counter;
