"use client";

export default function Banner() {
  return (
    <section className="relative w-full h-[250px] lg:h-[886px] bg-black xxs:h-[250px] xs:h-[280px] xs1:h-[300px] sm:h-[380px] md:h-[550px] xl:h-[980px] xl1:h-[1070px] 2xl:h-[1100px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/banner_video1.mp4" type="video/mp4" />
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

