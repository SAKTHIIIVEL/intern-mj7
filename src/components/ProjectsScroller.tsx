"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  "/movie_posters/movie_1.png",
  "/movie_posters/movie_2.jpg",
  "/movie_posters/movie_3.jpg",
  "/movie_posters/movie_4.jpg",
  "/movie_posters/movie_5.jpg",
];

export default function ProjectsScroller() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [centerOffset, setCenterOffset] = useState(0);

  const CARD_WIDTH = 250;
  const GAP = 25;
  const STEP = CARD_WIDTH + GAP;

  useEffect(() => {
    const updateCenter = () => {
      setCenterOffset(window.innerWidth / 2 - CARD_WIDTH / 2);
    };
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  return (
    <section className="w-full bg-black py-24 overflow-hidden">
      <h2 className="text-center text-6xl md:text-9xl font-extrabold mb-24">
        <span className="text-white">OUR </span>
        <span className="text-red-600">PROJECTS</span>
      </h2>

      <div className="relative w-full flex items-center">
        {/* LEFT */}
        <button
          onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
          className="absolute left-6 z-30 text-white text-6xl opacity-70 hover:opacity-100"
        >
          ‹
        </button>

        {/* VIEWPORT */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(${centerOffset - activeIndex * STEP}px)`,
              perspective: "1600px",
            }}
          >
            {projects.map((src, index) => {
              const offset = index - activeIndex;
              const distance = Math.abs(offset);

              const isCenter = distance === 0;
              const isIntermediate = distance === 1;

              const translateZ = -distance * 50;

              const scale = isCenter
                ? 0.88
                : isIntermediate
                ? 0.93 // 👈 reduce immediate left & right
                : 0.93 + distance * 0.05; // far cards stay big

              const scaleX = isCenter
                ? 1.15
                : isIntermediate
                ? 0.99 // 👈 reduce width of immediate side cards
                : 0.95 + distance * 0.04;

              const zIndex = 20 - distance;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative w-[250px] h-[380px] shrink-0 cursor-pointer
             transition-all duration-700 ease-out"
                  style={{
                    transform: `
      translateZ(${translateZ}px)
      scaleX(${scaleX})
      scale(${scale})
    `,
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                    zIndex,
                  }}
                >
                  {/* GLOW — FORCE BELOW */}
                  {isCenter && (
                    <>
                      <div
                        className="absolute -left-6 top-1/2 -translate-y-1/2
                   w-6 h-[80%] bg-red-600/60 blur-2xl
                   z-0"
                      />

                      <div
                        className="absolute -right-6 top-1/2 -translate-y-1/2
                   w-6 h-[80%] bg-red-600/60 blur-2xl
                   z-0"
                      />
                    </>
                  )}

                  {/* IMAGE — FORCE ABOVE */}
                  <Image
                    src={src}
                    alt="movie"
                    fill
                    className="object-cover rounded-md shadow-2xl relative z-10"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={() =>
            setActiveIndex((i) => Math.min(i + 1, projects.length - 1))
          }
          className="absolute right-6 z-30 text-white text-6xl opacity-70 hover:opacity-100"
        >
          ›
        </button>
      </div>
    </section>
  );
}
