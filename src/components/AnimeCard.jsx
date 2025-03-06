import React, { memo } from "react";
import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AnimeCard = memo(({ anime, idx }) => {
  // Extract needed properties to prevent unnecessary re-renders
  const { name, kind, episodes, episodes_aired, score, image } = anime;
  const episodeCount = episodes || episodes_aired;
  
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: Math.min(idx * 0.25, 1),
        ease: "easeInOut",
        duration: 0.3,
      }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[48vh]">
        <img
          src={`https://shikimori.one${image.original}`}
          alt={name}
          className="rounded-xl h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-3 py-4">
        <div className="flex items-center justify-between gap-1">
          <h2 className="text-white text-xl font-bold line-clamp-1 w-full">
            {name}
          </h2>
          <div className="py-1 px-2 rounded-sm bg-neutral-800">
            <p className="text-white font-bold capitalize text-sm">
              {kind}
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <div className="flex flex-row gap-2 items-center">
            <img src="./episodes.svg" alt="episodes" width={16} height={16} />
            <p className="font-bold text-base text-white">
              {episodeCount}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <img src="./star.svg" alt="rating" width={16} height={16} />
            <p className="text-base font-bold text-yellow-400">{score}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default AnimeCard;