import React from 'react';
import heroImg from "../../assets/hero.png";
const TrustedSection = () => {
    return (
        <div>
            {/* RIGHT IMAGE */}
        <div className="flex-1 mt-10 flex justify-center">
          <img
            src={heroImg}
            alt="App UI"
            className="w-72 md:w-96 lg:w-[430px] max-w-full drop-shadow-2xl"
          />
        </div>

            <section className="bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 py-16 md:py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-sm md:text-base text-purple-100 mb-3">
              Total Downloads
            </p>
            <h3 className="text-5xl md:text-6xl font-extrabold mb-3">29.6M</h3>
            <p className="text-sm md:text-base text-purple-100">
              21% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm md:text-base text-purple-100 mb-3">
              Total Reviews
            </p>
            <h3 className="text-5xl md:text-6xl font-extrabold mb-3">906K</h3>
            <p className="text-sm md:text-base text-purple-100">
              46% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-sm md:text-base text-purple-100 mb-3">
              Active Apps
            </p>
            <h3 className="text-5xl md:text-6xl font-extrabold mb-3">132+</h3>
            <p className="text-sm md:text-base text-purple-100">
              31 More Will Launch
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default TrustedSection;