import { type NextRequest } from "next/server";

import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (_request: NextRequest) => {
  try {
    await connectDB();
    const properties = await Property.find({});

    if (!properties) {
      return new Response("Couldn't find properties", { status: 404 });
    }

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
