import { useState, useEffect } from "react";

// List of coins to track with their symbols
const COINS = [
  { 
    id: "bitcoin", 
    symbol: "BTC", 
    name: "Bitcoin", 
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
  },
  { 
    id: "solana", 
    symbol: "SOL", 
    name: "Solana", 
    image: "https://assets.coingecko.com/coins/images/4128/small/solana.png"
  },
  { 
    id: "bonk", 
    symbol: "BONK", 
    name: "Bonk", 
    image: "https://assets.coingecko.com/coins/images/28600/small/bonk.jpg"
  },
  { 
    id: "popcat", 
    symbol: "POPCAT", 
    name: "Popcat", 
    image: "https://assets.coingecko.com/coins/images/33760/small/image.jpg"
  },
  { 
    id: "maga", 
    symbol: "TRUMP", 
    name: "MAGA", 
    image: "https://assets.coingecko.com/coins/images/31498/small/Maga-Trump-Logo-200px.png"
  }
];

// Fallback image for when the main image fails to load
const FALLBACK_IMAGE = "https://via.placeholder.com/24?text=?";

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = FALLBACK_IMAGE;
  };

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        // Create a comma-separated list of symbols
        const symbols = COINS.map(coin => coin.symbol).join(',');
        
        // Fetch data from CryptoCompare
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbols}&tsyms=USD`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch price data');
        }

        const data = await response.json();
        
        // Transform the data to match our format
        const formattedData = COINS.map(coin => {
          const coinData = data.RAW[coin.symbol]?.USD;
          if (!coinData) {
            throw new Error(`No data available for ${coin.symbol}`);
          }
          
          return {
            id: coin.id,
            symbol: coin.symbol.toLowerCase(),
            name: coin.name,
            image: coin.image,
            current_price: coinData.PRICE,
            market_cap: coinData.MKTCAP,
            market_cap_rank: 0, // Will be calculated after sorting
            total_volume: coinData.TOTALVOLUME24H,
            price_change_percentage_24h: coinData.CHANGEPCT24HOUR,
            last_updated: new Date().toISOString()
          };
        });

        // Sort by market cap and assign ranks
        formattedData.sort((a, b) => b.market_cap - a.market_cap);
        formattedData.forEach((coin, index) => {
          coin.market_cap_rank = index + 1;
        });

        setCryptoData(formattedData);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        // Fallback to mock data if API fails
        const mockData = COINS.map((coin, index) => ({
          id: coin.id,
          symbol: coin.symbol.toLowerCase(),
          name: coin.name,
          image: coin.image,
          current_price: Math.random() * 1000,
          market_cap: Math.random() * 1000000000,
          market_cap_rank: index + 1,
          total_volume: Math.random() * 100000000,
          price_change_percentage_24h: (Math.random() * 40) - 20,
          last_updated: new Date().toISOString()
        }));
        setCryptoData(mockData);
      }
    };

    fetchCryptoData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchCryptoData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 max-w-5xl z-50 mx-auto text-sm ">
      <h2 className="text-2xl font-semibold text-gray-300">Crypto Market Prices</h2>
      {error && (
        <div className="mt-2 p-2 bg-red-500/20 border border-red-500 rounded text-red-200">
          Error: {error}
        </div>
      )}
      <table className="w-full mt-4 border-collapse border border-gray-700 text-gray-300">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2 border border-gray-700">Name</th>
            <th className="p-2 border border-gray-700">Symbol</th>
            <th className="p-2 border border-gray-700">Price (USD)</th>
            <th className="p-2 border border-gray-700">Image</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index} className="text-center border border-gray-700">
              <td className="p-2">{crypto.name}</td>
              <td className="p-2 uppercase">{crypto.symbol}</td>
              <td className="p-2">${crypto.current_price.toFixed(2)}</td>
              <td className="p-2">
                <img 
                  src={crypto.image} 
                  alt={crypto.name} 
                  className="w-6 h-6 mx-auto"
                  onError={handleImageError}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoPrices;
