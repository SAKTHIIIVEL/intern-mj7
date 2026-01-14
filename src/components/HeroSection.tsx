"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[816px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/heroVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Small Tagline */}
        <p className="text-white text-sm md:text-2xl mb-4 tracking-wide">
          Where Stories Become Cinema
        </p>

        {/* Main Heading */}
        <h1 className="text-white font-extrabold text-[36px] md:text-[64px] leading-tight max-w-5xl">
          We Don’t Just Make{" "}
          <span className="text-red-600">Movies</span>, <br />
          We Create{" "}
          <span className="text-red-600">Experiences</span>
        </h1>

        {/* CTA Button */}
        <button
          className="mt-10 px-8 py-4 bg-red-600 hover:bg-red-700
                     text-white font-semibold rounded-md
                     transition duration-300"
        >
          Explore More
        </button>
      </div>
    </section>
  );
}
