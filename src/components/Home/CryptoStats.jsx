import { useState, useEffect } from "react";
import { FaChartBar, FaCoins } from "react-icons/fa";

const CryptoStats = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        // Fetch current price and 24h stats
        const response = await fetch(
          "https://api.binance.com/api/v3/ticker/24hr?symbol=SOLUSDT"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        
        // Format the data to match our component's needs
        const formattedData = {
          usd: parseFloat(data.lastPrice),
          usd_market_cap: parseFloat(data.quoteVolume) * parseFloat(data.lastPrice),
          usd_24h_vol: parseFloat(data.volume) * parseFloat(data.lastPrice),
          usd_24h_change: parseFloat(data.priceChangePercent)
        };
        
        setCryptoData(formattedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-400">Error: {error}</p>;

  const handleGetCode = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.open("https://t.me/anasfazal");

    }, 1500);
  }

  return (
    <>
      <div className="grid mt-12 grid-cols-2 md:grid-cols-4 gap-4">
        {/* SOL Price Card */}
        <div className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
          <FaChartBar className="w-6 h-6 text-purple-400" />
          <div className="text-center">
            <p className="text-purple-200 text-sm">SOL Price</p>
            <p className="font-medium text-white">
              ${cryptoData.usd.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Market Cap Card */}
        <div className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
          <FaCoins className="w-6 h-6 text-purple-400" />
          <div className="text-center">
            <p className="text-purple-200 text-sm">Market Cap</p>
            <p className="font-medium text-white">
              ${(cryptoData.usd_market_cap / 1e9).toFixed(1)}B
            </p>
          </div>
        </div>

        {/* 24h Change Card */}
        <div className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
          <div className="text-center">
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
              className="lucide mx-auto mb-2 lucide-trending-up w-6 h-6 text-purple-400"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
            <p className="text-purple-200 text-sm">24h Change</p>
            <p
              className={`font-medium ${
                cryptoData.usd_24h_change >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {cryptoData.usd_24h_change.toFixed(2)}%
            </p>
          </div>
        </div>

        {/* 24h Volume Card */}
        <div className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
          <div className="text-center">
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
              className="lucide mx-auto mb-2 lucide-zap w-6 h-6 text-purple-400"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <p className="text-purple-200 text-sm">24h Volume</p>
            <p className="font-medium text-white">
              ${(cryptoData.usd_24h_vol / 1e9).toFixed(1)}B
            </p>
          </div>
        </div>
      </div>
      {/* button */}
      <div className=" flex justify-center my-12">
        <button
          onClick={handleGetCode}
          className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white text-sm py-3 px-6 rounded-lg w-max mx-auto cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110 focus:outline-none focus:ring focus:ring-purple-300 slow-pulse hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 min-w-40 flex items-center justify-center"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <span>Get Your Code</span>
          )}
        </button>
      </div>
    </>
  );
};

export default CryptoStats;
