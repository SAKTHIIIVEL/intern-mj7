"use client";

import Image from "next/image";

const posters = [
  "/movie_posters/movie_1.png",
  "/movie_posters/movie_2.jpg",
  "/movie_posters/movie_3.jpg",
  "/movie_posters/movie_4.jpg",
  "/movie_posters/movie_5.jpg",
  "/movie_posters/movie_2.jpg",
  "/movie_posters/movie_3.jpg",
];

export default function OurPortfolio() {
  return (
    <section className="w-full bg-black py-28 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-[64px] md:text-[96px] font-[900]">
          <span className="text-white">OUR </span>
          <span className="text-red-600">PORTFOLIO</span>
        </h2>
        <p className="text-white mt-4 text-[20px]">
          A Place to display our master piece
        </p>
      </div>

      {/* Portfolio Fan */}
      <div className="relative w-full flex justify-center items-center">
        <div className="relative w-[900px] h-[360px]">
          {posters.map((src, index) => {
            const middle = Math.floor(posters.length / 2);
            const offset = index - middle;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2
                           -translate-x-1/2 -translate-y-1/2
                           transition-transform duration-500"
                style={{
  transform: `
    translateX(${offset * 160}px)
    translateY(${Math.abs(offset) * 30}px)
    rotate(${offset * 4}deg)
    scale(${1 - Math.abs(offset) * 0.02})
  `,
  zIndex: index,
}}

              >
                <div className="relative w-[180px] h-[260px]">
                  <Image
                    src={src}
                    alt="portfolio poster"
                    fill
                    className="object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
