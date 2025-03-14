import { useEffect, useState } from "react";
import AnimatedBackground from "../ui/AnimatedBorderBox";
import AnimatedBorderBox from "../ui/AnimatedBorderBox";

const Banner = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  console.log(isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div >
      {/* 1 */}
      <header className="text-center mb-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="relative">
             
             
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
                  className="lucide lucide-wallet w-8 h-8 text-purple-400 animate-pulse"
                 
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                </svg>
            

              {/* Ping animation */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 text-transparent bg-clip-text">
              Solana Stats
            </span>
          </div>
          {isDarkMode ? (
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 cursor-pointer rounded-full hover:bg-white/10 transition-colors"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon w-6 h-6 text-purple-400"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            </button>
              ) : (
               <button  onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 cursor-pointer rounded-full hover:bg-white/10 transition-colors">
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
                 className="lucide lucide-sun w-6 h-6 text-yellow-400"
               >
                 <circle cx="12" cy="12" r="4"></circle>
                 <path d="M12 2v2"></path>
                 <path d="M12 20v2"></path>
                 <path d="m4.93 4.93 1.41 1.41"></path>
                 <path d="m17.66 17.66 1.41 1.41"></path>
                 <path d="M2 12h2"></path>
                 <path d="M20 12h2"></path>
                 <path d="m6.34 17.66-1.41 1.41"></path>
                 <path d="m19.07 4.93-1.41 1.41"></path>
               </svg>
             </button>
              
              )}
        </div>
        <div className="flex justify-center items-center gap-3 mb-4">
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
            className="lucide  lucide-sparkles w-12 h-12 text-purple-400 animate-spin-slow"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            <path d="M5 3v4"></path>
            <path d="M19 17v4"></path>
            <path d="M3 5h4"></path>
            <path d="M17 19h4"></path>
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
            RugRader PRO
          </h1>
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
            className="lucide lucide-sparkles w-12 h-12 text-purple-400 animate-spin-slow"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            <path d="M5 3v4"></path>
            <path d="M19 17v4"></path>
            <path d="M3 5h4"></path>
            <path d="M17 19h4"></path>
          </svg>
        </div>
        <p className="text-purple-200 text-lg">
          Explore the Power of Solana Meme Coins
        </p>
      </header>
      {/* 2 */}
      
      <div className="mb-12 input-gradient-border animate-border  backdrop-blur-xl bg-white/5   p-6 rounded-2xl border border-white/10">
        <h2 className="text-xl  font-semibold lg:p-8 text-purple-200 mb-4">
          SOL Price Chart (7 Days)
        </h2>
        <div className="w-full">
      
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse text-gray-400">Loading chart...</div>
          </div>
          <div
            className="tv-lightweight-charts"
            style={{
              overflow: "hidden",
              direction: "ltr",
              width: "100%",
              height: "300px",
              userSelect: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {/* <iframe
              title="SOL Price Chart"
              src="https://www.tradingview.com/widgetembed/?symbol=SOLUSD&interval=D&theme=dark"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      </div>
      
      {/* 3 */}
    </div>
  );
};

export default Banner;
