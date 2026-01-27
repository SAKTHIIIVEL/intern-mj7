"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/movie_posters/movie_1.png",
  "/movie_posters/movie_2.jpg",
  "/movie_posters/movie_3.jpg",
  "/movie_posters/movie_4.jpg",
  "/movie_posters/movie_5.jpg",
];

// infinite loop buffer
const projects = [...IMAGES, ...IMAGES, ...IMAGES];

export default function ProjectsScroller() {
  /* ---------------- refs ---------------- */
  const trackRef = useRef<HTMLDivElement | null>(null);
  const xRef = useRef(0);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAnimatingRef = useRef(false);
  const startXRef = useRef(0);
  const dragStartRef = useRef(0);

  /* ---------------- viewport ---------------- */
  const [vw, setVw] = useState(0);

  useEffect(() => {
    const update = () => setVw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const IS_MOBILE = vw < 640;

  /* ---------------- sizing ---------------- */
  const CARD_WIDTH = IS_MOBILE ? 190 : 240;
  const GAP = IS_MOBILE ? 20 : 32;
  const STEP = CARD_WIDTH + GAP;

  const MOVE_TIME = 700;
  const HOLD_TIME = 900;

  /* ---------------- state ---------------- */
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  /* ---------------- helpers ---------------- */
  const getCenterOffset = () => vw / 2 - CARD_WIDTH / 2;

  const applyTransform = (x: number, animate = true) => {
    const el = trackRef.current;
    if (!el) return;

    el.style.transition = animate
      ? `transform ${MOVE_TIME}ms ease-out`
      : "none";

    el.style.transform = `translateX(${getCenterOffset() - x}px)`;
  };

  const normalizeX = () => {
    const loopWidth = IMAGES.length * STEP;

    if (xRef.current >= loopWidth * 2) {
      xRef.current -= loopWidth;
      applyTransform(xRef.current, false);
    }

    if (xRef.current <= loopWidth) {
      xRef.current += loopWidth;
      applyTransform(xRef.current, false);
    }
  };

  /* ---------------- step movement ---------------- */
  const moveStep = (dir: number) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    // activate NEXT card first
    setActiveIndex((prev) => (prev + dir + IMAGES.length) % IMAGES.length);

    // then move track
    xRef.current += dir * STEP;
    applyTransform(xRef.current);

    setTimeout(() => {
      normalizeX();
      isAnimatingRef.current = false;
    }, MOVE_TIME);
  };

  /* ---------------- autoplay ---------------- */
  useEffect(() => {
  if (paused) return;

  const loop = () => {
    moveStep(1);
    rafRef.current = setTimeout(loop, MOVE_TIME + HOLD_TIME);
  };

  rafRef.current = setTimeout(loop, HOLD_TIME);

  return () => {
    if (rafRef.current !== null) {
      clearTimeout(rafRef.current);
      rafRef.current = null;
    }
  };
}, [paused, vw]);


  /* ---------------- drag ---------------- */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartRef.current = e.clientX;
    startXRef.current = xRef.current;

    const el = trackRef.current;
    if (!el) return;

    el.style.transition = "none";
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  const onPointerMove = (e: PointerEvent) => {
    const delta = dragStartRef.current - e.clientX;
    xRef.current = startXRef.current + delta;
    applyTransform(xRef.current, false);
  };

  const onPointerUp = (e: PointerEvent) => {
    const delta = dragStartRef.current - e.clientX;

    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);

    if (Math.abs(delta) > STEP / 4) {
      moveStep(delta > 0 ? 1 : -1);
    } else {
      applyTransform(xRef.current);
    }
  };

  /* ---------------- initial position ---------------- */
  useEffect(() => {
    xRef.current = IMAGES.length * STEP; // 👈 start from middle copy
    applyTransform(xRef.current, false);
  }, [vw]);

  /* ---------------- render ---------------- */
  return (
    <section className="relative w-full bg-black py-[30px] xxs1:py-[50px] xxs:py-[50px] md:py-[70px] overflow-hidden">
      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(220,38,38,0.35) 0%, rgba(0,0,0,1) 75%)",
        }}
      />

      {/* title */}
      <h2 className="relative z-10 text-center text-3xl mb-0 xxs1:mb-0 xxs:text-[38px] xxs:mb-0 xs:text-[42px] xs:mb-0 xs1:text-[48px] xs1:mb-0 sm:mb-0 sm:text-[48px] md:text-[80px] lg:text-[100px] font-[900] md:mb-20">
        <span className="text-white">OUR </span>
        <span className="text-red-600">PROJECTS</span>
      </h2>

      {/* arrows */}
      {!IS_MOBILE && (
        <>
          <button
            onClick={() => moveStep(-1)}
            className="absolute left-6 top-1/2 translate-y-15 z-20 text-white text-6xl opacity-70 hover:opacity-100"
          >
            ‹
          </button>
          <button
            onClick={() => moveStep(1)}
            className="absolute right-6 top-1/2 translate-y-15 z-20 text-white text-6xl opacity-70 hover:opacity-100"
          >
            ›
          </button>
        </>
      )}

      {/* viewport */}
      <div
        className="relative z-10 w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          className="flex items-center touch-pan-y cursor-grab active:cursor-grabbing"
          style={{ minHeight: "420px", gap: `${GAP}px` }}
        >
          {projects.map((src, i) => {
            const realIndex = i % IMAGES.length;
            const offset = realIndex - activeIndex;
            const distance = Math.abs(offset);
            const isActive = realIndex === activeIndex;

            return (
              <div
                key={i}
                className="relative shrink-0 transition-all duration-700"
                style={{
                  width: CARD_WIDTH,
                  height: IS_MOBILE ? 300 : 340,
                  transform: `
                    perspective(1600px)
                    translateZ(${isActive ? 120 : -distance * 80}px)
                    rotateY(${isActive ? 0 : offset > 0 ? -18 : 18}deg)
                    scale(${
                      isActive
                        ? 0.95
                        : distance === 1
                        ? IS_MOBILE ? 0.78 : 0.92
                        : IS_MOBILE ? 0.65 : 0.82
                    })
                  `,
                  filter: isActive
                    ? "brightness(1)"
                    : "brightness(0.6) blur(1px)",
                  zIndex: 50 - distance,
                }}
              >
                {isActive && (
                  <div className="absolute inset-x-[-120px] top-1/2 h-[40%] bg-red-600/40 blur-[90px] -z-10 rounded-full" />
                )}

                <Image
                  src={src}
                  alt="movie"
                  fill
                  className="object-cover rounded-md shadow-2xl"
                />

                {!isActive && (
                  <div className="absolute inset-0 bg-black/40 rounded-md" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
