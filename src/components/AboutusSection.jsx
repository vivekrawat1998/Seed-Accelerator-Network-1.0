import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Dummy media image URLs, replace with your files
const mainImg = "/SAM_3.JPG";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="container mx-auto py-10 md:py-20 px-4 flex flex-col md:flex-row items-center justify-center bg-white">
      {/* Left Media Block */}
      <div
        className="relative w-full md:w-[500px] max-w-[700px] min-h-[420px] flex flex-col items-center justify-center mb-8 md:mb-0"
        data-aos="fade-right"
      >
        {/* Main farmer image */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
          <img src={mainImg} alt="[translate:SAN Farmer]" className="object-cover w-full h-full" />
        </div>

        <div className="absolute top-[85px] right-[-10px] w-1 h-28 bg-yellow-400 rounded-xl"></div>
      </div>

      {/* Right Text Block */}
      <div
        className="w-full md:w-2/3 max-w-2xl md:pl-12 flex flex-col justify-start"
        data-aos="fade-left"
      >
        {/* Pill label */}
        <span className="inline-block bg-yellow-400 text-white px-5 py-2 mb-4 rounded-full w-[100px] font-medium text-sm shadow">
          About us
        </span>
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-parkinsans font-bold text-gray-900 mb-5 leading-snug">
          About Seed Accelerator Network
        </h2>
        {/* Descriptive paragraph */}
        <p className="mb-5 text-gray-700 font-Nunito text-md">
          The Seed Accelerator Network (SAN) is an institutional platform conceptualized under the Seed Systems and Product Management (SSPM) unit at IRRI to strengthen the adaptive and confirmatory testing, scaling, delivery, and adoption of improved and newer rice varieties across South Asia emerging from diverse breeding pipelines and targeted at priority market segments.
          SAN was initiated in recognition of persistent challenges in varietal turnover, seed replacement, and dissemination of newly released and primarily public-bred varieties, which often fail to reach their ultimate potential—and farmers—in a timely and effective manner.
        </p>
        <div className="flex flex-row items-center mt-4 gap-6">
          <Link to="/about" className="bg-green-700 text-white font-semibold px-4 py-3 md:px-7  md:py-3 rounded-lg shadow hover:bg-green-800 transition">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
