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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black 
                 py-12 px-5 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="lg:max-w-[990px] xl1:max-w-[1180px] mx-auto">
        {/* ===== HEADER ===== */}
        <h2 className="text-left text-red-600 text-[34px] xxs:text-[38px] xs:text-[48px] xs1:text-[53px] max-sm:text-center lg:text-left lg:text-[100px] md:text-[96px] md:text-center font-[900] mb-14 uppercase">
          ABOUT <span className="text-gray-200">US</span>
        </h2>

        {/* ================= ROW 1 ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-10 lg:mb-20">
          {/* Left Image */}
          <div
            className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 translate-y-10 lg:-translate-x-20 lg:translate-y-0"
            }`}
          >
            <div className="relative w-[85%] sm:w-[75%] md:w-[65%] lg:w-full max-w-[520px]">
              <Image
                src="/about_image1.png"
                alt="Film Production"
                width={520}
                height={520}
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Text */}
          <div
            className={`w-full lg:w-1/2 text-white text-center lg:text-left transition-all duration-1000 ease-out delay-200
            ${isVisible 
  ? "opacity-100 translate-x-0 translate-y-0" 
  : "opacity-0 translate-y-10 lg:translate-x-20 lg:translate-y-0"
}`}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-[#FFFFFFC2]">
              We are a dynamic film production company working across native,
              interstate, and international markets, delivering content in
              multiple languages particularly Tamil, Telugu, Hindi, and
              Malayalam. With a strong vision to create impactful cinema, we
              collaborate with national and global partners to bring powerful
              stories to life.
            </p>

            <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-[#FFFFFFC2]">
              Our team consists of experienced technical experts, directors, and
              creative professionals, enabling us to handle projects of all
              scales—from small independent films to large, high-budget
              commercial productions. We also act as line producers, ensuring
              seamless execution, budget control, and timely project delivery.
            </p>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text */}
          <div
            className={`w-full lg:w-1/2 text-white order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 ease-out
            ${isVisible 
  ? "opacity-100 translate-x-0 translate-y-0" 
  : "opacity-0 translate-y-10 lg:-translate-x-20 lg:translate-y-0"
}`}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-[#FFFFFFC2]">
              We believe in collaboration and innovation. We actively partner
              with investors, co-producers, direction teams, writers, and
              creative talents who are passionate about shaping the future of
              the film industry. With access to multiple investors and an
              expanding network, we welcome new collaborations that align with
              our commitment to quality and efficiency. Beyond production, we
              provide a strong platform for emerging actors, artists, and
              filmmakers. We not only offer opportunities based on talent and
              performance but also provide guidance and mentorship to help
              refine their craft.
            </p>

            <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-[#FFFFFFC2]">
              Our motto is simple: Deliver quality cinema within timelines while
              nurturing creativity and building meaningful partnerships for the
              future of the film industry.
            </p>
          </div>

          {/* Right Image */}
          <div
            className={`w-full lg:w-1/2 flex justify-center order-1 lg:order-2 transition-all duration-1000 ease-out delay-200
           ${isVisible 
  ? "opacity-100 translate-x-0 translate-y-0" 
  : "opacity-0 translate-y-10 lg:translate-x-20 lg:translate-y-0"
}`}
          >
            <div className="relative w-[85%] sm:w-[75%] md:w-[65%] lg:w-full max-w-[520px]">
              <Image
                src="/about_image2.png"
                alt="Cinema Camera"
                width={520}
                height={520}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
