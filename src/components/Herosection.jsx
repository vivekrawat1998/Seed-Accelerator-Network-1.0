import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"; // Import fade effect CSS
import { Autoplay, EffectFade } from "swiper/modules"; // Import EffectFade module
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "The Emerging Rice Sector",
    image: "/DSC_0199.jpg",
    caption: "India needs to fast-pace the adoption of emerging rice segments at vast agricultural base.",
  },
  {
    title: "Seeds: The Heart of Farming",
    image: "/hero/seeds the heart of farming.jpg",
    caption: "Seeds determine yield, profitability, and resilience — yet older varieties dominate.",
  },
  {
    title: "From Research to Farmer's field",
    image: "/hero/Research for the farmers field.JPG",
    caption: "Testing, positioning, advocating new varieties in real farming conditions to build trust.",
  },
  {
    title: "Challenges for Seed Accelerators",
    image: "/hero/Challenge for seed acceleration.JPG",
    caption: "Seed accelerators struggle to access timely information and basic seeds of new varieties.",
  },
  {
    title: "The Birth of the Seed Accelerator Network (SAN)",
    image: "/DSC_0315 (1).JPG",
    caption: "Seeds determine yield, profitability, and resilience — yet older varieties dominate.",
  },
  {
    title: "Stronger Seed Systems",
    image: "/hero/Strong seed system1.jpg",
    caption: "Improving seed availability, awareness campaigns, and enterprise development.",
  },
  {
    title: "Towards Resilient Farming Futures",
    image: "/hero/Towards reselient farming.jpg",
    caption: "Faster varietal turnover means higher yields, better incomes, and climate resilience.",
  },
];

const HeroSection = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black">
      {/* Carousel Images & Section Text */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, EffectFade]} // Add EffectFade module
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        loop
        effect="fade" // Set effect to fade
        className="absolute inset-0 w-full h-full"
      >
        {sections.map((section, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={section.image}
                alt={`slide ${section.title}`}
                className="object-cover w-full h-full brightness-70"
                {...(idx === 0 ? { fetchpriority: "high", loading: "eager" } : {})}
              />
              {/* Enhanced Gradient Overlay with Blur */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20 " />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-0">
                <div className="w-full flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-Nunito md:text-5xl font-extrabold text-white mb-2 text-center  tracking-wide font-parkinsans">
                    {section.title}
                  </h2>
                  <p className="text-base md:text-xl text-gray-100 font-Nunito text-center max-w-2xl  px-6 py-3 rounded-2xl  mt-2 font-medium">
                    {section.caption}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Call-to-action and navigation controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-end pb-8 pointer-events-none">
        <div className="flex gap-6 pointer-events-auto">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Slide"
            className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-yellow-400 hover:bg-prime focus:outline-none focus:ring-4 focus:ring-yellow-400 cursor-pointer focus:ring-opacity-70 shadow-lg transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Slide"
            className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-800 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400 cursor-pointer focus:ring-opacity-70 shadow-lg transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        <div className="flex gap-3 flex-wrap justify-center mt-6 pointer-events-auto">
          <Link
            to="/ourwork"
            className="bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-700 transition"
          >
            Explore Now
          </Link>
          <Link
            to="/about"
            className="bg-white text-green-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-600 hover:text-white transition border-r-4 border-yellow-500 relative overflow-hidden"
          >
            About Us
            <span className="absolute right-0 bottom-0 w-3 h-full bg-yellow-500 transform skew-x-[-25deg] origin-bottom-right"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
