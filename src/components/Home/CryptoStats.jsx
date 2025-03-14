import { FaChartBar, FaCoins } from "react-icons/fa";

const CryptoStats = () => {
  return (
    <div className="grid mt-12 grid-cols-2 md:grid-cols-4 gap-4">
      {/* SOL Price Card */}
      <div className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
        
        <FaChartBar className="w-6 h-6 text-purple-400" />
        <div className="text-center">
          <p className="text-purple-200 text-sm">SOL Price</p>
          <p className="font-medium text-white">$126.00</p>
        </div>
      </div>

      {/* Market Cap Card */}
      <div className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
      <FaCoins className="w-6 h-6 text-purple-400" />
        <div className="text-center">
          <p className="text-purple-200 text-sm">Market Cap</p>
          <p className="font-medium text-white">$64.2B</p>
        </div>
      </div>

      {/* 24h Change Card */}
      <div className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
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
          className="lucide lucide-trending-up w-6 h-6 text-purple-400"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
        <div className="text-center">
          <p className="text-purple-200 text-sm">24h Change</p>
          <p className="font-medium text-red-400">-0.54%</p>
        </div>
      </div>

      {/* 24h Volume Card */}
      <div className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
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
          className="lucide lucide-zap w-6 h-6 text-purple-400"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        <div className="text-center">
          <p className="text-purple-200 text-sm">24h Volume</p>
          <p className="font-medium text-white">$2.8B</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoStats;
