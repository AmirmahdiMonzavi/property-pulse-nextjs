import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import MessageProvider from "@/context/message-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse",
  description: "Find the perfect rental Property",
  keywords: "rental, property, real estate",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <MessageProvider>
        <html lang="en">
          <body>
            <ToastContainer />
            <Navbar />
            <main> {children}</main>
            <Footer />
          </body>
        </html>
      </MessageProvider>
    </AuthProvider>
  );
};

export default RootLayout;
