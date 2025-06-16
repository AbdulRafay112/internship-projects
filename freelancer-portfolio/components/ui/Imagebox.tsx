import Image from 'next/image';
import React from 'react';

const Imagebox = ({ imageurl, alt }: { imageurl: string; alt: string }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <Image
        src={imageurl}
        alt={alt}
        width={300}
        height={200}
        className="object-cover w-full h-40 sm:h-48 transition-transform duration-300 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="/placeholder.jpg" // Add a placeholder image in /public
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Project
        </span>
      </div>
    </div>
  );
};

export default Imagebox;