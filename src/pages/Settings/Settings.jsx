
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Settings = () => {
  const navigate = useNavigate();
  const [isNotificationsOn, setIsNotificationsOn] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isConnectWallet, setIsConnectWallet] = useState(false);
  const [gasFee, setGasFee] = useState("normal");
  const [showModal, setShowModal] = useState(false);
  const [solanaAddress, setSolanaAddress] = useState("");
  const [solAmount, setSolAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWalletClick = (wallet) => {
    setIsConnectWallet(false);
    setErrorMessage(`Access Denied: Upgrade Required!`);
  };

  // console.log(isDarkMode);
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/"); // Redirect to home after confirmation
      }
    });
  };

  const toggleNotifications = () => setIsNotificationsOn(!isNotificationsOn);
  const toggleDarkMode = (e) => {
    e.stopPropagation();
    setIsDarkMode(!isDarkMode);
  };
  const toggleConnectWallet = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsConnectWallet(!isConnectWallet);
    }, 2000);
  };
  const changeGasFee = (fee) => setGasFee(fee);
  const handleWithdraw = () => {
    // Handle withdrawal logic
    setShowModal(false);
  };

  return (
    <>

      <main className="relative text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">

        <div className="bg-[#131B2E] md:p-6 rounded-lg shadow-lg">
          <div className="max-w-2xl mx-auto p-6 min-h-screen flex flex-col relative">
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <svg
                  onClick={() => navigate("/dashboard")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-left w-6 h-6 cursor-pointer"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                <h2 className="text-2xl font-bold flex-1 text-center">
                  Settings
                </h2>
              </div>

              <div className="p-6 bg-navy-800 rounded-xl border border-blue-500/20 mb-6">
                <h3 className="text-lg font-bold mb-3">Wallet</h3>
                {
                  errorMessage && (
                    <div className="flex items-center space-x-2 text-red-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-circle w-5 h-5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                      </svg>
                      <span>{errorMessage}</span>
                    </div>)
                }
                {isConnectWallet ? (

                  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-[#161B22] rounded-xl border border-fuchsia-500/20 p-6 w-full max-w-sm">
                      <h3 className="text-xl font-bold text-white mb-4">Connect Wallet</h3>
                      <div className="space-y-3">
                        <button
                          className="w-full cursor-pointer flex items-center justify-between p-4 rounded-lg bg-[#0D1117] hover:bg-[#1C2128] border border-fuchsia-500/20 transition-colors duration-200"
                          onClick={() => handleWalletClick("Phantom")}
                        >
                          <span className="text-white font-medium">Phantom</span>
                          <img
                            src="https://d10leigxh71r1t.cloudfront.net/1200x1200/70b4f3fbc7/phantom-wallet-logo.svg"
                            alt="Phantom"
                            className="w-8 h-8"
                          />
                        </button>
                        <button
                          className="w-full cursor-pointer flex items-center justify-between p-4 rounded-lg bg-[#0D1117] hover:bg-[#1C2128] border border-fuchsia-500/20 transition-colors duration-200"
                          onClick={() => handleWalletClick("Solflare")}
                        >
                          <span className="text-white font-medium">Solflare</span>
                          <img
                            src="https://cdn.prod.website-files.com/614c99cf4f23700c8aa3752a/6323b698c42eaa7561f81542_public.png"
                            alt="Solflare"
                            className="w-8 h-8"
                          />
                        </button>
                        <button
                          className="w-full cursor-pointer p-3 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors duration-200"
                          onClick={() => setIsConnectWallet(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>

                ) : (
                  <button
                    onClick={toggleConnectWallet}
                    className="w-full cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-xl flex items-center justify-center"
                  >

                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-wallet w-5 h-5 inline-block mr-2"
                        >
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                        </svg>
                        <span>Connect Wallet</span>
                      </>
                    )}
                  </button>
                )}
              </div>
              <div
                onClick={toggleNotifications}
                className="bg-navy-800 cursor-pointer rounded-xl p-6 border border-blue-500/20 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bell w-6 h-6"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  <div className="flex justify-between w-full items-center">
                    <div>
                      <h3 className="text-lg font-medium">Notifications</h3>
                      <div className="flex items-center">
                        <p>{isNotificationsOn ? "On" : "Off"}</p>
                      </div>
                    </div>
                    <label className="ml-4 cursor-pointer flex items-center">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={isNotificationsOn}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleNotifications();
                          }}
                          className="hidden"
                        />
                        <div
                          className={`toggle-switch w-12 h-6  rounded-full shadow-inner ${isNotificationsOn ? " bg-blue-500" : "bg-gray-400"
                            }`}
                        >
                          <div
                            className={`w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${isNotificationsOn
                              ? "transform translate-x-6 bg-blue-500"
                              : ""
                              }`}
                          ></div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div
                onClick={toggleDarkMode}
                className="bg-navy-800 relative cursor-pointer rounded-xl p-6 border border-blue-500/20 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-moon w-6 h-6"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h3 className="text-lg font-medium">Appearance</h3>
                      <div className="flex justify-between w-full items-center">
                        <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
                      </div>
                    </div>
                    <label className="ml-auto cursor-pointer flex items-center">
                      <div className="relative">
                        <input
                          type="checkbox"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDarkMode();
                          }}
                          checked={isDarkMode}
                          className="hidden"
                        />
                        <div
                          className={`toggle-switch w-12 h-6 rounded-full shadow-inner ${isDarkMode ? "bg-blue-500" : "bg-gray-400"
                            }`}
                        >
                          <div
                            className={`w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${isDarkMode
                              ? "transform translate-x-6 bg-blue-500"
                              : ""
                              }`}
                          ></div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-navy-800 rounded-xl p-6 border border-blue-500/20 mb-4">
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings w-6 h-6"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Gas Fees</h3>
                    <p>Current: {gasFee}</p>
                    <div className="flex justify-between items-center gap-5 mt-2">
                      <button
                        className={`px-6 py-2 cursor-pointer rounded-xl ${gasFee === "normal" ? "bg-blue-600" : "bg-gray-500"
                          } text-white`}
                        onClick={() => changeGasFee("normal")}
                      >
                        Normal
                      </button>
                      <button
                        className={`px-6 py-2 cursor-pointer rounded-xl ${gasFee === "fast" ? "bg-blue-600" : "bg-gray-500"
                          } text-white`}
                        onClick={() => changeGasFee("fast")}
                      >
                        Fast
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="mt-6  px-4 py-3 cursor-pointer bg-red-600 text-white flex w-full justify-center items-center  gap-2 rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-out w-5 h-5 mr-2"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <path d="m16 17 5-5-5-5" />
                  <path d="M21 12H9" />
                </svg>
                Log out
              </button>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="absolute inset-0 flex items-center justify-center -top-[30%] z-20 bg-black/60 bg-opacity-50 transition-opacity ease-in-out duration-300">
            <div className="bg-white p-6 rounded-lg w-full sm:w-96 max-w-md transform scale-95 transition-transform duration-300 ease-out">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Withdraw Funds
              </h3>

              <input
                type="text"
                placeholder="Enter Solana Address"
                value={solanaAddress}
                onChange={(e) => setSolanaAddress(e.target.value)}
                className="w-full p-3 text-black mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              />

              <input
                type="number"
                placeholder="Enter Amount (SOL)"
                value={solAmount}
                onChange={(e) => setSolAmount(e.target.value)}
                className="w-full text-black p-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              />

              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full py-3 text-white bg-gray-500 hover:bg-gray-600 cursor-pointer rounded-lg transition duration-300 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  onClick={handleWithdraw}
                  className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg transition duration-300 ease-in-out"
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Settings;
