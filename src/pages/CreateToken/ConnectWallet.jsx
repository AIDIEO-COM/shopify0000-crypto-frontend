import { useState } from "react";
import BgAnimation from "@/components/ui/BgAnimation";

const ConnectWallet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleWalletClick = (wallet) => {
    setIsModalOpen(false);
    setErrorMessage(`${wallet} wallet not found. Please install ${wallet} wallet.`);
  };

  return (
    <div>
      <BgAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
        <div className="bg-[#131B2E] p-6 rounded-lg shadow-lg">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#0A0F1E] rounded-2xl p-8 border border-[#1E2334]">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Connect Your Wallet
              </h2>
              <div className="relative">
                <button
                  className="flex cursor-pointer items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white hover:from-fuchsia-700 hover:to-pink-700 transition-all duration-200"
                  onClick={() => setIsModalOpen(true)}
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
                    className="w-5 h-5"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                  <span>Connect Wallet</span>
                </button>
                {errorMessage && (
                  <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="flex items-center space-x-2 text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-circle w-5 h-5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>

        <div className=" flex justify-center my-12">
          <a
            href="https://t.me/anasfazal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white text-sm py-3 px-6 rounded-lg w-max mx-auto cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110 focus:outline-none focus:ring focus:ring-purple-300 slow-pulse hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-700"
          >
            Get the code to create your coins ⚡️
          </a>
        </div>
      </div>
      {isModalOpen && (
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
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;