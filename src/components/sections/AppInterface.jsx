import React from "react";
import appInterfaceImage from "../../assets/Group 2085663173.png";

const AppInterface = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wider text-blue-600">
            CAMPUSPE MOBILE EXPERIENCE
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Check Out Our <span className="text-blue-600">App Interface</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Experience the power of a unified campus ecosystem right in your
            pocket.
          </p>
        </div>

        {/* Static app interface image */}
        <div className="mx-auto max-w-7xl">
          <img
            src={appInterfaceImage}
            alt="CampusPe mobile app interfaces showing discovery, job posting, applications, and college details"
            className="block h-auto w-full rounded-2xl object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AppInterface;
