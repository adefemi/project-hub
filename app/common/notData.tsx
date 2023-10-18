/* eslint-disable @next/next/no-img-element */
import React from "react";

const NotData = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <img src="/notavail.webp" alt="nodata" className="w-32" />
      <p className="text-tertiary mt-2">No data here!</p>
    </div>
  );
};

export default NotData;
