"use client";

import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div
      className="relative w-[270px] h-[420px] bg-black overflow-hidden
             transition-all duration-500 ease-out
             hover:-translate-y-5 hover:scale-[1.02]
             hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
    >
      {/* Red Vertical Pill (CENTERED, NOT FULL HEIGHT) */}
      <div
        className="absolute left-1 top-1/2 -translate-y-1/2 
                h-[390px] w-[125px] bg-red-600 rounded-l-[50px] z-0"
      />

      {/* Vertical Name (CENTERED INSIDE PILL) */}
      {/* Vertical Name Wrapper (FIXED WIDTH) */}
      <div className="absolute -left-[100px] top-1/2 -translate-y-1/2 z-10">
        <span
          className="block w-[300px] text-center -rotate-90
               text-red-300 text-[3.5rem] font-extrabold tracking-wider
               select-none opacity-80"
        >
          {name}
        </span>
      </div>

      {/* Person Image (LOWER + STRONG OVERLAP) */}
      <div className="absolute inset-x-0 bottom-25 z-20 flex justify-center translate-x-6">
        <Image
          src={image}
          alt={name}
          width={260}
          height={380}
          className="object-contain translate-y-6"
          priority
        />
      </div>

      {/* STRONG Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 
                      bg-gradient-to-t from-black via-black/90 to-transparent 
                      z-30"
      />

      {/* Role Text */}
      <div className="absolute bottom-6 left-0 w-full text-center z-40">
        <p className="text-white text-sm tracking-widest">{role}</p>
      </div>
    </div>
  );
}
