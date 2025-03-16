import { useState, useEffect } from "react";

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana,bonk,dogwifhat,popcat,maga,bitcoin&order=market_cap_desc&per_page=5&page=1&sparkline=false&x_cg_demo_api_key=CG-hug1nT2kpVQ8MMbfQDFu4NeK"
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="mt-10 max-w-5xl z-50 mx-auto text-sm ">
      <h2 className="text-2xl font-semibold text-gray-300">Crypto Market Prices</h2>
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
                <img src={crypto.image} alt={crypto.name} className="w-6 h-6 mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoPrices;
