import React, { useState, useEffect } from "react";
import { newAnime } from "../data";

const HeroImg = () => {
  const [heroImag, setHeroImag] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const heroImg = async () => {
      setIsLoading(true);
      try {
        const res = await newAnime();
        setHeroImag(res);
      } catch (error) {
        console.log("Error fetching anime data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    heroImg();
  }, []);

  return (
    <header className="relative overflow-hidden max-w-6xl mx-auto rounded-b-2xl flex justify-center w-full">
      {/* Background image with overlay */}
      {heroImag.length > 0 && (
        <img
          src={`https://shikimori.one${heroImag[0]?.image?.original}`}
          alt={heroImag[0]?.name || "Anime Background"}
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        />
      )}
      <div className="absolute -z-10 inset-0 bg-black/60"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-16 z-10">
        {/* Left text section */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10">
          <img src="./logo.png" alt="logo" className="object-contain w-32 h-32 cursor-pointer" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
            Navigate The <span className="red-gradient">Colorful Cosmos </span>
            of Anime Creation
          </h1>
        </div>

        {/* Right image section */}
        <div className="flex-1 relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] flex justify-center items-center">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-pulse bg-gray-300/20 rounded-lg w-4/5 h-4/5"></div>
            </div>
          ) : (
            <img
              src="/anime.png"
              alt="anime"
              className="object-contain w-full h-full"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default HeroImg;
