import { type NextRequest } from "next/server";

import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (
  _request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    await connectDB();
    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Couldn't find the property", { status: 404 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
