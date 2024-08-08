import Navbar from "@/components/Navbar";

import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse",
  description: "Find the perfect rental Property",
  keywords: "rental, property, real estate",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main> {children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
