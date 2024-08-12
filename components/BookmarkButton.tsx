"use client";

import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import bookmarkProperty from "@/actions/bookmarkProperty";
import checkBookmarkStatus from "@/actions/checkBookmarkStatus";

import { FaBookmark } from "react-icons/fa";

import { Property } from "./PropertyCard";

const BookmarkButton = ({ property }: { property: Property }) => {
  const { data: session } = useSession();

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkBookmarkStatus(property._id)
      .then((res) => {
        setIsLoading(false);
        setIsBookmarked(res.isBookmarked);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [isBookmarked]);

  const handleClick = async () => {
    if (!session) {
      toast.error("You need to be signed in to bookmark a listing");
      return;
    }

    bookmarkProperty(property._id)
      .then((res) => {
        setIsBookmarked(res.isBookmarked);
        toast.success(res.message);
      })
      .catch((error) => toast.error(error));
  };

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  return isBookmarked ? (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className=" mr-2" /> Remove Bookmark
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className=" mr-2" /> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
