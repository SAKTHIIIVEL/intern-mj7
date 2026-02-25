"use client";

export default function CollaborationSection() {
  const handleContactScroll = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      className="relative w-full 
             h-[55vh] sm:h-[60vh] lg:h-[80vh]
             flex items-center justify-center text-center
             overflow-hidden mt-4
             
             bg-no-repeat bg-center bg-cover
             
             bg-[url('/collobaration_bg_mobile.png')]
             lg:bg-[url('/collobaration_bg.png')]"
    >
      {/* Content */}
      <div className="relative z-10 lg:max-w-5xl xl1:max-w-6xl px-6 md:px-10">
        <h2 className="text-red-600 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold mb-6">
          Collaborations & Investments
        </h2>

        <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed mb-10">
          We collaborate with production houses, brands, businesses, and
          investors to deliver quality projects on time and within budget. From
          co-productions to complete execution, our experienced team ensures
          transparency, efficiency, and successful outcomes.
        </p>

        <button
          className="bg-red-600 hover:bg-red-700 transition-all duration-300 
                           text-white px-8 py-3 rounded-xl text-sm sm:text-base 
                           md:text-lg shadow-lg hover:scale-105"
          onClick={handleContactScroll}
        >
          Join Us
        </button>
      </div>
    </section>
  );
}
