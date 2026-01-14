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
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
const [paused, setPaused] = useState(false);

  const CARD_WIDTH = 240;
  const GAP = 32;
  const STEP = CARD_WIDTH + GAP;

  useEffect(() => {
    const updateCenter = () => {
      setCenterOffset(window.innerWidth / 2 - CARD_WIDTH / 2);
    };
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  useEffect(() => {
  if (paused) return;

  const interval = setInterval(() => {
    setActiveIndex((prev) => {
      if (prev === projects.length - 1) {
        setDirection(-1);
        return prev - 1;
      }

      if (prev === 0) {
        setDirection(1);
        return prev + 1;
      }

      return prev + direction;
    });
  }, 3000);

  return () => clearInterval(interval);
}, [direction, paused]);


  return (
    <section
      id="project"
      className="relative w-full bg-black py-32 overflow-visible"
    >
      {/* 🔴 CINEMATIC RED VIGNETTE */}
      <div
        className="absolute -top-2 -bottom-2 inset-x-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(220,38,38,0.35) 0%, rgba(0,0,0,1) 75%)",
        }}
      />

      {/* TITLE */}
      <h2 className="relative z-10 text-center text-6xl md:text-9xl font-extrabold mb-20">
        <span className="text-white">OUR </span>
        <span className="text-red-600">PROJECTS</span>
      </h2>

      <div className="relative z-10 w-full flex items-center">
        {/* LEFT ARROW */}
        <button
          onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
          className="absolute left-6 z-30 text-white text-6xl opacity-70 hover:opacity-100 transition"
        >
          ‹
        </button>

        {/* VIEWPORT */}
        <div className="w-full overflow-hidden" 
        onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}>
          <div
            className="flex gap-8 transition-transform duration-700 ease-out items-center"
            style={{
              transform: `translateX(${centerOffset - activeIndex * STEP}px)`,
              minHeight: "420px",
            }}
          >
            {projects.map((src, index) => {
              const offset = index - activeIndex;
              const distance = Math.abs(offset);
              const isCenter = offset === 0;

              const rotateY = offset === 0 ? 0 : offset > 0 ? -18 : 18;

              const scale = offset === 0 ? 0.95 : distance === 1 ? 0.92 : 0.82;

              const translateZ = offset === 0 ? 120 : -distance * 80;

              const blur = offset === 0 ? "blur(0px)" : "blur(1px)";

              const brightness =
                offset === 0 ? "brightness(1)" : "brightness(0.6)";

              const zIndex = 50 - distance;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative w-[240px] h-[340px] shrink-0 cursor-pointer
                             transition-all duration-700 ease-out"
                  style={{
                    transform: `
                      perspective(1600px)
                      translateZ(${translateZ}px)
                      rotateY(${rotateY}deg)
                      scale(${scale})
                    `,
                    filter: `${blur} ${brightness}`,
                    zIndex,
                  }}
                >
                  {/* 🔴 CENTER GLOW (LEFT & RIGHT ONLY) */}
                  {isCenter && (
                    <div
                      className="absolute top-1/2 -translate-y-[calc(50%-10px)]
               -left-30 -right-30 h-[40%]
               bg-red-600/40 blur-[90px]
               -z-10 rounded-full"
                    />
                  )}

                  {/* POSTER */}
                  <Image
                    src={src}
                    alt="movie"
                    fill
                    className="object-cover rounded-md shadow-2xl"
                  />

                  {/* 🌫️ DARK OVERLAY FOR SIDE CARDS */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/40 rounded-md" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() =>
            setActiveIndex((i) => Math.min(i + 1, projects.length - 1))
          }
          className="absolute right-6 z-30 text-white text-6xl opacity-70 hover:opacity-100 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
