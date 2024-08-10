import Link from "next/link";

import PropertyCard from "./PropertyCard";

import connectDB from "@/config/database";
import Property from "@/models/Property";

import { type Property as PropertyType } from "./PropertyCard";

const HomeProperties = async () => {
  await connectDB();

  const recentProperties = (await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean()) as PropertyType[];

  return (
    <>
      {" "}
      <section className="px-4 py-6">
        <h2 className="text-center font-bold text-blue-500 text-3xl mt-6">
          Recent Properties
        </h2>
        <div className="mx-auto px-4 py-6 container-xl lg:container">
          {recentProperties.length === 0 ? (
            <p className="text-center">No Properties</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="max-w-lg mx-auto my-10 mb-20 px-6">
        <Link
          href="/properties"
          className="bg-black hover:bg-gray-700 block text-white rounded-xl text-center px-6 py-4 font-bold"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
