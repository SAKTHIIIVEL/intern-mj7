"use client";

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
    <section id="team" className="w-full py-[30px] bg-black xxs1:py-[50px] xxs:py-[50px] md:py-18 px-6 lg:px-20">
      
      {/* Heading */}
      <div className="max-w-9xl mx-auto mb-16 text-center px-4 lg:px-12">
        <h2 className="text-[36px] xxs:text-[42px] xs1:text-[48px] md:text-[70px] lg:text-[100px] font-[900] mb-6 text-center lg:text-left lg:pl-[30px] xl:pl-[50px] 2xl:pl-[80px]">
          <span className="text-[#C4C4C4]">OUR </span>
          <span className="text-red-600">TEAMS</span>
        </h2>

        <p className="max-w-5xl mx-auto text-[#C4C4C4] text-[15px] md:text-[20px] lg:text-[24px] leading-relaxed text-center lg:text-left lg:pl-38">
          We specialize in producing high-quality films, digital content, and
          visual narratives that blend strong concepts with striking aesthetics.
          From concept development to final execution, our team is committed to
          delivering stories that are authentic, impactful, and timeless.
        </p>
      </div>

      {/* Team Cards */}
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          place-items-center sm:place-items-stretch
          lg:px-17
        "
      >
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
