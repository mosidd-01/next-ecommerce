"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/17853183/pexels-photo-17853183/free-photo-of-close-up-of-wet-light-pink-roses-in-a-garden-after-rain.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/21367105/pexels-photo-21367105/free-photo-of-teapot-and-mug-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/21699250/pexels-photo-21699250/free-photo-of-a-boat-is-sailing-in-the-ocean-near-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/24554172/pexels-photo-24554172/free-photo-of-a-bowl-of-pink-roses-on-a-white-sheet.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
