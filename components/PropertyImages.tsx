"use client";

import Image from "next/image";

import { Gallery, Item } from "react-photoswipe-gallery";

const PropertyImages = ({ images }: { images: string[] }) => {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        {images.length === 1 ? (
          <div className="container mx-auto">
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width={1000}
              height={600}
            >
              {({ ref, open }) => (
                <Image
                  ref={ref}
                  onClick={open}
                  src={images[0]}
                  className="cursor-pointer w-[1800px] h-[400px] object-cover rounded-xl"
                  width={1800}
                  height={400}
                  alt="Property"
                  priority={true}
                />
              )}
            </Item>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${
                  images.length === 3 && index === 2
                    ? "col-span-2"
                    : "col-span-1"
                }`}
              >
                <Item
                  original={image}
                  thumbnail={image}
                  width={1000}
                  height={600}
                >
                  {({ ref, open }) => (
                    <Image
                      ref={ref}
                      onClick={open}
                      src={image}
                      className="cursor-pointer object-cover h-[400px] rounded-xl w-full"
                      width={1800}
                      height={400}
                      alt="Property"
                      priority={true}
                    />
                  )}
                </Item>
              </div>
            ))}
          </div>
        )}
      </section>
    </Gallery>
  );
};

export default PropertyImages;
