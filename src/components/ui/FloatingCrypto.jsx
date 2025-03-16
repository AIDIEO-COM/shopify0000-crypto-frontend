import { useEffect, useState } from "react";

const bgColors = [
  "bg-purple-600",
  "bg-yellow-600",
  "bg-orange-600",
  "bg-red-500",
  "bg-green-500",
  "bg-teal-500",
];

const formatter = new Intl.NumberFormat("en", { notation: "compact" });

const FloatingCrypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState(bgColors[0]);
  const [shakeX, setShakeX] = useState(0);
  const [shakeY, setShakeY] = useState(0);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=solana-meme-coins&x_cg_demo_api_key=CG-hug1nT2kpVQ8MMbfQDFu4NeK"
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  useEffect(() => {
    if (cryptoData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cryptoData.length);
      setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)]);
    }, 600); // 100 times per minute

    return () => clearInterval(interval);
  }, [cryptoData]);

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShakeX(Math.random() * 35 - 2);
      setShakeY(Math.random() * 0 - 2);
    }, 100);

    return () => clearInterval(shakeInterval);
  }, []);

  if (cryptoData.length === 0) return null;

  const currentCrypto = cryptoData[currentIndex];

  return (

    <div className="fixed bottom-4 z-50 left-1/2 transform -translate-x-1/2">
      <div className={`w-max py-1  px-6 rounded-md shadow-lg ${bgColor} flex items-center space-x-4`}>
        <div className="text-2xl">
          <span>{crypto.icon}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>{currentCrypto.symbol}</span> hit{" "}
          {formatter.format(currentCrypto.market_cap)} market cap 🔥
        </div>
      </div>
    </div>


  );
};

export default FloatingCrypto;
