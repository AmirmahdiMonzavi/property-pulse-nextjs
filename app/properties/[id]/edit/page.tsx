import EditPropertyForm from "@/components/EditPropertyForm";

import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/converToObject";

const EditPropertyPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  await connectDB();
  const propertyDoc = await Property.findById(params.id);
  const property = convertToSerializableObject(propertyDoc);

  return (
    <section className="bg-blue-50">
      <div className="container mx-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <EditPropertyForm property={property} />
        </div>
      </div>
    </section>
  );
};

export default EditPropertyPage;
