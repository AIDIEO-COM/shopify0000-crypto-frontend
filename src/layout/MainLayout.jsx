import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "@/utils/ScrollTop";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4 md:p-12 overflow-x-hidden">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
