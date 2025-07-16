/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";



const PreviousTokens = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleGetCode = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.open("https://t.me/anasfazal", "_blank");
    }, 2000);
  }
  return (
    <>

      <div>
        <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 z-10">
          <div className="bg-[#131B2E] p-6 rounded-lg shadow-lg" style={{ opacity: 1 }}>
            <div className="relative min-h-screen flex flex-col justify-between">


              <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 min-w-60 text-center">
                <a
                  onClick={handleGetCode}
                 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:px-6 px-3 py-3 bg-indigo-600 input-gradient-border animate-border text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 text-nowrap md:text-base text-sm transition text-center space-x-2 w-full cursor-pointer"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <span>Get the code to create your coins ⚡️</span>
                    )}
                </a>
              </div>

              <div className=" z-10 flex-1">
                <div className="text-center py-12">
                  <p className="text-gray-500">You haven't created any tokens yet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviousTokens;
