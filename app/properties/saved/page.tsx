import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

import PropertyCard, { Property } from "@/components/PropertyCard";

const SavedProperties = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();
  let userId;

  if (sessionUser) {
    userId = sessionUser.userId;
  }

  const { bookmarks } = (await User.findById(userId).populate("bookmarks")) as {
    bookmarks: Property[];
  };

  return (
    <section className="px-4 p/y-6">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl mb-4">Saved Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bookmarks.length === 0 ? (
            <p>No Saved Properties</p>
          ) : (
            bookmarks.map((bookmark, index) => (
              <PropertyCard key={index} property={bookmark} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SavedProperties;
