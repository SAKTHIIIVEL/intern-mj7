"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-black py-4 px-5 md:py-13 md:px-12 xxs:px-6 xs:px-7  overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <h2 className="text-left text-red-600 text-[34px] xxs:text-[38px] xs:text-[48px] xs1:text-[53px] max-sm:text-center lg:pl-[110px] md:text-[96px] md:text-center font-[900] mb-13 uppercase">
          ABOUT <span className="text-gray-200">US</span>
        </h2>

        {/* Content Section */}
        {/* Content Section */}
<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

  {/* Left Side - Image */}
  <div
    className={`flex-shrink-0 w-full lg:w-1/2 flex justify-center
      transition-all duration-1000 ease-out
      ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
    `}
  >
    <div className="relative w-full max-w-[500px]">
      <Image
        src="/About_us_image.png"
        alt="MJ7 Logo"
        width={500}
        height={500}
        className="object-contain"
        priority
      />
    </div>
  </div>

  {/* Right Side - Text */}
  <div
    className={`w-full text-center px-4 lg:text-left lg:px-0 lg:w-1/2 text-white space-y-6 pr-0 lg:pr-11
      transition-all duration-1000 ease-out delay-200
      ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
    `}
  >
    <p className="text-lg lg:text-xl leading-relaxed mb-1">
      MJ7 Cinema Production is a creative powerhouse dedicated to
      crafting compelling cinematic experiences that resonate with
      audiences across cultures and platforms.
    </p>

    <p className="text-lg lg:text-xl leading-relaxed">
      Founded with a passion for storytelling and visual excellence, MJ7
      stands at the intersection of creativity, technology, and emotion.
      We specialize in producing high-quality films, digital content,
      and visual narratives that blend strong concepts with striking
      aesthetics. From concept development to final execution, our team
      is committed to delivering stories that are authentic, impactful,
      and timeless.
    </p>
  </div>

</div>

        {/* ✅ MOBILE-ONLY STATS — PLACE HERE */}
    <div
  className={`hidden mt-16 space-y-10 text-center
    transition-all duration-1000 ease-out delay-300
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
>
      <div>
        <h3 className="text-white text-5xl font-extrabold">10+</h3>
        <p className="text-red-500 mt-2">Years in the business</p>
      </div>

      <div>
        <h3 className="text-white text-5xl font-extrabold">20+</h3>
        <p className="text-red-500 mt-2">Projects Completed</p>
      </div>

      <div>
        <h3 className="text-white text-5xl font-extrabold">25+</h3>
        <p className="text-red-500 mt-2">Happy Partners</p>
      </div>

      <div>
        <h3 className="text-white text-5xl font-extrabold">50+</h3>
        <p className="text-red-500 mt-2">Active Followers</p>
      </div>
    </div>
      </div>
    </section>
  );
}
