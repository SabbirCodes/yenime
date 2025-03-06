import React from "react";

const LoadMore = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <img
        className="w-12 h-12 object-contain"
        src="./spinner.svg"
        alt="spinner"
      />
    </div>
  );
};

export default LoadMore;
