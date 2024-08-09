"use client";

import ClipLoader from "react-spinners/ClipLoader";

const LoadingPage = () => {
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={{
        display: "block",
        margin: "100px auto",
      }}
    />
  );
};

export default LoadingPage;
