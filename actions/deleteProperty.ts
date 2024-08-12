"use server";

import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

import { Property as PropertyType } from "@/components/PropertyCard";

const deleteProperty = async (propertyId: string) => {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is rquired");
  }

  const { userId } = sessionUser;

  const selectedProperty = await Property.findById(propertyId);

  if (!selectedProperty) {
    throw new Error("Property Not Found");
  }

  if (selectedProperty.owner.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  const publicIds = selectedProperty.images.map((imageUrl: string) => {
    const parts = imageUrl.split("/");
    return parts.at(-1)?.split(".").at(0);
  });

  if (publicIds.length > 0) {
    for (const publicId of publicIds) {
      await cloudinary.uploader.destroy("property-pulse/" + publicId);
    }
  }

  await selectedProperty.deleteOne();

  revalidatePath("/", "layout")
};

export default deleteProperty;
