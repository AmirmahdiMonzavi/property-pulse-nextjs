import Image from "next/image";

const PropertyImages = ({ images }: { images: string[] }) => {
  return (
    <section className="bg-blue-50 p-4">
      {images.length === 1 ? (
        <div className="container mx-auto">
          <Image
            src={images[0]}
            className="w-[1800px] h-[400px] object-cover rounded-xl"
            width={1800}
            height={400}
            alt="Property"
            priority={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                images.length === 3 && index === 2 ? "col-span-2" : "col-span-1"
              }`}
            >
              <Image
                src={image}
                className="object-cover h-[400px] rounded-xl w-full"
                width={1800}
                height={400}
                alt="Property"
                priority={true}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PropertyImages;
