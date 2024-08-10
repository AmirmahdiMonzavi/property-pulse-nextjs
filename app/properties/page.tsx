import PropertyCard from "@/components/PropertyCard";

// import connectDB from "@/config/database";
// import Property from "@/models/Property";

import { type Property as PropertyType } from "@/components/PropertyCard";

const fetchProperties = async () => {
  const response = await fetch("http://localhost:3000/api/properties");
  return await response.json();
};

const PropertiesPage = async () => {
  // await connectDB();
  // const properties = (await Property.find({}).lean()) as PropertyType[];

  const properties = (await fetchProperties()) as PropertyType[];

  return (
    <section className="px-4 py-6">
      <div className="mx-auto px-4 py-6 container-xl lg:container">
        {properties.length === 0 ? (
          <p className="text-center">No Properties</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
