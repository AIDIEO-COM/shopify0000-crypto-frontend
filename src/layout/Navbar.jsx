import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav
      className={`${
        location.pathname === "/" ? "hidden" : ""
      } relative border-b border-[#1E2334] bg-[#0A0F1E]/80 backdrop-blur-xl z-10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-16">
          <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
            RugRader PRO
          </h1>
          <div className={`${location.pathname === "/dashboard" ? "hidden" : ""} flex fixed z-50 top-5 left-1/2 -translate-x-1/2  justify-center my-6`}>
            <button
              onClick={() => navigate('/dashboard')} // Navigate to dashboard
              className="px-4 py-2 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600"
            >
              Go to Dashboard
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="text-gray-400 cursor-pointer hover:text-gray-300 transition-colors text-sm sm:text-base"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
