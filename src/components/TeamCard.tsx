"use client";

import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: TeamCardProps) {
  const fontSize =
  name.length > 16 
  ? "text-[1.7rem]"
    : name.length > 11
      ? "text-[2.1rem]"
      : name.length > 9
      ? "text-[2.8rem]"
      : "text-[3.5rem]";

      const isFemale =
  image.includes("female");
  return (
    <div className="team-card group relative w-[240px] h-[390px]  overflow-hidden rounded-[15px] transition-all duration-500 ease">
      {/* Red Vertical Pill (CENTERED, NOT FULL HEIGHT) */}
      <div
        className="absolute left-1 top-1/2 -translate-y-1/2 
                h-[390px] w-[125px] bg-red-600 rounded-l-[50px] z-0"
      />

      {/* Vertical Name (CENTERED INSIDE PILL) */}
      {/* Vertical Name Wrapper (FIXED WIDTH) */}
      <div className="absolute -left-[100px] top-1/2 -translate-y-[70%] z-10">
        <span
          className={`block w-[300px] text-center -rotate-90
          ${fontSize}
          text-red-300 font-extrabold tracking-wider
          whitespace-nowrap select-none opacity-80`}
        >
          {name}
        </span>
      </div>

      {/* Person Image (LOWER + STRONG OVERLAP) */}
      <div
  className={`absolute inset-x-0 bottom-20 z-20 flex justify-center
    ${isFemale ? "translate-x-12" : "translate-x-8"}`}
>
        <Image
          src={image}
          alt={name}
          width={isFemale ? 220 : 260}
          height={isFemale ? 340 : 380}
          className="object-contain translate-y-6"
          priority
        />
      </div>

      {/* STRONG Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-28 
                      bg-gradient-to-t from-black via-black/90 to-transparent 
                      z-30"
      />

      {/* Role Text */}
      <div className="absolute bottom-5 left-0 w-full text-center z-40">
        <p className="text-white text-sm tracking-widest">{role}</p>
      </div>
    </div>
  );
}
