"use client";

export default function HeroSection() {
  const handleContactScroll = () => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (
    <section id="hero" className="relative w-full h-[816px] overflow-hidden max-sm:h-[500px]">
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
        <p className="text-white text-sm max-sm:text-[15px] md:text-2xl mb-4 tracking-wide">
          Where Stories Become Cinema
        </p>

        {/* Main Heading */}
        <h1 className="xxs:text-[20px] xs:text-[22px] max-sm:text-[24px] text-white font-extrabold text-[36px] md:text-[48px] lg:text-[64px] leading-tight max-w-5xl">
          We Don’t Just Make{" "}
          <span className="text-red-600">Movies</span>, <br />
          We Create{" "}
          <span className="text-red-600">Experiences</span>
        </h1>

        {/* CTA Button */}
        <button
          className="mt-10 px-8 py-4 bg-red-600 max-sm:text-[15px] max-sm:font-[500] hover:bg-red-700
                     text-white font-semibold rounded-md
                     transition duration-300"
                     onClick={handleContactScroll}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
