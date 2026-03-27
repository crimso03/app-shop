import React from 'react';
import { FaGooglePlay, FaApple } from "react-icons/fa";
const Banner = () => {
    return (
        <section className="bg-base-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        
        
        <div className="flex-1  text-center">
          <h1 className="text-4xl  md:text-5xl lg:text-6xl font-extrabold  leading-tight">
            We Build <span className="text-primary">Productive </span>Apps
          </h1>

          <p className="py-5 md:py-6 text-gray-500 text-center text-base md:text-lg max-w-xl mx-auto ">
            Discover powerful and modern apps designed to improve your
            productivity and simplify your daily workflow.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="btn  btn-primary flex items-center  gap-2 px-6"
            >
              <FaGooglePlay className="text-lg" />
              Play Store
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="btn btn-neutral flex  items-center gap-2 px-6"
            >
              <FaApple className="text-lg" />
              App Store
            </a>
          </div>
        </div>

        
      </div>
      
    </section>
    
    );
};

export default Banner;