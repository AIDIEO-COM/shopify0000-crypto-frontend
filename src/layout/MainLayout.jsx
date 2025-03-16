import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "@/utils/ScrollTop";
import FloatingCrypto from "@/components/ui/FloatingCrypto";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4 md:p-12 md:mx-16 overflow-x-hidden">
        <ScrollToTop />
        <FloatingCrypto/>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
