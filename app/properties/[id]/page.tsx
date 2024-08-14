import Link from "next/link";

import { FaArrowLeft } from "react-icons/fa";

import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyImages from "@/components/PropertyImages";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButtons from "@/components/ShareButtons";

import connectDB from "@/config/database";
import Property from "@/models/Property";

import { type Property as PropertyType } from "@/components/PropertyCard";
import PropertyDetails from "@/components/PropertyDetails";
import { convertToSerializableObject } from "@/utils/converToObject";

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const propertyDoc = (await Property.findById(
    params.id
  ).lean()) as PropertyType;
  const property = convertToSerializableObject(propertyDoc);

  return (
    <>
      <PropertyHeaderImage images={property.images} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
            <aside className="space-y-4">
              <BookmarkButton property={property} />
              <ShareButtons property={property} />
            </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
