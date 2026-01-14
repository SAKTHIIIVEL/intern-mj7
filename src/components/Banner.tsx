"use client";

export default function Banner() {
  return (
    <section className="relative w-full h-[886px] bg-black overflow-hidden">
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
  className="absolute bottom-0 left-0 w-full h-[100px] object-cover z-10 pointer-events-none"
/>
    </section>
  );
}

