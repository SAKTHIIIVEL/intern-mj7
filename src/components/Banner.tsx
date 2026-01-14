"use client";

export default function Banner() {
  return (
    <section className="relative w-full h-[816px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Banner_video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlays */}
      <div
  className="absolute inset-0 w-full h-full"
  style={{
    background: `
      linear-gradient(360deg, rgba(0, 0, 0, 0.20) 18.27%, rgba(0, 0, 0, 0) 100%),
      linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 81.73%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))
    `,
  }}
/>
    </section>
  );
}

