"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const posters = [
  "/movie_posters/movie1.jpg",
  "/movie_posters/movie2.jpg",
  "/movie_posters/movie3.jpg",
  "/movie_posters/movie4.jpg",
  "/movie_posters/movie5.png",
  "/movie_posters/movie6.jpg",
  "/movie_posters/movie_2.jpg",
];

const STACK_BASE_X = -120;
const FAN_CENTER_SHIFT = -10;

export default function OurPortfolio() {
  const sectionRef = useRef(null);
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayAnimation(false); // reset
          requestAnimationFrame(() => setPlayAnimation(true));
        }
      },
      {
        threshold: 0.4, // trigger when 40% visible
      },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full bg-black py-[30px] overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center px-[10px] md:mb-12">
        <h2 className="text-[38px] xxs1:text-[32px] xxs:text-[38px] xs1:text-[44px] md:text-[64px] lg:text-[100px] font-[900]">
          <span className="text-white">OUR </span>
          <span className="text-red-600">PORTFOLIO</span>
        </h2>
        <p className="text-white mt-4 xxs1:text-[16px] xxs:text-[18px] md:text-[20px] opacity-80">
          A place to display our masterpiece
        </p>
      </div>

      {/* Portfolio Deck */}
      <div className="relative w-full flex justify-center items-center">
        <div
          className="relative w-[900px] h-[400px] max-sm:scale-[0.42]
    max-sm:origin-center max-sm:h-[200px] min-[480px]:max-[639px]:h-[240px] min-[480px]:max-[639px]:scale-[0.5] max-xs:scale-[0.35] max-xs:h-[150px] "
        >
          {posters.map((src, index) => {
            const middle = Math.floor(posters.length / 2);
            const offset = index - middle;
            const stackOffset = index * 10;

            return (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 ${
                  playAnimation ? "animate-portfolio" : ""
                }`}
                style={
                  {
                    "--stack-x": `${STACK_BASE_X + stackOffset}px`,
                    "--fan-x": `${offset * 160 + FAN_CENTER_SHIFT}px`,
                    "--y": `${Math.abs(offset) * 28}px`,
                    "--r": `${offset * 4}deg`,
                    "--s": `${1 - Math.abs(offset) * 0.02}`,
                    zIndex: index,
                  } as React.CSSProperties
                }
              >
                <div
                  className="relative w-[200px] h-[280px] transition-transform duration-300 ease-out
             hover:-translate-y-4 hover:scale-[1.03]"
                >
                  <Image
                    src={src}
                    alt="portfolio poster"
                    fill
                    className="object-cover rounded-xl shadow-2xl"
                    priority={index < 3}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
