"use client";

export default function Banner() {
  return (
    <section className="relative w-full  h-[250px]  bg-black xxs:h-[250px] xs:h-[260px] sm:h-[380px] md:h-[500px] lg:h-[780px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >

        <source src="/banner_video21.mp4" type="video/mp4" />
      </video>
      {/* Image Overlay */}
      <img
  src="/seats.png"
  alt="Overlay"
  className="absolute bottom-0 left-0 w-full h-[50px] md:h-[100px] xxs:h-[60px] object-cover z-10 pointer-events-none"
/>
    </section>
  );
}

