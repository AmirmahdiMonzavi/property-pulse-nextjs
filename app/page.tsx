import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/properties">Go to Properties Page</Link>
    </div>
  );
};

export default HomePage;
