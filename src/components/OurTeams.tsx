"use client";

import Image from "next/image";
import TeamCard from "./TeamCard";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Dinesh",
    role: "CHIEF OPERATIVE OFFICER",
    image: "/team/dinesh.png",
  },
  {
    name: "Chandru",
    role: "PRODUCTION CONTROLLER",
    image: "/team/dinesh.png",
  },
  {
    name: "Sidhu",
    role: "PRODUCTION SUPERVISOR",
    image: "/team/dinesh.png",
  },
  {
    name: "Madesh",
    role: "FINANCIAL ADMINISTRATOR",
    image: "/team/dinesh.png",
  },
];

export default function OurTeams() {
  return (
    <section id="team" className="w-full bg-black py-18 px-6 md:px-20">
      {/* Heading */}
      <div className="max-w-9xl mx-auto text-center mb-20 px-12">
        <h2 className="text-6xl md:text-[100px] font-[900] mb-6 text-left">
          <span className="text-[#C4C4C4]">OUR </span>
          <span className="text-red-600">TEAMS</span>
        </h2>

        <p className="max-w-5xl pl-38 mx-auto text-[#C4C4C4] text-base text-left md:text-[24px] leading-relaxed">
         We specialize in producing high-quality films, digital content, and visual narratives that blend strong concepts with striking aesthetics. From concept development to final execution, our team is committed to delivering stories that are authentic, impactful, and timeless.
        </p>
      </div>

      {/* Team Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
       
    </section>
  );
}
