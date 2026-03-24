"use client";

import { useEffect, useRef } from "react";
import TeamCard from "./TeamCard";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Dr.Dheeran J.W",
    role: "Director, Founder & Actor",
    image: "/team/dinesh.png",
  },
  {
    name: "Rakesh Kumawat",
    role: "Director",
    image: "/team/dinesh.png",
  },
  {
    name: "Dir.Latha Maniyarasu",
    role: "Creative Head Director",
    image: "/team/female_1.png",
  },
  {
    name: "Mr.Madesh S",
    role: "Executive Producer & Financial Administrator",
    image: "/team/dinesh.png",
  },
  {
    name: "Rup Kaur Sidhu",
    role: "Production Supervisor",
    image: "/team/female_2.png",
  },
  
];

export default function OurTeams() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef(0);

  useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  const speed = 0.6;
  const singleSetWidth = track.scrollWidth / 2;

  let isPaused = false;

  const animate = () => {
    if (!isPaused) {
      positionRef.current -= speed;

      if (Math.abs(positionRef.current) >= singleSetWidth) {
        positionRef.current = 0;
      }

      track.style.transform = `translateX(${positionRef.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  animationRef.current = requestAnimationFrame(animate);

  // Pause on hover
  const handleMouseEnter = () => {
    isPaused = true;
  };

  const handleMouseLeave = () => {
    isPaused = false;
  };

  track.addEventListener("mouseenter", handleMouseEnter);
  track.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    cancelAnimationFrame(animationRef.current);
    track.removeEventListener("mouseenter", handleMouseEnter);
    track.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);

  return (
    <section
      id="team"
      className="w-full py-[30px] bg-black xxs1:py-[50px] xxs:py-[50px] md:py-18 px-6 lg:px-20"
    >
      {/* Heading */}
      <div className="max-w-9xl mx-auto mb-16 text-center px-4 lg:px-12">
        <h2 className="text-[36px] xxs:text-[42px] xs1:text-[48px] md:text-[70px] lg:text-[100px] font-[900] mb-6 text-center lg:text-left lg:pl-[30px] xl:pl-[50px] 2xl:pl-[80px]">
          <span className="text-[#C4C4C4]">OUR </span>
          <span className="text-red-600">TEAM</span>
        </h2>

        <p className="max-w-5xl mx-auto text-[#C4C4C4] text-[15px] md:text-[20px] lg:text-[24px] leading-relaxed text-center lg:text-left lg:pl-38">
          We specialize in producing high-quality films, digital content, and
          visual narratives that blend strong concepts with striking aesthetics.
          From concept development to final execution, our team is committed to
          delivering stories that are authentic, impactful, and timeless.
        </p>
      </div>

      {/* Infinite Scroll */}
      <div className="relative overflow-hidden w-full mt-10">
        <div ref={trackRef} className="flex w-max">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div key={index} className="mx-6 flex-shrink-0">
              <TeamCard
                name={member.name}
                role={member.role}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}